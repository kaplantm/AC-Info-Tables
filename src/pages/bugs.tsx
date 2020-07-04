import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PricingLocationTable from "../components/pricing-location-table"
import BUG_DATA, { BUG_TABLE_META } from "../data/bugs"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PricingLocationTable
        notice="* Unlocks At refers to the number of bugs you must catch before a
    given bug will spawn."
        initialTableData={BUG_DATA}
        tableMeta={BUG_TABLE_META}
        tableType="Bug"
      />
    </Layout>
  )
}

export default IndexPage
