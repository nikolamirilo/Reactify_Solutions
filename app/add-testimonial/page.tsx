import Breadcrumb from "@/components/Common/Breadcrumb";
import CreateTestimonial from "@/components/CreateTestimonial";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Testimonial",
};
const page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Add Testimonial"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <CreateTestimonial />
    </>
  );
};

export default page;
