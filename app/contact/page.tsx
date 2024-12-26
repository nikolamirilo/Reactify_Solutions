import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us",
};

export default function page () {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="At Reactify Solutions, we're always here to help you with your digital needs. Whether you have a question, need support, or want to learn more about how we can assist you, please don't hesitate to reach out."
      />

      <Contact />
    </>
  );
};

