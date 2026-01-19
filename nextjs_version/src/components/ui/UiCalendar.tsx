'use client'

import { useState } from 'react'
import {
  addWeeks,
  addMonths,
  startOfWeek,
  endOfWeek,
} from '@/lib/calendar'
import UiWeekView from './UiWeekView'
import { Availability, AvailabilitySlot } from '@/types/teacher.types'
import UiDatePicker from './UiDatePicker'
import UiMonthView from './UiMonthView'

type View = 'week' | 'month'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


export default function UiCalendar({ availability,className,selectedAvailability,onSlotClick }: { availability: Availability[],className?: string,selectedAvailability?: AvailabilitySlot | null | undefined,onSlotClick?: (slotId: AvailabilitySlot) => void }) {
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
    <div className={`w-full rounded-xl border border-gray-200 bg-white p-4 shadow ${className}`}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-4">          
          <h2 className="text-lg font-semibold">
            <span>
            {startOfWeek(currentDate).toLocaleString('default', {
              day: 'numeric'
            })} </span> 
            <span className="text-gray-400 ms-1 font-medium">to</span> 
            <span className='ms-1'>
            {endOfWeek(currentDate).toLocaleString('default', {
              day: 'numeric'
            })}</span> 
            <span className="text-gray-400 ms-2 font-medium">{startOfWeek(currentDate).toLocaleString('default', {
              month: 'long'
            })} {startOfWeek(currentDate).toLocaleString('default', {
              year: 'numeric'
            })}</span>
          </h2>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button onClick={handlePrev} className="btn cursor-pointer w-8 h-8 flex items-center justify-center 
          hover:bg-primary/10 hover:text-primary hover:border-primary hover:shadow-md transition-all rounded-full">
            <i className="fa-light fa-chevron-left"></i>
          </button>
          <UiDatePicker
              value={currentDate}
              onChange={(event) => {setCurrentDate(new Date(event.target.value || new Date()))}}
            />
          <button onClick={handleNext} className="btn cursor-pointer w-8 h-8 flex items-center justify-center
          hover:bg-primary/10 hover:text-primary hover:border-primary hover:shadow-md transition-all rounded-full">
            <i className="fa-light fa-chevron-right"></i>
          </button>
        </div>

 

        <div className="flex gap-2 bg-white rounded-xl border border-gray-200 p-1">
          <button
            onClick={() => setView('week')}
            className={`${view === 'week' ? 'bg-primary text-white' : 'bg-white text-gray-500'} px-4 py-1 rounded-lg cursor-pointer`}
            
          >
            Week
          </button>
          <button
            onClick={() => alert('Coming soon')}
            className={`${view === 'month' ? 'bg-primary text-white' : 'bg-white text-gray-500'} px-4 py-1 rounded-lg cursor-pointer`}
          >
            Month
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500">
        {WEEKDAYS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Body */}
      {view === 'week' && (
        <UiWeekView
          currentDate={currentDate}
          availability={availability}
          selectedAvailability={selectedAvailability}
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

