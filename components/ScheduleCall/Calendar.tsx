'use client'

import { useDatePicker } from '@/context/DatePickerContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Calendar() {
  const { selectedDate, setSelectedDate } = useDatePicker()
  const [currentDate, setCurrentDate] = useState(new Date())
  
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()
  
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()
  
  const lastDayOfPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate()

  const days = [
    { key: 'mon', label: 'M' },
    { key: 'tue', label: 'T' },
    { key: 'wed', label: 'W' },
    { key: 'thu', label: 'T' },
    { key: 'fri', label: 'F' },
    { key: 'sat', label: 'S' },
    { key: 'sun', label: 'S' }
  ]
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const isToday = (date: number) => {
    const today = new Date()
    return date === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
  }

  const isSelected = (date: number) => {
    return selectedDate &&
      date === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
  }

  const handleDateClick = (date: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), date))
  }

  const renderCalendarDays = () => {
    const totalDays = []
    const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

    // Previous month days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      totalDays.push(
        <button
          key={`prev-${i}`}
          className="p-2 text-gray-500 rounded-full w-10 h-10"
          onClick={() => {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
            handleDateClick(lastDayOfPrevMonth - i)
          }}
        >
          {lastDayOfPrevMonth - i}
        </button>
      )
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      totalDays.push(
        <button
          key={i}
          onClick={() => handleDateClick(i)}
          className={`p-2 rounded-full w-10 h-10 relative ${
            isSelected(i)
              ? 'bg-primaryColor text-white'
              : isToday(i)
              ? 'bg-dark text-white'
              : 'hover:bg-primaryColor hover:text-white'
          }`}
        >
          {i}
        </button>
      )
    }

    // Next month days
    const remainingDays = 42 - totalDays.length
    for (let i = 1; i <= remainingDays; i++) {
      totalDays.push(
        <button
          key={`next-${i}`}
          className="p-2 text-gray-500 hover:bg-primaryColor rounded-full w-10 h-10"
          onClick={() => {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
            handleDateClick(i)
          }}
        >
          {i}
        </button>
      )
    }

    return totalDays
  }

  return (
    <div className="p-4 dark:bg-white bg-opacity-5 bg-primaryColor rounded-lg shadow-lg text-black h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-8">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-full text-black"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-full text-black"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div key={day.key} className="p-2 text-center text-sm font-medium text-gray-600">
            {day.label}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  )
}

