import React from "react";
import { Brands } from "../components";
import { Hero, MyService, CTA, Testimonial, FAQ } from "../containers";
import { brandItems } from "../constants";
const Service = () => {
  const serviceValue = "01";
  const partnerValue = "02";
  const testimonialValue = "03";
  const faqValue = "04";
  return (
    <main>
      <Hero label="service" title="service" />
      <MyService sectionValue={serviceValue} />
      <div className="bg-light">
        <Brands
          brandItems={brandItems}
          isAboutPage={true}
          sectionValue={partnerValue}
        />
      </div>
      <CTA isAboutPage={true} />
      <Testimonial sectionValue={testimonialValue} />
      <FAQ sectionValue={faqValue} />
    </main>
  );
};
export default Service;
