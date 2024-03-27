import React from "react";
import { Brands } from "../components";
import { AboutInfo, Hero, CTA, MyExperience, MySkills } from "../containers";
import { brandItems } from "../constants";
const About = () => {
  const partnerValue = "04";
  return (
    <main>
      <Hero label="about me" title="about" />
      <AboutInfo />
      <MySkills />
      <MyExperience />
      <div className="bg-light">
        <Brands
          brandItems={brandItems}
          isAboutPage={true}
          sectionValue={partnerValue}
        />
      </div>
      <CTA isAboutPage={true} />
    </main>
  );
};
export default About;
