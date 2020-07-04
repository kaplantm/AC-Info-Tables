import React, { useEffect, memo } from "react"
import { makeStyles } from "@material-ui/core/styles"
import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import TextField from "@material-ui/core/TextField"
import SortableTable from "../components/sortable-table"
import FISH_DATA, { FISH_TABLE_META } from "../data/fish"
import Box from "@material-ui/core/Box"
import useDebounce from "../hooks/useDebounce"

function getAvailableThisMonth(data) {
  const date = new Date()
  const month = date.toLocaleString("default", { month: "long" })
  console.log(month)

  return data.filter(row => row.months.indexOf(month) !== -1)
}

function getAvailableNow(data) {
  const date = new Date()
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
// function getSouthernHemisphereData(data) {
//   return data
// }

function getFilteredByName(data, search) {
  return data.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase())
  )
}
function applyFilters(data, { month, now, south, search }) {
  console.log("applyFilters")
  let filteredData = [...data]
  if (month) {
    console.log("month")
    filteredData = getAvailableThisMonth(filteredData)
  }
  if (now) {
    console.log("now")
    filteredData = getAvailableNow(filteredData)
  }
  if (search) {
    console.log("search")
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
    justifyContent: "space-between",
    marginLeft: "1em",
  },
}))

// TODO: add available this month filter
// todo: availabel now
// todo: shift for southern hemisphere?
// TODO: search
// github issue link to file bug

// sort isn't working right?
const FishTable = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    month: false,
    now: false,
    south: false,
    search: "",
  })
  const [tableData, setTableData] = React.useState(FISH_DATA)
  const debouncedSearchTerm = useDebounce(state.search, 100)

  useEffect(() => {
    setTableData(applyFilters(FISH_DATA, state))
  }, [state.month, state.now, state.south])

  useEffect(() => {
    setTableData(applyFilters(FISH_DATA, state))
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

  console.log(tableData.length)
  return (
    <>
      <FormControl component="fieldset" fullWidth>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <FormLabel component="legend">Filter:</FormLabel>
          <FormGroup row className={classes.filterFormGroup}>
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              value={state.search}
              onChange={handleSearchChange}
            />
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
                  disabled={!state.month}
                />
              }
              label="I'm in the Southern Hemisphere"
            />
          </FormGroup>
        </Box>
      </FormControl>
      <SortableTable dataArray={tableData} headCells={FISH_TABLE_META} />
    </>
  )
}
//  TODO: hemisphere toggle and search
export default FishTable
