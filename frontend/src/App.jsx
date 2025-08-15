import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-grotesk">
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
