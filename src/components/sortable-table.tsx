import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Paper from "@material-ui/core/Paper"
import { stableSort, getComparator } from "../utils/sorting-utils"

function EnhancedTableHead(props) {
  const { headCells, order, orderBy, onRequestSort } = props

  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              disabled={!headCell.sortable}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}))

function SortableTable({
  dataArray,
  headCells,
}: {
  dataArray: any
  headCells: any
}) {
  const classes = useStyles()
  const [order, setOrder] = React.useState("asc")
  const [orderBy, setOrderBy] = React.useState("calories")

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              headCells={headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={dataArray.length}
            />
            <TableBody>
              {stableSort(dataArray, getComparator(order, orderBy)).map(
                (row, rowIndex) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.name}>
                      {headCells.map(headCell => {
                        return (
                          <TableCell
                            key={`${row.name}${headCell.id}`}
                            align={headCell.alignRight ? "right" : "left"}
                          >
                            {headCell.displayGetter
                              ? headCell.displayGetter(row[headCell.id])
                              : row[headCell.id]}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export default SortableTable
