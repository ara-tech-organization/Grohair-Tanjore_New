import React from "react";
import AboutHero from "../components/about/AboutHero";
import BeforeAfter from "../components/about/BeforeAfter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SecondaryHeader from "../components/SecondaryHeader";


export default function About() {
  return (
    <>
    <SecondaryHeader/>
    <Header/>
      <AboutHero />
    <BeforeAfter/>
<Footer/>
    </>
  );
}
