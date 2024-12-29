"use client";
import { DatePickerProvider } from '@/context/DatePickerContext'
import React, { useState } from 'react'
import Calendar from './Calendar'
import ScheduleForm from './ScheduleForm'
import InfoModal from '../Modal/InfoModal';

const ScheduleCall = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex flex-col lg:flex-row gap-8 container">
            <DatePickerProvider>
                {isOpen ? <InfoModal isOpen={isOpen} setIsOpen={setIsOpen} message="Thank you for scheduling a call with us! We have received your request and will reach out via email shortly to confirm the details."/> : null}
                <div className="w-full lg:w-2/3">
                    <Calendar />
                </div>
                <div className="w-full lg:w-1/3">
                    <ScheduleForm setIsOpen={setIsOpen}/>
                </div>
            </DatePickerProvider>
        </div>
    )
}

export default ScheduleCall