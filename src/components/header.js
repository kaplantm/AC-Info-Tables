import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { Link as MuiLink } from "@material-ui/core"
import { fade } from "@material-ui/core/styles/colorManipulator"

const useStyles = makeStyles(theme => ({
  container: {
    justifyContent: "flex-start",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  nav: {
    backgroundColor: fade(theme.palette.primary.main, 0.1),
    borderLeft: `20px solid ${fade(theme.palette.primary.main, 0.3)}`,
    borderRight: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      borderRight: `10px solid ${fade(theme.palette.primary.main, 0.3)}`,
      borderLeft: "none",
      marginTop: theme.spacing(2),
    },
  },
  navItem: {
    margin: theme.spacing(0, 3, 0, 3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75em",
    },
  },
  titleBox: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <header>
      <Box mb={6} mr={3} mt={2} className={classes.container}>
        <Box p={3} pr={6} pl={6} className={classes.titleBox}>
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
        <nav className={classes.nav}>
          <Typography variant="h4" className={classes.navItem}>
            <MuiLink component={Link} to="/">
              Fish
            </MuiLink>
          </Typography>

          <Typography variant="h4" className={classes.navItem}>
            <MuiLink component={Link} to="/bugs">
              Bugs
            </MuiLink>
          </Typography>
        </nav>
      </Box>
    </header>
  )
}

export default Header
