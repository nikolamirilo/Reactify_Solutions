import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { fetchData } from "@/helpers/client";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reactify IT Solutions",
};

async function Home() {
  const testimonials = await fetchData("/api/testimonials", {
    method: "GET",
    cache: "force-cache",
  });
  return (
    <div className={inter.className}>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      <Technologies />
      <Video />
      <Brands />
      <Suspense fallback="">
        <Testimonials testimonials={testimonials} />
      </Suspense>
    </div>
  );
}
export default Home;
