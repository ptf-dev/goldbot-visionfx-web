import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsBar from "@/components/BenefitsBar";
import Reviews from "@/components/Reviews";
import PremiumCard from "@/components/PremiumCard";
import AboutUs from "@/components/AboutUs";
import BeforeAfter from "@/components/BeforeAfter";
import JoinVIP from "@/components/JoinVIP";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <BenefitsBar />
      <Reviews />
      <PremiumCard />
      <AboutUs />
      <BeforeAfter />
      <JoinVIP />
      <FAQs />
      <Footer />
    </main>
  );
}
