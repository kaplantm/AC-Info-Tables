/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./header"
import "./layout.css"
import { Link, Container } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  footer: {
    margin: theme.spacing(6, 0, 3, 0),
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>

        <footer className={classes.footer}>
          © {new Date().getFullYear()},{" "}
          <Link href="https://github.com/kaplantm" target="_blank">
            kaplantm
          </Link>
          . Data sourced from{" "}
          <Link
            href="https://www.vg247.com/2020/06/25/animal-crossing-new-horizons-fish-prices-locations/"
            target="_blank"
          >
            VG247
          </Link>
          .
        </footer>
      </Container>
    </>
  )
}

export default Layout
