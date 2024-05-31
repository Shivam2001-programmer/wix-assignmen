import React from "react";
import HeroSection from "./Herosection";
import Service from "./Service";
import About from "./About";
import Client from "./Client";
import TestimonialCarousel from "./Testimonial";
import ContactForm from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div c>
      <HeroSection />
      <Service />
      <About />
      <Client />
      <TestimonialCarousel />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
