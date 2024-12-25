'use client'

import { useDatePicker } from "@/context/DatePickerContext"
import { useState } from "react"

export default function ScheduleForm() {
  const { selectedDate } = useDatePicker()
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [subject, setSubject] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { email, fullName, subject, selectedDate })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-blackshadow-lg rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-white text-black focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-white text-black focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <textarea
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-white text-black focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Selected Date
          </label>
          <p className="text-sm text-gray-500">
            {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
          </p>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white font-medium rounded-md shadow-sm bg-primaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Schedule Call
        </button>
      </div>
    </form>
  )
}

