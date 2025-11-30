import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const BackgroundSvg = (): JSX.Element => {
  return (
    <div className="bg-white overflow-x-hidden w-full min-h-screen relative">
      <FooterSection />
      <CallToActionSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HeroSection />
      <ContactSection />
      <AboutUsSection />
    </div>
  );
};
