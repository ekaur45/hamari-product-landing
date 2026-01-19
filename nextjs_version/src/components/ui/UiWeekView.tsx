"use client"
import { addDays, isLessThanToday, isToday, mapAvailabilityToWeek, startOfWeek } from "@/lib/calendar"
import { Availability, AvailabilitySlot } from "@/types/teacher.types"
import { useState } from "react"

export default function UiWeekView({ currentDate, availability, selectedAvailability, onSlotClick }: { currentDate: Date, availability: Availability[], selectedAvailability?: AvailabilitySlot | null | undefined, onSlotClick?: (slotId: AvailabilitySlot) => void }) {
  const start = startOfWeek(currentDate)
  const week = mapAvailabilityToWeek(currentDate, availability)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(selectedAvailability?.availability?.id || null);
  const [selectedSlotDate, setSelectedSlotDate] = useState<Date | null>(selectedAvailability?.slot || null);

  const handleSlotClick = ( slot: Availability, date: Date) => {
    setSelectedSlot(slot.id)
    setSelectedSlotDate(date)
    onSlotClick?.({availability: slot, slot: date})
  }

  return (
    <div className="mt-2 grid grid-cols-7 gap-2">
      {week.map(({ date, slots }) => (
        <div
          key={date.toDateString()}
          className={`rounded border border-gray-200 p-2 ${isToday(date) ? 'bg-primary/10 text-primary' : isLessThanToday(date) ? 'bg-gray-100' : ''
            }`}
        >
          <div className={`mb-2 text-sm font-semibold text-center flex flex-row items-center justify-center gap-2 ${isLessThanToday(date) ? 'text-gray-500' : ''}`}>
            {date.getDate()} {isToday(date) ? <span className="text-primary">Today</span> : ''}
          </div>
          {
            isLessThanToday(date) ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <em className={`fa-light fa-calendar-xmark text-gray-500 text-lg ${isToday(date) ? 'text-primary' : ''}`}></em>
                <span className={`text-gray-500 text-sm font-medium ${isToday(date) ? 'text-primary' : ''}`}>Not available</span>
              </div>
            ) : (
              <>
                {slots.length === 0 && (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <em className={`fa-light fa-calendar-xmark text-gray-500 text-lg ${isToday(date) ? 'text-primary' : ''}`}></em>
                    <span className={`text-gray-500 text-sm font-medium ${isToday(date) ? 'text-primary' : ''}`}>Not available</span>
                  </div>
                )}
                {slots.map((slot) => (
                  <div
                    key={slot.id}
                    onClick={() => handleSlotClick(slot, date)}
                    className={`mb-1 rounded border border-gray-200 px-2 py-1 text-xs cursor-pointer hover:scale-105 transition-all ${selectedSlot === slot?.id && selectedSlotDate?.toDateString() === date.toDateString() ? 'bg-primary text-white hover:bg-primary/80' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                  >
                    {slot.startTime.slice(0, 5)} –{' '}
                    {slot.endTime.slice(0, 5)}
                  </div>
                ))}
              </>
            )
          }
        </div>
      ))}
    </div>
  )
}
