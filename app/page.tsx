import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Reactify Solutions",
};

async function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Services />
      <Technologies />
      {/* <Video /> */}
      <Brands />
      <Testimonials/>
    </>
  );
}
export default Home;
