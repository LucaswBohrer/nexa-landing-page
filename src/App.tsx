import { Navbar } from "./components/Navbar";
import { GlobalSpotlight } from "./components/GlobalSpotlight";
import { CursorTrail } from "./components/CursorTrail";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./sections/Hero";
import { ProductShowcase } from "./sections/ProductShowcase";
import { Workflow } from "./sections/Workflow";
import { Features } from "./sections/Features";
import { AutomationShowcase } from "./sections/AutomationShowcase";
import { Intelligence } from "./sections/Intelligence";
import { Pricing } from "./sections/Pricing";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";
import Dashboard from "./pages/Dashboard";

function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <CursorTrail />
      <ScrollProgress />
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

function App() {
  if (window.location.pathname === "/dashboard") {
    return <Dashboard />;
  }

  return <LandingPage />;
}

export default App;
