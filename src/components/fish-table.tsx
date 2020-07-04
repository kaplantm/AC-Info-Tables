import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FormLabel from "@material-ui/core/FormLabel"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import SortableTable from "../components/sortable-table"
import FISH_DATA, { FISH_TABLE_META } from "../data/fish"

function getAvailableThisMonth(data) {
  const date = new Date()
  const month = date.toLocaleString("default", { month: "long" })
  console.log(month)

  return data.filter(data => data.months.indexOf(month) !== -1)
}
function getAvailableNow(data) {
  return data
}
// function getSouthernHemisphereData(data) {
//   return data
// }

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
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
    search: null,
    data: FISH_DATA,
  })

  function toggleMonth() {
    if (state.month) {
      setState({
        ...state,
        month: !state.month,
        now: false,
        data: FISH_DATA,
      })
    } else {
      setState({
        ...state,
        month: !state.month,
        data: getAvailableThisMonth(FISH_DATA),
      })
    }
  }

  function toggleNow() {
    setState({ ...state, month: true, now: !state.now })
  }

  function toggleSouth() {
    setState({ ...state, south: !state.south })
  }

  return (
    <>
      <FormControl required component="fieldset">
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
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
              <Checkbox checked={state.now} onChange={toggleNow} name="now" />
            }
            label="Available Now"
          />
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
        </FormGroup>
      </FormControl>
      <SortableTable dataArray={state.data} headCells={FISH_TABLE_META} />
    </>
  )
}
//  TODO: hemisphere toggle and search
export default FishTable
