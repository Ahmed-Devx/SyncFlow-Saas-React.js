import "./App.css";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Step from "./components/Step";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Step />
      <Testimonial />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
