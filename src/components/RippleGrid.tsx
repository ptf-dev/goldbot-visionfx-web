"use client";

import { useRef, useEffect } from "react";
import { Renderer, Program, Triangle, Mesh } from "ogl";

const vert = `attribute vec2 position;varying vec2 vUv;void main(){vUv=position*0.5+0.5;gl_Position=vec4(position,0.0,1.0);}`;

const frag = `precision highp float;
uniform float iTime;uniform vec2 iResolution;uniform vec3 gridColor;uniform float rippleIntensity;uniform float gridSize;uniform float gridThickness;uniform float fadeDistance;uniform float vignetteStrength;uniform float glowIntensity;uniform float opacity;uniform bool mouseInteraction;uniform vec2 mousePosition;uniform float mouseInfluence;uniform float mouseInteractionRadius;varying vec2 vUv;
float pi=3.141592;
void main(){vec2 uv=vUv*2.0-1.0;uv.x*=iResolution.x/iResolution.y;float dist=length(uv);float func=sin(pi*(iTime-dist));vec2 rippleUv=uv+uv*func*rippleIntensity;
if(mouseInteraction&&mouseInfluence>0.0){vec2 mouseUv=(mousePosition*2.0-1.0);mouseUv.x*=iResolution.x/iResolution.y;float mouseDist=length(uv-mouseUv);float influence=mouseInfluence*exp(-mouseDist*mouseDist/(mouseInteractionRadius*mouseInteractionRadius));float mouseWave=sin(pi*(iTime*2.0-mouseDist*3.0))*influence;rippleUv+=normalize(uv-mouseUv)*mouseWave*rippleIntensity*0.3;}
vec2 a=sin(gridSize*0.5*pi*rippleUv-pi/2.0);vec2 b=abs(a);vec2 sB=vec2(smoothstep(0.0,0.5,b.x),smoothstep(0.0,0.5,b.y));
vec3 color=vec3(0.0);color+=exp(-gridThickness*sB.x*(0.8+0.5*sin(pi*iTime)));color+=exp(-gridThickness*sB.y);color+=0.5*exp(-(gridThickness/4.0)*sin(sB.x));color+=0.5*exp(-(gridThickness/3.0)*sB.y);
if(glowIntensity>0.0){color+=glowIntensity*exp(-gridThickness*0.5*sB.x);color+=glowIntensity*exp(-gridThickness*0.5*sB.y);}
float ddd=exp(-2.0*clamp(pow(dist,fadeDistance),0.0,1.0));vec2 vc=vUv-0.5;float vd=length(vc);float vignette=clamp(1.0-pow(vd*2.0,vignetteStrength),0.0,1.0);float ff=ddd*vignette;float alpha=length(color)*ff*opacity;gl_FragColor=vec4(color*gridColor*ff*opacity,alpha);}`;

export default function RippleGrid({
  gridColor = "#c9a84c",
  rippleIntensity = 0.05,
  gridSize = 10,
  gridThickness = 15,
  fadeDistance = 1.5,
  vignetteStrength = 2,
  glowIntensity = 0.1,
  opacity = 1,
  mouseInteraction = true,
  mouseInteractionRadius = 1,
}: {
  gridColor?: string; rippleIntensity?: number; gridSize?: number; gridThickness?: number;
  fadeDistance?: number; vignetteStrength?: number; glowIntensity?: number; opacity?: number;
  mouseInteraction?: boolean; mouseInteractionRadius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hex2rgb = (h: string): [number, number, number] => {
      const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
      return r ? [parseInt(r[1], 16) / 255, parseInt(r[2], 16) / 255, parseInt(r[3], 16) / 255] : [1, 1, 1];
    };

    const renderer = new Renderer({ dpr: Math.min(devicePixelRatio, 2), alpha: true });
    const gl = renderer.gl;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    el.appendChild(gl.canvas);

    const uniforms: Record<string, { value: unknown }> = {
      iTime: { value: 0 }, iResolution: { value: [1, 1] },
      gridColor: { value: hex2rgb(gridColor) }, rippleIntensity: { value: rippleIntensity },
      gridSize: { value: gridSize }, gridThickness: { value: gridThickness },
      fadeDistance: { value: fadeDistance }, vignetteStrength: { value: vignetteStrength },
      glowIntensity: { value: glowIntensity }, opacity: { value: opacity },
      mouseInteraction: { value: mouseInteraction }, mousePosition: { value: [0.5, 0.5] },
      mouseInfluence: { value: 0 }, mouseInteractionRadius: { value: mouseInteractionRadius },
    };

    const mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program: new Program(gl, { vertex: vert, fragment: frag, uniforms }),
    });

    const mouse = { x: 0.5, y: 0.5 }, target = { x: 0.5, y: 0.5 };
    let influence = 0;

    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value = [w, h];
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width;
      target.y = 1 - (e.clientY - r.top) / r.height;
    };
    const onEnter = () => { influence = 1; };
    const onLeave = () => { influence = 0; };

    if (mouseInteraction) {
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    }

    let raf = 0;
    const render = (t: number) => {
      uniforms.iTime.value = t * 0.001;
      mouse.x += (target.x - mouse.x) * 0.1;
      mouse.y += (target.y - mouse.y) * 0.1;
      (uniforms.mouseInfluence.value as number) += (influence - (uniforms.mouseInfluence.value as number)) * 0.05;
      uniforms.mousePosition.value = [mouse.x, mouse.y];
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (mouseInteraction) { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseenter", onEnter); el.removeEventListener("mouseleave", onLeave); }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      if (gl.canvas.parentElement === el) el.removeChild(gl.canvas);
    };
  }, [gridColor, rippleIntensity, gridSize, gridThickness, fadeDistance, vignetteStrength, glowIntensity, opacity, mouseInteraction, mouseInteractionRadius]);

  return <div ref={ref} className="w-full h-full relative overflow-hidden [&_canvas]:block" />;
}
