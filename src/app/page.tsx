import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import GuaranteesCTA from "@/components/GuaranteesCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AuthorityPillars from "@/components/AuthorityPillars";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col text-neutral-900 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        <Hero />
        <HowItWorks />
        <Categories />
        <GuaranteesCTA />
        <FAQ />
        <AuthorityPillars />
      </main>

      <Footer />
    </div>
  );
}