/**
 * @param monthOffset
 *  0 = current month
 * -1 = previous month
 * -2 = two months ago
 *  1 = next month
 *  2 = two months ahead
 */
export function getMonthDates(monthOffset = 0): Date[] {
    const today = new Date();
  
    const targetMonth = new Date(
      today.getFullYear(),
      today.getMonth() + monthOffset,
      1
    );
  
    const year = targetMonth.getFullYear();
    const month = targetMonth.getMonth();
  
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    return Array.from({ length: daysInMonth }, (_, i) => {
      return new Date(year, month, i + 1);
    });
  }