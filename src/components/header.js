import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Typography } from "@material-ui/core"
import theme from "../theme"

const Header = ({ siteTitle }) => (
  <header>
    <Box display="flex" mb={6} mr={3} mt={2} justifyContent="flex-start">
      <Box
        bgcolor={theme.palette.primary.main}
        display="flex"
        p={3}
        pr={6}
        pl={6}
        justifyContent="center"
        borderRight={`20px solid ${theme.palette.primary.light}`}
      >
        <Typography variant="h3" component="h1" align="center">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
      </Box>
    </Box>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
