import Breadcrumb from "@/components/Common/Breadcrumb";
import CreateTestimonial from "@/components/CreateTestimonial";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Testimonial",
};
export default function page () {
  return (
    <>
      <Breadcrumb
        pageName="Add Testimonial"
        description="Share your thoughts and experiences with us to help improve our services. Together, we can continue to grow and deliver exceptional experiences."
      />
      <CreateTestimonial />
    </>
  );
};

