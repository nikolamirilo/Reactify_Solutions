import Breadcrumb from "@/components/Common/Breadcrumb";
import ScheduleCall from "@/components/ScheduleCall"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Schedule a Call",
};


export default function page() {
  return (
    <div className="min-h-screen">
        <Breadcrumb
          pageName="Schedule a Call"
          description="At Reactify Solutions, we're always here to help you with your digital needs. Whether you have a question, need support, or want to learn more about how we can assist you, please don't hesitate to reach out."
        />
        <div className="flex flex-col lg:flex-row gap-8 container">
          <ScheduleCall/>
        </div>
      </div>
  )
}

