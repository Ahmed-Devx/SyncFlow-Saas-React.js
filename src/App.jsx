import "./App.css";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistic from "./components/Statistic";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistic />
      <Feature/>
    </>
  );
}

export default App;
