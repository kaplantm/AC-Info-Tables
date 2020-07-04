import React, { memo } from "react"
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
import { fade } from "@material-ui/core/styles/colorManipulator"

function EnhancedTableHead(props) {
  const { headCells, order, orderBy, onRequestSort, classes } = props

  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow className={classes.tableHeader}>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            className={clsx(classes.noWrap, classes.tableCell)}
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
  tableContainer: {
    minWidth: 500,
    maxHeight: 500,
  },
  table: {
    minWidth: 500,
    "& td:first-child": {
      backgroundColor: fade(theme.palette.primary.main, 0.05),
    },
    "& tr:nth-child(even)": {
      backgroundColor: fade(theme.palette.primary.main, 0.05),
    },
  },
  noWrap: {
    whiteSpace: "nowrap",
  },
}))

// If we used a getter, show computed value, otherwise show raw value
function getTableCellContent(row, headCellId, headCellIdDisplayGetter) {
  const computedKey = `${headCellId}_computed`
  return headCellIdDisplayGetter ? row[computedKey] : row[headCellId]
}

function SortableTable({
  dataArray,
  headCells,
  title,
}: {
  dataArray: any
  headCells: any
  title: string
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
        <TableContainer className={classes.tableContainer}>
          <Table
            size="small"
            className={classes.table}
            aria-label={title}
            stickyHeader
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
                    <TableRow tabIndex={-1} key={row.name}>
                      {headCells.map(headCell => {
                        return (
                          <TableCell
                            key={`${row.name}${headCell.id}`}
                            align={headCell.alignRight ? "right" : "left"}
                            className={headCell.wrap ? "" : classes.noWrap}
                          >
                            {getTableCellContent(
                              row,
                              headCell.id,
                              headCell.displayGetter
                            )}
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

export default memo(SortableTable)
