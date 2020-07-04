import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import SortableTable from "../components/sortable-table"
import FISH_DATA, { FISH_TABLE_META } from "../data/fish"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch (id) {
      case "features":
        setFeatures(!features)
        break
      case "info":
        setInfo(!info)
        break
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <SortableTable dataArray={FISH_DATA} headCells={FISH_TABLE_META} />
    </Layout>
  )
}

export default IndexPage
