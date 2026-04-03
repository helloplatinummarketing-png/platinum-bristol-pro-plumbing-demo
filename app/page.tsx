import FAQ from "@/components/faq";
import FloatingCTA from "@/components/floating-cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scroll-progress";
import Services from "@/components/services";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="bg-[#0B1829] text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
