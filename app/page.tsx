import AboutSectionOne from "@/components/About/AboutSectionOne";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import Solutions from "@/components/Solutions";

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
      <Solutions />
      {/* <Video /> */}
      <Clients />
      <Testimonials />
    </>
  );
}
export default Home;
