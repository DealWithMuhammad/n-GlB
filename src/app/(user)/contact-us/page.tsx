import { NextPage } from "next";
import React from "react";
import Contact from "@src/components/Contact/Contact";
import { Hero } from "@src/components/Hero/Hero";

const ContactPage: NextPage = () => {
  return (
    <>
      <Hero
        heading="Get in touch with us"
        description="Contact us with your questions or feedback using the form below. Our team is eager to assist and looks forward to collaborating with you to make a positive impact through education."
        imageUrl="/contact-us.png"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
