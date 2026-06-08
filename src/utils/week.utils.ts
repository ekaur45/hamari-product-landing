/**
 * Get all dates in a week.
 *
 * @param weekOffset
 *  0  = current week
 * -1  = previous week
 * -2  = two weeks ago
 *  1  = next week
 *  2  = two weeks ahead
 *
 * @param weekStartsOn
 *  0 = Sunday
 *  1 = Monday (default)
 */
export function getWeekDates(
    weekOffset = 0,
    weekStartsOn = 1
  ): Date[] {
    const today = new Date();
  
    const currentDay = today.getDay();
  
    const diff =
      currentDay >= weekStartsOn
        ? currentDay - weekStartsOn
        : 7 - (weekStartsOn - currentDay);
  
    const startOfWeek = new Date(today);
    startOfWeek.setDate(
      today.getDate() - diff + weekOffset * 7
    );
    startOfWeek.setHours(0, 0, 0, 0);
  
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
  }