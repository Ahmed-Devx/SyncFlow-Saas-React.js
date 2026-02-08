import "./App.css";
import Contact from "./components/Contact";
 

import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Statistic from "./components/Statistic";
import Step from "./components/Step";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistic />
      <Feature />
      <Step />
      <Pricing />
      <Team />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
