export const AM12 = "12AM"
export const AM1 = "1AM"
export const AM2 = "2AM"
export const AM3 = "3AM"
export const AM4 = "4AM"
export const AM5 = "5AM"
export const AM6 = "6AM"
export const AM7 = "7AM"
export const AM8 = "8AM"
export const AM9 = "9AM"
export const AM10 = "10AM"
export const AM11 = "11AM"
export const PM12 = "12PM"
export const PM1 = "1PM"
export const PM2 = "2PM"
export const PM3 = "3PM"
export const PM4 = "4PM"
export const PM5 = "5PM"
export const PM6 = "6PM"
export const PM7 = "7PM"
export const PM8 = "8PM"
export const PM9 = "9PM"
export const PM10 = "10PM"
export const PM11 = "11PM"

export const ALL_HOURS = [
  AM12,
  AM1,
  AM2,
  AM3,
  AM4,
  AM5,
  AM6,
  AM7,
  AM8,
  AM9,
  AM10,
  AM11,
  PM12,
  PM1,
  PM2,
  PM3,
  PM4,
  PM5,
  PM6,
  PM7,
  PM8,
  PM9,
  PM10,
  PM11,
]

export function getHoursFromTo(from, to) {
  if (from === to) {
    return []
  }
  const fromIndex = ALL_HOURS.indexOf(from)
  const toIndex = ALL_HOURS.indexOf(to) + 1

  if (fromIndex > toIndex) {
    return [...ALL_HOURS.slice(fromIndex), ...ALL_HOURS.slice(0, toIndex)]
  }

  return ALL_HOURS.slice(fromIndex, ALL_HOURS.indexOf(to) + 1)
}
