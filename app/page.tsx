import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { ClientCases } from "@/components/sections/client-cases";
import { Workflow } from "@/components/sections/workflow";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-canvas">
      <Nav />
      <Hero />
      <ClientCases />
      <Workflow />
      <FinalCta />
      <Footer />
    </main>
  );
}
