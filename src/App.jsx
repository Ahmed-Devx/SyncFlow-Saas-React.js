import "./App.css";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Statistic from "./components/Statistic";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistic />
      <Feature />
      <Pricing />
      <Team />
    </>
  );
}

export default App;
