import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import About from "../Components/About";
import AboutCard from "../Components/AboutCard";
import Callaction from "../Components/Callaction";
import Services from "../Components/Services/Services";
import Portfolio from "../Components/Portfolio";
import Testimonals from "../Components/Testimonals";
import Competing from "../Components/Competing/Competing";
import Questions from "../Components/Questions";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <AboutCard />
      <Callaction />
      <Services />
      <Portfolio />
      <Testimonals />
      <Competing />
      <Questions />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
