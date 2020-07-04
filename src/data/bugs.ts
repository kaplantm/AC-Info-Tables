import * as LOCATIONS from "./helpers/locations"
import * as MONTHS from "./helpers/months"
import * as SIZES from "./helpers/sizes"
import * as HOURS from "./helpers/hours"

export const BUG_TABLE_META = [
  {
    id: "name",
    sortable: true,
    alignRight: false,
    disablePadding: false,
    label: "Name",
    displayGetter: undefined,
    wrap: false,
  },
  {
    id: "price",
    sortable: true,
    alignRight: true,
    disablePadding: false,
    label: "Price",
    displayGetter: undefined,
  },
  {
    id: "location",
    sortable: true,
    alignRight: false,
    disablePadding: false,
    label: "Location",
    displayGetter: undefined,
    wrap: true,
  },
  {
    id: "hours",
    sortable: false,
    alignRight: false,
    disablePadding: false,
    label: "Hours",
    displayGetter: hours => {
      return hours
        .map(hoursArray => {
          if (hoursArray.length === 1) {
            return hoursArray
          }
          return `${hoursArray[0]}-${hoursArray[hoursArray.length - 1]}`
        })
        .join(", ")
    },
    wrap: false,
  },
  {
    id: "months",
    sortable: false,
    alignRight: false,
    disablePadding: false,
    label: "Months",
    displayGetter: (months, { south }) => {
      if (months.length === MONTHS.ALL_MONTHS.length) {
        return "All"
      }
      let localizedMonths = [...months]
      if (south) {
        localizedMonths = months.map(month => {
          const index = MONTHS.ALL_MONTHS.indexOf(month)
          const newIndex = (index + 6) % MONTHS.ALL_MONTHS.length
          const newMonth = MONTHS.ALL_MONTHS[newIndex]
          console.log({ month, index, newIndex, newMonth })
          return newMonth
        })
      }
      return localizedMonths.join(", ")
    },
    wrap: true,
  },
  {
    id: "size",
    sortable: true,
    alignRight: false,
    disablePadding: false,
    label: "Size",
    displayGetter: undefined,
    wrap: true,
  },
  {
    id: "unlock",
    sortable: true,
    alignRight: true,
    disablePadding: false,
    label: "# Caught To Unlock",
    displayGetter: undefined,
    wrap: false,
  },
]

const BUG_DATA = [
  {
    name: "Bitterling",
    price: 900,
    location: LOCATIONS.RIVER,
    hours: [HOURS.ALL_HOURS],
    months: [
      MONTHS.JANUARY,
      MONTHS.FEBRUARY,
      MONTHS.MARCH,
      MONTHS.NOVEMBER,
      MONTHS.DECEMBER,
    ],
    size: SIZES.TINY,
    unlock: 0,
  },
]

export default BUG_DATA
