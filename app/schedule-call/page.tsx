'use client'

import Calendar from "@/components/ScheduleCall/Calendar"
import ScheduleForm from "@/components/ScheduleCall/ScheduleForm"
import { DatePickerProvider } from "@/context/DatePickerContext"

export default function ScheduleCall() {
  return (
    <DatePickerProvider>
      <div className="container mx-auto p-4 pt-32 lg:pt-0 min-h-screen flex flex-col justify-center items-center w-full">
        <h1 className="text-3xl font-bold mb-10 text-center">Schedule a Call</h1>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="w-full lg:w-2/3">
            <Calendar />
          </div>
          <div className="w-full lg:w-1/3">
            <ScheduleForm />
          </div>
        </div>
      </div>
    </DatePickerProvider>
  )
}

