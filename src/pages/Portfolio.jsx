import React from "react";
import { Brands } from "../components";
import { CTA, FAQ, Hero, MyPortfolio } from "../containers";
import { brandItems } from "../constants";
const Portfolio = () => {
  const portfolioValue = "01";
  const partnerValue = "02";
  const faqValue = "03";
  return (
    <main>
      <Hero label="portfolio" title="portfolio" />
      <MyPortfolio sectionValue={portfolioValue} />
      <div className="bg-light">
        <Brands
          brandItems={brandItems}
          isAboutPage={true}
          sectionValue={partnerValue}
        />
      </div>
      <CTA isAboutPage={true} />
      <FAQ sectionValue={faqValue} />
    </main>
  );
};
export default Portfolio;
