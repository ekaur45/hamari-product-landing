export function startOfMonth(date: Date) {
    const d = new Date(date)
    d.setDate(1)
    d.setHours(0, 0, 0, 0)
    return d
  }
export function startOfWeek(date: Date) {
    const d = new Date(date)
    const day = d.getDay()
    d.setDate(d.getDate() - day)
    d.setHours(0, 0, 0, 0)
    return d
  }
  export function endOfWeek(date: Date) {
    const d = new Date(date)
    const day = d.getDay()
    d.setDate(d.getDate() + (6 - day))
    d.setHours(23, 59, 59, 999)
    return d
  }
  
  export function addDays(date: Date, days: number) {
    const d = new Date(date)
    d.setDate(d.getDate() + days)
    return d
  }
  
  export function addWeeks(date: Date, weeks: number) {
    return addDays(date, weeks * 7)
  }
  
  export function addMonths(date: Date, months: number) {
    const d = new Date(date)
    d.setMonth(d.getMonth() + months)
    return d
  }
  
  export function isToday(date: Date) {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }
  export function isLessThanToday(date: Date) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
  
    const d = new Date(date)
    d.setHours(0, 0, 0, 0)
  
    return d < today
  }
  
  export function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate()
  }
  



  import { Availability } from '@/types/teacher.types'






/* -------------------- Availability helpers -------------------- */

const DAY_INDEX: Record<string, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
}

export function groupAvailabilityByDay(
  availability: Availability[]
) {
  const map = new Map<string, Availability>()

  availability.forEach((slot) => {
    const key = `${slot.dayOfWeek}-${slot.startTime}-${slot.endTime}`
    if (!map.has(key)) {
      map.set(key, slot)
    }
  })

  return Array.from(map.values()).reduce<
    Record<string, Availability[]>
  >((acc, slot) => {
    acc[slot.dayOfWeek] ||= []
    acc[slot.dayOfWeek].push(slot)
    return acc
  }, {})
}

export function mapAvailabilityToWeek(
  currentDate: Date,
  availability: Availability[]
) {
  const start = startOfWeek(currentDate)
  const grouped = groupAvailabilityByDay(availability)

  // Create reverse mapping: day index -> day name
  const dayIndexToName: Record<number, string> = {}
  Object.entries(DAY_INDEX).forEach(([name, index]) => {
    dayIndexToName[index] = name
  })

  // Generate all 7 days of the week in order (Sunday to Saturday)
  return Array.from({ length: 7 }).map((_, index) => {
    const date = addDays(start, index)
    const dayName = dayIndexToName[index] || ''
    
    return {
      date,
      slots: grouped[dayName] || [],
    }
  })
}

export function mapAvailabilityToMonth( 
  currentDate: Date,
  availability: Availability[]
) {
  const start = startOfMonth(currentDate)
  const grouped = groupAvailabilityByDay(availability)

  // Create reverse mapping: day index -> day name
  const dayIndexToName: Record<number, string> = {}
  Object.entries(DAY_INDEX).forEach(([name, index]) => {
    dayIndexToName[index] = name
  })

  const monthAvailability = Array.from({ length: 31 }).map((_, index) => {
    const date = addDays(start, index)
    const dayName =  dayIndexToName[date.getDay()] || '';
    return {
      date,
      slots: grouped[dayName] || []
    }
  })
  return monthAvailability;
}