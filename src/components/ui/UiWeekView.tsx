"use client"
import { addDays, isLessThanToday, isToday, mapAvailabilityToWeek, startOfWeek } from "@/lib/calendar"
import { Availability, AvailabilitySlot, BookingStatus, TeacherBooking } from "@/types/teacher.types"
import { useState } from "react"

export default function UiWeekView(
  { currentDate, availability, selectedAvailability,teacherBookings, onSlotClick }: 
  { currentDate: Date, availability: Availability[], selectedAvailability?: AvailabilitySlot | null | undefined, teacherBookings: TeacherBooking[], onSlotClick?: (slotId: AvailabilitySlot) => void }
) {
  const start = startOfWeek(currentDate)
  const week = mapAvailabilityToWeek(currentDate, availability)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(selectedAvailability?.availability?.id || null);
  const [selectedSlotDate, setSelectedSlotDate] = useState<Date | null>(selectedAvailability?.slot || null);

  const handleSlotClick = ( slot: Availability, date: Date) => {
    setSelectedSlot(slot.id)
    setSelectedSlotDate(date)
    onSlotClick?.({availability: slot, slot: date})
  }
  const isBooked = (date: Date, slots: Availability) => {
    const booking = teacherBookings.find(booking => new Date(booking.bookingDate)?.toDateString() === date.toDateString() && booking.status === BookingStatus.COMPLETED
      && booking.availability?.startTime === slots.startTime && booking.availability?.endTime === slots.endTime
    )
    return booking ? true : false
  }

  return (
    <div className="mt-1 sm:mt-2 grid grid-cols-7 gap-1 sm:gap-2">
      {week.map(({ date, slots }) => (
        <div
          key={date.toDateString()}
          className={`rounded border border-gray-200 p-1 sm:p-2 min-h-[60px] sm:min-h-[80px] ${isToday(date) ? 'bg-primary/10 text-primary border-primary/30' : isLessThanToday(date) ? 'bg-gray-100' : ''
            }`}
        >
          <div className={`mb-1 sm:mb-2 text-xs sm:text-sm font-semibold text-center flex flex-row items-center justify-center gap-1 sm:gap-2 ${isLessThanToday(date) ? 'text-gray-500' : ''}`}>
            <span>{date.getDate()}</span>
            {isToday(date) && (
              <span className="text-[10px] sm:text-xs text-primary font-medium">Today</span>
            )}
          </div>
          {
            isLessThanToday(date) ? (
              <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 py-1">
                <em className={`fa-light fa-calendar-xmark text-gray-400 sm:text-gray-500 text-sm sm:text-lg ${isToday(date) ? 'text-primary' : ''}`}></em>
                <span className={`text-gray-400 sm:text-gray-500 text-[10px] sm:text-xs font-medium text-center leading-tight ${isToday(date) ? 'text-primary' : ''}`}>
                  Not available
                </span>
              </div>
            ) : (
              <>
                
                {slots.length === 0 && (
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 py-1">
                    <em className={`fa-light fa-calendar-xmark text-gray-400 sm:text-gray-500 text-sm sm:text-lg ${isToday(date) ? 'text-primary' : ''}`}></em>
                    <span className={`text-gray-400 sm:text-gray-500 text-[10px] sm:text-xs font-medium text-center leading-tight ${isToday(date) ? 'text-primary' : ''}`}>
                      Not available
                    </span>
                  </div>
                )}
                {slots.map((slot) => (
                  <>
                  {isBooked(date, slot) ? (
                 <></>
                ):(<div
                    key={slot.id}
                    onClick={() => handleSlotClick(slot, date)}
                    className={`mb-0.5 sm:mb-1 rounded border border-gray-200 px-1.5 sm:px-2 py-1 sm:py-1.5 text-[10px] sm:text-xs cursor-pointer hover:scale-105 active:scale-95 transition-all touch-manipulation ${selectedSlot === slot?.id && selectedSlotDate?.toDateString() === date.toDateString() ? 'bg-primary text-white hover:bg-primary/80 border-primary' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                  >
                    {slot.startTime.slice(0, 5)} –{' '}
                    {slot.endTime.slice(0, 5)}
                  </div>)}
                  </>
                ))}
              </>
            )
          }
        </div>
      ))}
    </div>
  )
}
