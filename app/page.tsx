import Header from "@/components/header";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Clients from "@/components/clients";

export default function Home() {
  return (
    <div>
      <ScrollProgress />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to LCR Transport</h1>
          <p className="text-lg text-muted-foreground">Professional transportation solutions</p>
        </div>
        
        {/* Client Marquee */}
        <Clients />
      </main>
    </div>
  );
}
