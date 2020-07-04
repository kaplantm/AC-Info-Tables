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
import BugReportTwoToneIcon from "@material-ui/icons/BugReportTwoTone"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import { Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  footer: {
    margin: theme.spacing(6, 0, 3, 0),
  },
  bug: { margin: theme.spacing(0, 0.5, 0, 2) },
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
          <Link
            href="https://github.com/kaplantm/AC-Info-Tables/issues"
            target="_blank"
          >
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="subtitle1">See an typo or bug?</Typography>
              <BugReportTwoToneIcon className={classes.bug} />
              <Typography variant="subtitle1">File an issue.</Typography>
            </Box>
          </Link>
          <div>
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
          </div>
        </footer>
      </Container>
    </>
  )
}

export default Layout
