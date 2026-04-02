import React from "react";
import ContactPage from "../components/contact/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SecondaryHeader from "../components/SecondaryHeader";



export default function Contact() {
  return (
    <>
    <SecondaryHeader/>
    <Header/>
      <ContactPage />
      <Footer/>
    </>
  );
}
