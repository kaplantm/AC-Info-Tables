import * as LOCATIONS from "./helpers/locations"
import * as MONTHS from "./helpers/months"
import * as HOURS from "./helpers/hours"

// TODO: move metas into shared file
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
    label: "Active Hours",
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
    label: "Active Months",
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
          return newMonth
        })
      }
      return localizedMonths.join(", ")
    },
    wrap: true,
  },
  {
    id: "unlock",
    sortable: true,
    alignRight: true,
    disablePadding: false,
    label: "Unlocks At",
    displayGetter: undefined,
    wrap: false,
  },
]

const BUG_DATA = [
  {
    name: "Common Butterfly",
    price: 160,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM4, HOURS.PM7)],
    months: [
      MONTHS.JANUARY,
      MONTHS.FEBRUARY,
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
      MONTHS.NOVEMBER,
      MONTHS.DECEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Yellow Butterfly",
    price: 160,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM4, HOURS.PM7)],
    months: [
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
    ],
    unlock: 0,
  },
  {
    name: "Tiger Butterfly",
    price: 240,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM4, HOURS.PM7)],
    months: [
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Peacock Butterfly",
    price: 2500,
    location: LOCATIONS.FLYING_AROUND_RARE,
    hours: [HOURS.getHoursFromTo(HOURS.AM4, HOURS.PM7)],
    months: [MONTHS.MARCH, MONTHS.APRIL, MONTHS.MAY, MONTHS.JUNE],
    unlock: 20,
  },
  {
    name: "Common Bluebottle",
    price: 300,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM4, HOURS.PM7)],
    months: [
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
    ],
    unlock: 0,
  },
  {
    name: "Paper Kite Butterfly",
    price: 1000,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM4, HOURS.PM7)],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Great Purple Emperor",
    price: 3000,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM4, HOURS.PM7)],
    months: [MONTHS.MAY, MONTHS.JUNE, MONTHS.JULY, MONTHS.AUGUST],
    unlock: 50,
  },
  {
    name: "Monarch Butterfly",
    price: 140,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [MONTHS.SEPTEMBER, MONTHS.OCTOBER, MONTHS.NOVEMBER],
    unlock: 0,
  },
  {
    name: "Emperor Butterfly",
    price: 4000,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [
      MONTHS.JANUARY,
      MONTHS.FEBRUARY,
      MONTHS.MARCH,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.DECEMBER,
    ],
    unlock: 20,
  },
  {
    name: "Agrias Butterfly",
    price: 3000,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
    ],
    unlock: 20,
  },
  {
    name: "Rajah Brooke's Birdwing",
    price: 2500,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [
      MONTHS.JANUARY,
      MONTHS.FEBRUARY,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.DECEMBER,
    ],
    unlock: 20,
  },
  {
    name: "Queen Alexandra's Birdwing",
    price: 4000,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM4)],
    months: [
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
    ],
    unlock: 50,
  },
  {
    name: "Moth",
    price: 130,
    location: LOCATIONS.FLYING_AROUND_LAMPS,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM4)],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Atlas Moth",
    price: 3000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM4)],
    months: [
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
    ],
    unlock: 20,
  },
  {
    name: "Madagascan Sunset Moth",
    price: 2500,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM4)],
    months: [
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
    ],
    unlock: 20,
  },
  {
    name: "Long Locust",
    price: 200,
    location: LOCATIONS.HOPPING_ON_GROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM7)],
    months: [
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
      MONTHS.NOVEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Migratory Locust",
    price: 200,
    location: LOCATIONS.HOPPING_ON_GROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM7)],
    months: [MONTHS.AUGUST, MONTHS.SEPTEMBER, MONTHS.OCTOBER, MONTHS.NOVEMBER],
    unlock: 20,
  },
  {
    name: "Rice Grasshopper",
    price: 160,
    location: LOCATIONS.HOPPING_ON_GROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM7)],
    months: [MONTHS.AUGUST, MONTHS.SEPTEMBER, MONTHS.OCTOBER, MONTHS.NOVEMBER],
    unlock: 0,
  },
  {
    name: "Grasshopper",
    price: 160,
    location: LOCATIONS.HOPPING_ON_GROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [MONTHS.JULY, MONTHS.AUGUST, MONTHS.SEPTEMBER],
    unlock: 0,
  },
  {
    name: "Cricket",
    price: 130,
    location: LOCATIONS.HOPPING_ON_GROUND,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.SEPTEMBER, MONTHS.OCTOBER, MONTHS.NOVEMBER],
    unlock: 0,
  },
  {
    name: "Bell Cricket",
    price: 430,
    location: LOCATIONS.HOPPING_ON_GROUND,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.SEPTEMBER, MONTHS.OCTOBER],
    unlock: 0,
  },
  {
    name: "Mantis",
    price: 430,
    location: LOCATIONS.ON_FLOWERS,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
      MONTHS.NOVEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Orchid Mantis",
    price: 2400,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
      MONTHS.NOVEMBER,
    ],
    unlock: 20,
  },
  {
    name: "Honeybee",
    price: 200,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [MONTHS.MARCH, MONTHS.APRIL, MONTHS.MAY, MONTHS.JUNE, MONTHS.JULY],
    unlock: 0,
  },
  {
    name: "Wasp",
    price: 2500,
    location: LOCATIONS.ATTACKING_AFTER_SHAKING_TREE,
    hours: [HOURS.ALL_HOURS],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Brown Cicada",
    price: 250,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 0,
  },
  {
    name: "Robust Cicada",
    price: 300,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 0,
  },
  {
    name: "Giant Cicada",
    price: 500,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 20,
  },
  {
    name: "Walker Cicada",
    price: 400,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [MONTHS.AUGUST, MONTHS.SEPTEMBER],
    unlock: 0,
  },
  {
    name: "Evening Cicada",
    price: 550,
    location: LOCATIONS.ON_TREE,
    hours: [
      HOURS.getHoursFromTo(HOURS.AM4, HOURS.AM8),
      HOURS.getHoursFromTo(HOURS.PM4, HOURS.PM7),
    ],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 0,
  },
  {
    name: "Cicada Shell",
    price: 10,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 50,
  },
  {
    name: "Red Dragonfly",
    price: 100,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM7)],
    months: [MONTHS.SEPTEMBER, MONTHS.OCTOBER],
    unlock: 0,
  },
  {
    name: "Darner Dragonfly",
    price: 230,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
    ],
    unlock: 0,
  },
  {
    name: "Banded Dragonfly",
    price: 4500,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
    ],
    unlock: 50,
  },
  {
    name: "Damselfly",
    price: 500,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.JANUARY, MONTHS.FEBRUARY, MONTHS.NOVEMBER, MONTHS.DECEMBER],
    unlock: 0,
  },
  {
    name: "Firefly",
    price: 300,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM4)],
    months: [MONTHS.JUNE],
    unlock: 0,
  },
  {
    name: "Mole Cricket",
    price: 500,
    location: LOCATIONS.UNDERGROUND,
    hours: [HOURS.ALL_HOURS],
    months: [
      MONTHS.JANUARY,
      MONTHS.FEBRUARY,
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.NOVEMBER,
      MONTHS.DECEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Pondskater",
    price: 130,
    location: LOCATIONS.ON_RIVERS_PONDS,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM7)],
    months: [
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Diving Beetle",
    price: 800,
    location: LOCATIONS.ON_RIVERS_PONDS,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM7)],
    months: [
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Giant Water Bug",
    price: 2000,
    location: LOCATIONS.ON_RIVERS_PONDS,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM8)],
    months: [
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
    ],
    unlock: 50,
  },
  {
    name: "Stinkbug",
    price: 120,
    location: LOCATIONS.AROUND_BUNCHES_OF_FLOWERS,
    hours: [HOURS.ALL_HOURS],
    months: [
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
    ],
    unlock: 0,
  },
  {
    name: "Man-faced Stink Bug",
    price: 1000,
    location: LOCATIONS.AROUND_BUNCHES_OF_FLOWERS,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM8)],
    months: [
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
    ],
    unlock: 20,
  },
  {
    name: "Ladybug",
    price: 200,
    location: LOCATIONS.AROUND_BUNCHES_OF_FLOWERS,
    hours: [HOURS.getHoursFromTo(HOURS.AM8, HOURS.PM5)],
    months: [
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.OCTOBER,
    ],
    unlock: 0,
  },
  {
    name: "Tiger Beetle",
    price: 1500,
    location: LOCATIONS.CRAWLING_ON_GROUND,
    hours: [HOURS.ALL_HOURS],
    months: [
      MONTHS.FEBRUARY,
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
    ],
    unlock: 20,
  },
  {
    name: "Jewel Bettle",
    price: 2400,
    location: LOCATIONS.TREE_STUMP,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.APRIL, MONTHS.MAY, MONTHS.JUNE, MONTHS.JULY, MONTHS.AUGUST],
    unlock: 20,
  },
  {
    name: "Violin Beetle",
    price: 450,
    location: LOCATIONS.TREE_STUMP,
    hours: [HOURS.ALL_HOURS],
    months: [
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
      MONTHS.NOVEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Citrus Long-horned Beetle",
    price: 350,
    location: LOCATIONS.TREE_STUMP,
    hours: [HOURS.ALL_HOURS],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Rosalia Batesi Beetle",
    price: 3000,
    location: LOCATIONS.TREE_STUMP,
    hours: [HOURS.ALL_HOURS],
    months: [
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JUNE,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
    ],
    unlock: 20,
  },
  {
    name: "Blue Weevil Beetle",
    price: 800,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 0,
  },
  {
    name: "Earth-boring Dung Beetle",
    price: 300,
    location: LOCATIONS.CRAWLING_ON_GROUND,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.JULY, MONTHS.AUGUST, MONTHS.SEPTEMBER],
    unlock: 0,
  },
  {
    name: "Dung Beetle",
    price: 300,
    location: LOCATIONS.CRAWLING_ON_GROUND,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.JANUARY, MONTHS.FEBRUARY, MONTHS.DECEMBER],
    unlock: 0,
  },
  {
    name: "Scarab Beetle",
    price: 10000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM11, HOURS.AM8)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 50,
  },
  {
    name: "Drone Beetle",
    price: 200,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.JUNE, MONTHS.JULY, MONTHS.AUGUST],
    unlock: 0,
  },
  {
    name: "Goliath Beetle",
    price: 8000,
    location: LOCATIONS.ON_PALM_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.JUNE, MONTHS.JULY, MONTHS.AUGUST, MONTHS.SEPTEMBER],
    unlock: 100,
  },
  {
    name: "Saw Stag",
    price: 2000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 0,
  },
  {
    name: "Miyama Stag",
    price: 1000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 0,
  },
  {
    name: "Giant Stag",
    price: 10000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM11, HOURS.AM8)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 50,
  },
  {
    name: "Rainbow Stag",
    price: 6000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM8)],
    months: [MONTHS.JUNE, MONTHS.JULY, MONTHS.AUGUST, MONTHS.SEPTEMBER],
    unlock: 50,
  },
  {
    name: "Cyclommatus Stag",
    price: 800,
    location: LOCATIONS.ON_PALM_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 100,
  },
  {
    name: "Golden Stag",
    price: 12000,
    location: LOCATIONS.ON_PALM_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 100,
  },
  {
    name: "Giraffe Stag",
    price: 12000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 100,
  },
  {
    name: "Horned Dynastid",
    price: 1350,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 0,
  },
  {
    name: "Horned Atlas",
    price: 8000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 100,
  },
  {
    name: "Horned Elephant",
    price: 8000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 100,
  },
  {
    name: "Horned Hercules",
    price: 12000,
    location: LOCATIONS.ON_TREE,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM8)],
    months: [MONTHS.JULY, MONTHS.AUGUST],
    unlock: 100,
  },
  {
    name: "Walking Stick",
    price: 600,
    location: LOCATIONS.SHAKEN_TREE,
    hours: [
      HOURS.getHoursFromTo(HOURS.AM4, HOURS.AM8),
      HOURS.getHoursFromTo(HOURS.PM5, HOURS.PM7),
    ],
    months: [
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
      MONTHS.NOVEMBER,
    ],
    unlock: 20,
  },
  {
    name: "Walking Leaf",
    price: 600,
    location: LOCATIONS.BENEATH_TREE,
    hours: [HOURS.ALL_HOURS],
    months: [MONTHS.JULY, MONTHS.AUGUST, MONTHS.SEPTEMBER],
    unlock: 20,
  },
  {
    name: "Bagworm",
    price: 600,
    location: LOCATIONS.SHAKEN_TREE,
    hours: [HOURS.ALL_HOURS],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Ant",
    price: 80,
    location: LOCATIONS.ROTTEN_FOOD,
    hours: [HOURS.ALL_HOURS],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Hermit Crab",
    price: 1000,
    location: LOCATIONS.ON_BEACH,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM8)],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Wharf Roach",
    price: 200,
    location: LOCATIONS.ON_BEACH_ROCKS,
    hours: [HOURS.ALL_HOURS],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Fly",
    price: 60,
    location: LOCATIONS.TRASH,
    hours: [HOURS.ALL_HOURS],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Mosquito",
    price: 130,
    location: LOCATIONS.FLYING_AROUND,
    hours: [HOURS.getHoursFromTo(HOURS.PM5, HOURS.AM4)],
    months: [MONTHS.JUNE, MONTHS.JULY, MONTHS.AUGUST, MONTHS.SEPTEMBER],
    unlock: 0,
  },
  {
    name: "Flea",
    price: 70,
    location: LOCATIONS.BOUNCING_ON_HEADERS,
    hours: [HOURS.ALL_HOURS],
    months: [
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
      MONTHS.NOVEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Snail",
    price: 250,
    location: LOCATIONS.ON_ROCKS_RAINING,
    hours: [HOURS.ALL_HOURS],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Pill Bug",
    price: 250,
    location: LOCATIONS.UNDER_ROCKS,
    hours: [HOURS.getHoursFromTo(HOURS.PM11, HOURS.PM4)],
    months: [
      MONTHS.JANUARY,
      MONTHS.FEBRUARY,
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
      MONTHS.NOVEMBER,
      MONTHS.DECEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Centipede",
    price: 300,
    location: LOCATIONS.UNDER_ROCKS,
    hours: [HOURS.getHoursFromTo(HOURS.PM4, HOURS.PM11)],
    months: [
      MONTHS.JANUARY,
      MONTHS.FEBRUARY,
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
      MONTHS.NOVEMBER,
      MONTHS.DECEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Spider",
    price: 480,
    location: LOCATIONS.SHAKEN_TREE_NIGHT,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM8)],
    months: MONTHS.ALL_MONTHS,
    unlock: 0,
  },
  {
    name: "Tarantula",
    price: 8000,
    location: LOCATIONS.CRAWLING_ON_GROUND_NIGHT_ATTACKS,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM4)],
    months: [
      MONTHS.JANUARY,
      MONTHS.FEBRUARY,
      MONTHS.MARCH,
      MONTHS.APRIL,
      MONTHS.NOVEMBER,
      MONTHS.DECEMBER,
    ],
    unlock: 0,
  },
  {
    name: "Scorpion",
    price: 8000,
    location: LOCATIONS.CRAWLING_ON_GROUND_NIGHT_ATTACKS,
    hours: [HOURS.getHoursFromTo(HOURS.PM7, HOURS.AM4)],
    months: [
      MONTHS.MAY,
      MONTHS.JUNE,
      MONTHS.JULY,
      MONTHS.AUGUST,
      MONTHS.SEPTEMBER,
      MONTHS.OCTOBER,
    ],
    unlock: 0,
  },
]

export default BUG_DATA
