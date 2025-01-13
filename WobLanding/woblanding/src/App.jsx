import Campaigns from "./components/Campaigns";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSections from "./components/HeroSections";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <HeroSections />
      <Features />
      <Testimonials />
      <Campaigns />
      <Footer />
    </div>
  );
}

export default App;
