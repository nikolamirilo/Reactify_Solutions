"use client";
import { DatePickerProvider } from '@/context/DatePickerContext'
import React from 'react'
import Calendar from './Calendar'
import ScheduleForm from './ScheduleForm'

const ScheduleCall = () => {
    return (
        <DatePickerProvider>
            <div className="w-full lg:w-2/3">
                <Calendar />
            </div>
            <div className="w-full lg:w-1/3">
                <ScheduleForm />
            </div>
        </DatePickerProvider>
    )
}

export default ScheduleCall