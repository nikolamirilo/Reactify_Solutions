'use client'

import { createContext, useContext, useState } from 'react'

interface DatePickerContextType {
  selectedDate: Date | null
  setSelectedDate: (date: Date | null) => void
}

const DatePickerContext = createContext<DatePickerContextType | undefined>(undefined)

export function DatePickerProvider({ children }: { children: React.ReactNode }) {
  const todaysDate = new Date()
  const [selectedDate, setSelectedDate] = useState<Date | null>(todaysDate)

  return (
    <DatePickerContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </DatePickerContext.Provider>
  )
}

export function useDatePicker() {
  const context = useContext(DatePickerContext)
  if (context === undefined) {
    throw new Error('useDatePicker must be used within a DatePickerProvider')
  }
  return context
}

