import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import DivisionsSection from "./components/DivisionsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import WhyChooseUs from "./components/WhyChooseUs";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <DivisionsSection />
          <WhyChooseUs />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster richColors position="bottom-right" />
    </QueryClientProvider>
  );
}
