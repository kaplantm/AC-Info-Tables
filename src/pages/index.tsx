import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import SortableTable from "../components/sortable-table"
import FISH_DATA, { FISH_TABLE_META } from "../data/fish"
import PricingLocationTable from "../components/pricing-location-table"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

// Clean up header and move title into app bar
// change theme color

// github issue link to file bug
// TOOD: typing

// sort isn't working right?
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PricingLocationTable
        notice="* Unlocks At refers to the number of fish you must catch before a
      given fish will spawn."
        initialTableData={FISH_DATA}
        tableMeta={FISH_TABLE_META}
        tableType="Fish"
      />
    </Layout>
  )
}

export default IndexPage
