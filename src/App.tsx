import { Navbar } from "./components/Navbar";
import { GlobalSpotlight } from "./components/GlobalSpotlight";

import { Hero } from "./sections/Hero";
import { ProductShowcase } from "./sections/ProductShowcase";
import { Workflow } from "./sections/Workflow";
import { Features } from "./sections/Features";
import { AutomationShowcase } from "./sections/AutomationShowcase";
import { Intelligence } from "./sections/Intelligence";
import { Pricing } from "./sections/Pricing";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <GlobalSpotlight />

      <Navbar />

      <Hero />

      <ProductShowcase />

      <Workflow />

      <Features />

      <AutomationShowcase />

      <Intelligence />

      <Pricing />

      <FinalCTA />

      <Footer />
    </main>
  );
}

export default App;