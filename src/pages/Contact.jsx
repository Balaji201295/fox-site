import React from "react";
import { Footer, Hero, Location } from "../containers";
const Contact = () => {
  const contactValue = "01";
  return (
    <main>
      <Hero label="contact" title="contact" />
      <Footer isContactPage={true} sectionValue={contactValue} />
      <Location />
    </main>
  );
};
export default Contact;
