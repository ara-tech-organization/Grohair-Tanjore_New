// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/home/HeroSection";
import Header from "../components/Header";
import AboutSection from "../components/home/AboutSection";
import HairTreatments from "../components/home/HairTreatments";
import SkinTreatments from "../components/home/SkinTreatments";
import Footer from "../components/Footer";
import OpenHours from "../components/home/OpenHours";
import YouTubeShortsTestimonial from "../components/home/YouTubeTestimonial";
import FaqSection from "../components/home/FaqSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import BookAppointment from "../components/home/BookAppointment";
import BeforeAfterSection from "../components/home/BeforeAfterSection";
import SecondaryHeader from "../components/SecondaryHeader";


export default function Home() {
  return (
    <>
    <SecondaryHeader/>
        <Header/>
      <HeroSection/>
      <AboutSection/>
      <HairTreatments/>
      <SkinTreatments/>
      <OpenHours/>
      <YouTubeShortsTestimonial/>
      <FaqSection/>
      <TestimonialsSection/>
      <BookAppointment/>
      <BeforeAfterSection/>
      <Footer/>
    </>
  );
}
