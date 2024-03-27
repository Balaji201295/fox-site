import React from "react";
import {
  AboutMe,
  CTA,
  Footer,
  Header,
  MyPortfolio,
  MyService,
  Testimonial,
} from "../containers";
import { Brands, Navbar } from "../components";
import { brandItems } from "../constants";
const Home = () => {
  const sectionValue = "02";
  const sectionTitle = "my services";
  const contactValue = "05";
  return (
    <main>
      <Navbar />
      <Header />
      <AboutMe />
      <div className="bg-light">
        <Brands brandItems={brandItems.slice(0, 5)} />
      </div>
      <CTA />
      <MyService sectionValue={sectionValue} sectionTitle={sectionTitle} />
      <MyPortfolio />
      <Testimonial />
      <Footer sectionValue={contactValue} />
    </main>
  );
};
export default Home;
