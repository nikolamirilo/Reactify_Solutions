import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import { Metadata } from "next";
import Video from "@/components/Video";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Reactify IT Solutions",
};

async function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      <Technologies />
      <Video />
      <Brands />
      <Testimonials/>
    </>
  );
}
export default Home;
