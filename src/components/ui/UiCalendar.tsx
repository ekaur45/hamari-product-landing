'use client'

import { useState } from 'react'
import {
  addWeeks,
  addMonths,
  startOfWeek,
  endOfWeek,
} from '@/lib/calendar'
import UiWeekView from './UiWeekView'
import { Availability, AvailabilitySlot, TeacherBooking } from '@/types/teacher.types'
import UiDatePicker from './UiDatePicker'
import UiMonthView from './UiMonthView'

type View = 'week' | 'month'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


export default function UiCalendar({ availability,className,selectedAvailability,teacherBookings,onSlotClick }: 
  { availability: Availability[],className?: string,selectedAvailability?: AvailabilitySlot | null | undefined,teacherBookings: TeacherBooking[],onSlotClick?: (slotId: AvailabilitySlot) => void }) {
  const [view, setView] = useState<View>('week')
  const [currentDate, setCurrentDate] = useState(new Date())

  const handlePrev = () => {
    setCurrentDate((prev) =>
      view === 'week' ? addWeeks(prev, -1) : addMonths(prev, -1)
    )
  }

  const handleNext = () => {
    setCurrentDate((prev) =>
      view === 'week' ? addWeeks(prev, 1) : addMonths(prev, 1)
    )
  }

  return (
    <div className={`w-full rounded-xl border border-gray-200 bg-white p-2 sm:p-4 shadow ${className}`}>
      {/* Header */}
      <div className="mb-3 sm:mb-4 space-y-3 sm:space-y-0">
        {/* Top Row: Date Range and View Toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Date Range */}
          <div className="w-full sm:w-auto">
            <h2 className="text-sm sm:text-lg font-semibold text-gray-900">
              <span className="inline-block">
                {startOfWeek(currentDate).toLocaleString('default', {
                  day: 'numeric'
                })}
              </span>
              <span className="text-gray-400 mx-1 font-medium">to</span>
              <span className="inline-block">
                {endOfWeek(currentDate).toLocaleString('default', {
                  day: 'numeric'
                })}
              </span>
              <span className="text-gray-400 mx-1 sm:mx-2 font-medium">
                {startOfWeek(currentDate).toLocaleString('default', {
                  month: 'short'
                })}
              </span>
              <span className="text-gray-400 font-medium hidden sm:inline">
                {startOfWeek(currentDate).toLocaleString('default', {
                  year: 'numeric'
                })}
              </span>
              <span className="text-gray-400 font-medium sm:hidden">
                {startOfWeek(currentDate).toLocaleString('default', {
                  year: '2-digit'
                })}
              </span>
            </h2>
          </div>

          {/* View Toggle */}
          <div className="flex gap-1.5 sm:gap-2 bg-white rounded-lg sm:rounded-xl border border-gray-200 p-0.5 sm:p-1 w-full sm:w-auto">
            <button
              onClick={() => setView('week')}
              className={`${
                view === 'week' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              } flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-1 rounded-md sm:rounded-lg cursor-pointer text-xs sm:text-sm font-medium transition-all active:scale-95`}
            >
              Week
            </button>
            <button
              onClick={() => alert('Coming soon')}
              className={`${
                view === 'month' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              } flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-1 rounded-md sm:rounded-lg cursor-pointer text-xs sm:text-sm font-medium transition-all active:scale-95`}
            >
              Month
            </button>
          </div>
        </div>

        {/* Bottom Row: Navigation Controls */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <button 
            onClick={handlePrev} 
            className="btn cursor-pointer w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center 
            bg-white border border-gray-200 hover:bg-primary/10 hover:text-primary hover:border-primary 
            hover:shadow-md transition-all rounded-full active:scale-95 touch-manipulation"
            aria-label="Previous"
          >
            <i className="fa-light fa-chevron-left text-sm sm:text-base"></i>
          </button>
          
          <div className="flex-1 sm:flex-none max-w-[180px] sm:max-w-none">
            <UiDatePicker
              value={currentDate}
              onChange={(event) => {setCurrentDate(new Date(event.target.value || new Date()))}}
            />
          </div>
          
          <button 
            onClick={handleNext} 
            className="btn cursor-pointer w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center
            bg-white border border-gray-200 hover:bg-primary/10 hover:text-primary hover:border-primary 
            hover:shadow-md transition-all rounded-full active:scale-95 touch-manipulation"
            aria-label="Next"
          >
            <i className="fa-light fa-chevron-right text-sm sm:text-base"></i>
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">
        {WEEKDAYS.map((d) => (
          <div key={d} className="py-1 sm:py-0">{d}</div>
        ))}
      </div>

      {/* Body */}
      {view === 'week' && (
        <UiWeekView
          currentDate={currentDate}
          availability={availability}
          selectedAvailability={selectedAvailability}
          teacherBookings={teacherBookings}
          onSlotClick={onSlotClick}
        />
      )}
      {view === 'month' && (
        <UiMonthView
          currentDate={currentDate}
          availability={availability}
        />
      )}
    </div>
  )
}

/* -------------------- Weekly View -------------------- */

