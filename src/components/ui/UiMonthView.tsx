import { getDaysInMonth, isLessThanToday, isToday, mapAvailabilityToMonth } from "@/lib/calendar"
import { Availability } from "@/types/teacher.types"

export default function UiMonthView({ currentDate, availability }: { currentDate: Date, availability: Availability[] }) {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
  
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = new Date(year, month, 1).getDay();
    const monthAvailability = mapAvailabilityToMonth(currentDate, availability)
    return (
      <div className="mt-1 sm:mt-2 grid grid-cols-7 gap-1 sm:gap-2">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
  
        {monthAvailability.map(({ date, slots }) => {
          return (
            <div 
              key={date.toDateString()} 
              className={`${isLessThanToday(date) ? 'bg-gray-100' : isToday(date) ? 'bg-primary/5 border-primary/30' : ''} border border-gray-200 rounded-lg p-1 sm:p-2 min-h-[60px] sm:min-h-[80px]`}
            >
              <div className="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold text-center flex flex-row items-center justify-center gap-1 sm:gap-2">
                <span>{date.getDate()}</span>
                {isToday(date) && (
                  <span className="text-[10px] sm:text-xs text-primary font-medium">Today</span>
                )}
              </div>
              {
                isLessThanToday(date) ?
                (
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1 sm:p-2">
                    <em className={`fa-light fa-calendar-xmark text-gray-400 sm:text-gray-500 text-sm sm:text-lg ${isToday(date) ? 'text-primary' : ''}`}></em>
                    <span className={`text-gray-400 sm:text-gray-500 text-[10px] sm:text-xs font-medium text-center leading-tight ${isToday(date) ? 'text-primary' : ''}`}>
                      Not available
                    </span>
                  </div>
                ) : slots.length===0 ?
                (
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 py-1">
                    <em className={`fa-light fa-calendar-xmark text-gray-400 sm:text-gray-500 text-sm sm:text-lg ${isToday(date) ? 'text-primary' : ''}`}></em>
                    <span className={`text-gray-400 sm:text-gray-500 text-[10px] sm:text-xs font-medium text-center leading-tight ${isToday(date) ? 'text-primary' : ''}`}>
                      Not available
                    </span>
                  </div>
                ) :
                (<> 
                  {slots.map((slot) => (
                    <div 
                      key={slot.id} 
                      className="mb-0.5 sm:mb-1 rounded bg-primary/10 text-primary px-1.5 sm:px-2 py-1 sm:py-1.5 text-[10px] sm:text-xs cursor-pointer hover:bg-primary/20 active:scale-95 hover:scale-105 transition-all touch-manipulation"
                    >
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
  