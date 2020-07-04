import * as LOCATIONS from "./helpers/locations"
import * as MONTHS from "./helpers/months"
import * as SIZES from "./helpers/sizes"
import * as HOURS from "./helpers/hours"

export const FISH_TABLE_META = [
  {
    id: "name",
    sortable: true,
    alignRight: false,
    disablePadding: false,
    label: "Name",
    displayGetter: undefined,
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
  },
  {
    id: "months",
    sortable: false,
    alignRight: false,
    disablePadding: false,
    label: "Months",
    displayGetter: months => {
      return months.length === MONTHS.ALL_MONTHS.length
        ? "All"
        : months.join(", ")
    },
  },
  {
    id: "size",
    sortable: true,
    alignRight: false,
    disablePadding: false,
    label: "Size",
    displayGetter: undefined,
  },
  {
    id: "unlock",
    sortable: true,
    alignRight: true,
    disablePadding: false,
    label: "# Caught",
    displayGetter: undefined,
  },
]

const FISH_DATA = [
  {
    name: "Bitterling",
    price: 900,
    location: LOCATIONS.RIVER,
    hours: HOURS.ALL_HOURS,
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
  {
    name: "Pale Chub",
    price: 200,
    location: LOCATIONS.RIVER,
    hours: [
      HOURS.AM9,
      HOURS.AM10,
      HOURS.AM11,
      HOURS.AM12,
      HOURS.PM1,
      HOURS.PM2,
      HOURS.PM3,
      HOURS.PM4,
    ],
    months: MONTHS.ALL_MONTHS,
    size: SIZES.TINY,
    unlock: 0,
  },
  {
    name: "Crucian Carp",
    price: 160,
    location: LOCATIONS.RIVER,
    hours: HOURS.ALL_HOURS,
    months: MONTHS.ALL_MONTHS,
    size: SIZES.SMALL,
    unlock: 0,
  },
  {
    name: "Dace",
    price: 240,
    location: LOCATIONS.RIVER,
    hours: [
      HOURS.AM9,
      HOURS.AM10,
      HOURS.AM11,
      HOURS.AM12,
      HOURS.PM1,
      HOURS.PM2,
      HOURS.PM3,
      HOURS.PM4,
    ],
    months: MONTHS.ALL_MONTHS,
    size: SIZES.MEDIUM,
    unlock: 0,
  },
  {
    name: "Carp",
    price: 300,
    location: LOCATIONS.POND,
    hours: HOURS.ALL_HOURS,
    months: MONTHS.ALL_MONTHS,
    size: SIZES.LARGE,
    unlock: 0,
  },
  {
    name: "Koi",
    price: 4000,
    location: LOCATIONS.POND,
    hours: [
      HOURS.AM9,
      HOURS.AM10,
      HOURS.AM11,
      HOURS.AM12,
      HOURS.PM1,
      HOURS.PM2,
      HOURS.PM3,
      HOURS.PM4,
    ],
    months: MONTHS.ALL_MONTHS,
    size: SIZES.LARGE,
    unlock: 20,
  },
]

export default FISH_DATA
