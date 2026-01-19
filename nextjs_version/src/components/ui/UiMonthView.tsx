import { getDaysInMonth, isLessThanToday, isToday, mapAvailabilityToMonth } from "@/lib/calendar"
import { Availability } from "@/types/teacher.types"

export default function UiMonthView({ currentDate, availability }: { currentDate: Date, availability: Availability[] }) {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
  
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = new Date(year, month, 1).getDay();
    const monthAvailability = mapAvailabilityToMonth(currentDate, availability)
    return (
      <div className="mt-2 grid grid-cols-7 gap-2">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
  
        {monthAvailability.map(({ date, slots }) => {
          return (
            <div key={date.toDateString()} className={`${isLessThanToday(date) ? 'bg-gray-100' : ''} border border-gray-200 rounded-lg p-2`}>
              <div className="mb-2 text-sm font-semibold text-center flex flex-row items-center justify-center gap-2">
                {date.getDate()} {isToday(date) ? <span className="text-primary">Today</span> : ''}
              </div>
              {
                isLessThanToday(date) ?
                (
                  <div className="flex flex-col items-center justify-center gap-2 bg-gray-100 rounded-lg p-2">
                    <em className={`fa-light fa-calendar-xmark text-gray-500 text-lg ${isToday(date) ? 'text-primary' : ''}`}></em>
                    <span className={`text-gray-500 text-sm font-medium ${isToday(date) ? 'text-primary' : ''}`}>Not available</span>
                  </div>
                ) : slots.length===0 ?
                (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <em className={`fa-light fa-calendar-xmark text-gray-500 text-lg ${isToday(date) ? 'text-primary' : ''}`}></em>
                    <span className={`text-gray-500 text-sm font-medium ${isToday(date) ? 'text-primary' : ''}`}>Not available</span>
                  </div>
                ) :
                (<>
                  {slots.map((slot) => (
                    <div key={slot.id} className="mb-1 rounded bg-primary/10 text-primary px-2 py-1 text-xs cursor-pointer hover:bg-primary/20 hover:scale-105 transition-all">
                      {slot.startTime.slice(0, 5)} –{' '}
                      {slot.endTime.slice(0, 5)}
                    </div>
                  ))}
                  </>
                )
              }
              
            </div>
          )
        })}
      </div>
    )
  }
  