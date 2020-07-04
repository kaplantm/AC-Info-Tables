import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import SortableTable from "../components/sortable-table"
import FISH_DATA, { FISH_TABLE_META } from "../data/fish"
import FishTable from "../components/fish-table"

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
// TOOD: typing

// sort isn't working right?
const IndexPage = () => {
  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  return (
    <Layout>
      <SEO title="Home" />
      <FishTable />
    </Layout>
  )
}

export default IndexPage
