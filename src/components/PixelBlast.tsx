"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, EffectPass, RenderPass, Effect } from "postprocessing";

type PixelBlastVariant = "square" | "circle" | "triangle" | "diamond";

interface TouchPoint { x: number; y: number; vx: number; vy: number; force: number; age: number; }

const createTouchTexture = () => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "black"; ctx.fillRect(0, 0, size, size);
  const texture = new THREE.Texture(canvas);
  texture.minFilter = THREE.LinearFilter; texture.magFilter = THREE.LinearFilter; texture.generateMipmaps = false;
  const trail: TouchPoint[] = [];
  let last: { x: number; y: number } | null = null;
  const maxAge = 64, speed = 1 / maxAge;
  let radius = 0.1 * size;
  const addTouch = (norm: { x: number; y: number }) => {
    let force = 0, vx = 0, vy = 0;
    if (last) { const dx = norm.x - last.x, dy = norm.y - last.y; if (dx === 0 && dy === 0) return; const d = Math.sqrt(dx * dx + dy * dy); vx = dx / (d || 1); vy = dy / (d || 1); force = Math.min((dx * dx + dy * dy) * 10000, 1); }
    last = { x: norm.x, y: norm.y }; trail.push({ x: norm.x, y: norm.y, age: 0, force, vx, vy });
  };
  const update = () => {
    ctx.fillStyle = "black"; ctx.fillRect(0, 0, size, size);
    for (let i = trail.length - 1; i >= 0; i--) { const p = trail[i]; p.x += p.vx * p.force * speed * (1 - p.age / maxAge); p.y += p.vy * p.force * speed * (1 - p.age / maxAge); p.age++; if (p.age > maxAge) { trail.splice(i, 1); continue; }
      const pos = { x: p.x * size, y: (1 - p.y) * size }; const easeOut = (t: number) => Math.sin((t * Math.PI) / 2); const easeOutQ = (t: number) => -t * (t - 2);
      let intensity = p.age < maxAge * 0.3 ? easeOut(p.age / (maxAge * 0.3)) : easeOutQ(1 - (p.age - maxAge * 0.3) / (maxAge * 0.7)) || 0;
      intensity *= p.force; const color = `${((p.vx + 1) / 2) * 255},${((p.vy + 1) / 2) * 255},${intensity * 255}`;
      const off = size * 5; ctx.shadowOffsetX = off; ctx.shadowOffsetY = off; ctx.shadowBlur = radius; ctx.shadowColor = `rgba(${color},${0.22 * intensity})`;
      ctx.beginPath(); ctx.fillStyle = "rgba(255,0,0,1)"; ctx.arc(pos.x - off, pos.y - off, radius, 0, Math.PI * 2); ctx.fill();
    }
    texture.needsUpdate = true;
  };
  return { canvas, texture, addTouch, update, set radiusScale(v: number) { radius = 0.1 * size * v; }, get radiusScale() { return radius / (0.1 * size); }, size };
};

const VERTEX = `void main(){gl_Position=vec4(position,1.0);}`;
const FRAGMENT = `precision highp float;
uniform vec3 uColor;uniform vec2 uResolution;uniform float uTime;uniform float uPixelSize;uniform float uScale;uniform float uDensity;uniform float uPixelJitter;uniform int uEnableRipples;uniform float uRippleSpeed;uniform float uRippleThickness;uniform float uRippleIntensity;uniform float uEdgeFade;uniform int uShapeType;
const int MAX_CLICKS=10;uniform vec2 uClickPos[MAX_CLICKS];uniform float uClickTimes[MAX_CLICKS];out vec4 fragColor;
float Bayer2(vec2 a){a=floor(a);return fract(a.x/2.+a.y*a.y*.75);}
#define Bayer4(a)(Bayer2(.5*(a))*0.25+Bayer2(a))
#define Bayer8(a)(Bayer4(.5*(a))*0.25+Bayer2(a))
float hash11(float n){return fract(sin(n)*43758.5453);}
float vnoise(vec3 p){vec3 ip=floor(p);vec3 fp=fract(p);float n000=hash11(dot(ip,vec3(1.,57.,113.)));float n100=hash11(dot(ip+vec3(1,0,0),vec3(1.,57.,113.)));float n010=hash11(dot(ip+vec3(0,1,0),vec3(1.,57.,113.)));float n110=hash11(dot(ip+vec3(1,1,0),vec3(1.,57.,113.)));float n001=hash11(dot(ip+vec3(0,0,1),vec3(1.,57.,113.)));float n101=hash11(dot(ip+vec3(1,0,1),vec3(1.,57.,113.)));float n011=hash11(dot(ip+vec3(0,1,1),vec3(1.,57.,113.)));float n111=hash11(dot(ip+vec3(1,1,1),vec3(1.,57.,113.)));vec3 w=fp*fp*fp*(fp*(fp*6.-15.)+10.);return mix(mix(mix(n000,n100,w.x),mix(n010,n110,w.x),w.y),mix(mix(n001,n101,w.x),mix(n011,n111,w.x),w.y),w.z)*2.-1.;}
float fbm2(vec2 uv,float t){vec3 p=vec3(uv*uScale,t);float amp=1.,freq=1.,sum=1.;for(int i=0;i<5;i++){sum+=amp*vnoise(p*freq);freq*=1.25;amp*=1.;}return sum*.5+.5;}
void main(){float pixelSize=uPixelSize;vec2 fragCoord=gl_FragCoord.xy-uResolution*.5;float ar=uResolution.x/uResolution.y;vec2 pixelUV=fract(fragCoord/pixelSize);float cps=8.*pixelSize;vec2 cellId=floor(fragCoord/cps);vec2 uv=cellId*cps/uResolution*vec2(ar,1.);float base=fbm2(uv,uTime*.05)*.5-.65;float feed=base+(uDensity-.5)*.3;
if(uEnableRipples==1){for(int i=0;i<MAX_CLICKS;i++){vec2 pos=uClickPos[i];if(pos.x<0.)continue;vec2 cuv=((pos-uResolution*.5-cps*.5)/uResolution)*vec2(ar,1.);float t=max(uTime-uClickTimes[i],0.);float r=distance(uv,cuv);float wR=uRippleSpeed*t;float ring=exp(-pow((r-wR)/uRippleThickness,2.));float atten=exp(-t)*exp(-10.*r);feed=max(feed,ring*atten*uRippleIntensity);}}
float bayer=Bayer8(fragCoord/uPixelSize)-.5;float bw=step(.5,feed+bayer);float h=fract(sin(dot(floor(fragCoord/uPixelSize),vec2(127.1,311.7)))*43758.5453);float M=bw*(1.+(h-.5)*uPixelJitter);
if(uEdgeFade>0.){vec2 norm=gl_FragCoord.xy/uResolution;float edge=min(min(norm.x,norm.y),min(1.-norm.x,1.-norm.y));M*=smoothstep(0.,uEdgeFade,edge);}
vec3 c=uColor;vec3 sc=mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));fragColor=vec4(sc,M);}`;

const MAX_CLICKS = 10;
const SHAPE_MAP: Record<PixelBlastVariant, number> = { square: 0, circle: 1, triangle: 2, diamond: 3 };

export default function PixelBlast({
  variant = "square", pixelSize = 3, color = "#c9a84c", className = "", speed = 0.5,
  patternScale = 2, patternDensity = 1, edgeFade = 0.5, enableRipples = true,
  rippleSpeed = 0.3, rippleThickness = 0.1, rippleIntensityScale = 1, pixelSizeJitter = 0,
}: {
  variant?: PixelBlastVariant; pixelSize?: number; color?: string; className?: string; speed?: number;
  patternScale?: number; patternDensity?: number; edgeFade?: number; enableRipples?: boolean;
  rippleSpeed?: number; rippleThickness?: number; rippleIntensityScale?: number; pixelSizeJitter?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.domElement.style.width = "100%"; renderer.domElement.style.height = "100%";
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.setClearAlpha(0);
    el.appendChild(renderer.domElement);

    const dpr = renderer.getPixelRatio();
    const uniforms = {
      uResolution: { value: new THREE.Vector2() }, uTime: { value: 0 }, uColor: { value: new THREE.Color(color) },
      uClickPos: { value: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1, -1)) },
      uClickTimes: { value: new Float32Array(MAX_CLICKS) }, uShapeType: { value: SHAPE_MAP[variant] },
      uPixelSize: { value: pixelSize * dpr }, uScale: { value: patternScale }, uDensity: { value: patternDensity },
      uPixelJitter: { value: pixelSizeJitter }, uEnableRipples: { value: enableRipples ? 1 : 0 },
      uRippleSpeed: { value: rippleSpeed }, uRippleThickness: { value: rippleThickness },
      uRippleIntensity: { value: rippleIntensityScale }, uEdgeFade: { value: edgeFade },
    };

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const mat = new THREE.ShaderMaterial({ vertexShader: VERTEX, fragmentShader: FRAGMENT, uniforms, transparent: true, depthTest: false, depthWrite: false, glslVersion: THREE.GLSL3 });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    scene.add(mesh);
    const clock = new THREE.Clock();
    const offset = Math.random() * 1000;
    let clickIx = 0;

    const resize = () => { const w = el.clientWidth || 1, h = el.clientHeight || 1; renderer.setSize(w, h, false); uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height); };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(el);

    const onDown = (e: PointerEvent) => { const rect = renderer.domElement.getBoundingClientRect(); const sx = renderer.domElement.width / rect.width, sy = renderer.domElement.height / rect.height; uniforms.uClickPos.value[clickIx].set((e.clientX - rect.left) * sx, (rect.height - (e.clientY - rect.top)) * sy); uniforms.uClickTimes.value[clickIx] = uniforms.uTime.value; clickIx = (clickIx + 1) % MAX_CLICKS; };
    renderer.domElement.addEventListener("pointerdown", onDown, { passive: true });

    let raf = 0;
    const animate = () => { uniforms.uTime.value = offset + clock.getElapsedTime() * speed; renderer.render(scene, camera); raf = requestAnimationFrame(animate); };
    raf = requestAnimationFrame(animate);

    return () => { ro.disconnect(); cancelAnimationFrame(raf); mesh.geometry.dispose(); mat.dispose(); renderer.dispose(); if (renderer.domElement.parentElement === el) el.removeChild(renderer.domElement); };
  }, [variant, pixelSize, color, speed, patternScale, patternDensity, edgeFade, enableRipples, rippleSpeed, rippleThickness, rippleIntensityScale, pixelSizeJitter]);

  return <div ref={ref} className={`w-full h-full relative overflow-hidden ${className}`} />;
}
