import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import OurTeam from "./components/OurTeam";
import Testimonial from "./components/Testimonial";
import Topbar from "./components/Topbar";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";
import "./globals.css";
export default function Home() {
  return (
   <div>
    <Topbar />
    <Header />
    <HeroSection />
    <About />
    <WhatWeDo limit={4} />
    <WhyChooseUs />
    <OurTeam />
    <Testimonial />
    <Footer />
         <BackToTop />
   </div>
  );
} 

