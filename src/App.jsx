import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { Showcase } from "./components/Showcase";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-inter text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <WhyUs />
      <Contact />
      <WhatsAppFloat />
    </div>

    
  );
}

export default App;
