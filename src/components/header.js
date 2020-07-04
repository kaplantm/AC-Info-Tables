import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Typography } from "@material-ui/core"
import theme from "../theme"

const Header = ({ siteTitle }) => (
  <header>
    <Box
      bgcolor={theme.palette.primary.main}
      display="flex"
      flex={1}
      p={3}
      mb={6}
    >
      <Typography variant="h3" component="h1">
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
