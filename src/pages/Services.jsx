import React from "react";
import HairTreatments from "../components/services/HairTreatments";
import SkinTreatments from "../components/services/SkinTreatments";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SecondaryHeader from "../components/SecondaryHeader";



export default function Services() {
  return (
    <>
    <SecondaryHeader/>
    <Header/>
    <HairTreatments/>
    <SkinTreatments/>
    <Footer/>
    </>
  );
}
