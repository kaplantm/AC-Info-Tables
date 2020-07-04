import React, { useEffect, useMemo } from "react"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import TextField from "@material-ui/core/TextField"
import SortableTable from "../components/sortable-table"
import Box from "@material-ui/core/Box"
import useDebounce from "../hooks/useDebounce"
import Typography from "@material-ui/core/Typography"

function computeDataGetters(initialTableData, tableMeta, getterOptions) {
  return initialTableData.map(row =>
    tableMeta.reduce((accumulator, currentTableMeta) => {
      accumulator[currentTableMeta.id] = row[currentTableMeta.id]
      accumulator[
        `${currentTableMeta.id}_computed`
      ] = currentTableMeta.displayGetter
        ? currentTableMeta.displayGetter(
            row[currentTableMeta.id],
            getterOptions
          )
        : row[currentTableMeta.id]
      return accumulator
    }, {})
  )
}

function getAvailableThisMonth(data, date) {
  const month = date.toLocaleString("default", { month: "long" })
  return data.filter(row => row.months.indexOf(month) !== -1)
}

function getAvailableNow(data, date) {
  const hourAmPmNoSpaces = date
    .toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    })
    .replace(/\s/g, "")

  return data.filter(row => {
    let hasHour = row.hours.some(hoursArray => {
      return (
        hoursArray.indexOf(hourAmPmNoSpaces) !== -1 &&
        // Assuming ending of timeframe is non inclusive
        hoursArray.indexOf(hourAmPmNoSpaces) !== hoursArray.length - 1
      )
    })
    return hasHour
  })
}

function getFilteredByName(data, search) {
  return data.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase())
  )
}
function applyFilters(data, { month, now, south, search }) {
  const date = new Date()
  if (south) {
    date.setMonth(date.getMonth() + 6)
  }

  let filteredData = [...data]
  if (month) {
    filteredData = getAvailableThisMonth(filteredData, date)
  }
  if (now) {
    filteredData = getAvailableNow(filteredData, date)
  }
  if (search) {
    filteredData = getFilteredByName(filteredData, search)
  }
  return filteredData
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  filterFormGroup: {
    display: "flex",
    flex: 1,
  },
  search: {
    marginBottom: theme.spacing(3),
    maxWidth: "20em",
  },
  checkboxes: {
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      "& label": {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
  },
}))

const PricingLocationTable = ({
  initialTableData,
  tableMeta,
  tableType,
  notice,
}) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    month: false,
    now: false,
    south: false,
    search: "",
  })
  // Will only recompute display getters when hemiphere is changed
  const computedData = useMemo(
    () =>
      computeDataGetters(initialTableData, tableMeta, {
        south: state.south,
      }),
    [state.south]
  )
  const [tableData, setTableData] = React.useState(computedData)
  const debouncedSearchTerm = useDebounce(state.search, 200)

  useEffect(() => {
    setTableData(applyFilters(computedData, state))
  }, [state.month, state.now, computedData])

  useEffect(() => {
    setTableData(applyFilters(computedData, state))
  }, [debouncedSearchTerm])

  function toggleMonth() {
    setState({
      ...state,
      month: !state.month,
      now: !state.month ? state.now : false,
    })
  }

  function toggleNow() {
    setState({ ...state, month: true, now: !state.now })
  }

  function toggleSouth() {
    setState({ ...state, south: !state.south })
  }

  function handleSearchChange(event) {
    setState({ ...state, search: event.target.value })
  }

  return (
    <>
      <FormControl component="fieldset" fullWidth>
        <Box mb={2}>
          <FormGroup row className={classes.filterFormGroup}>
            <Box display="flex" flex={1} flexDirection="column" mb={2}>
              <TextField
                id="standard-search"
                label="Search By Name"
                type="search"
                value={state.search}
                onChange={handleSearchChange}
                className={classes.search}
              />

              <Box
                display="flex"
                flex={1}
                mb={2}
                className={classes.checkboxes}
              >
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.month}
                        onChange={toggleMonth}
                        name="month"
                      />
                    }
                    label="Available This Month"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.now}
                        onChange={toggleNow}
                        name="now"
                      />
                    }
                    label="Available Now"
                  />
                </div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.south}
                      onChange={toggleSouth}
                      name="now"
                    />
                  }
                  label="Southern Hemisphere"
                />
              </Box>
            </Box>
          </FormGroup>

          <Typography variant="body2" className="italic">
            {notice}
          </Typography>
        </Box>
      </FormControl>
      <SortableTable
        title={`${tableType} Pricing And Locations`}
        dataArray={tableData}
        headCells={tableMeta}
      />
    </>
  )
}

export default PricingLocationTable
