import Header from "@/components/header";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Clients from "@/components/clients";
import { HeroSection } from "@/sections/hero-section";
import { BentoSection } from "@/sections/bento-section";

export default function Home() {
  return (
    <div>
      <ScrollProgress />
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      <main className="container mx-auto px-4 py-8">
        {/* Client Marquee */}
        <Clients />
      </main>
      
      {/* About Us Section */}
      <BentoSection />
    </div>
  );
}
