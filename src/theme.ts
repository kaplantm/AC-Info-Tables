import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiTableCell: {
      stickyHeader: {
        backgroundColor: "#E5E7F7",
        fontWeight: 800,
        borderBottom: "3px solid #B9C0EA",
      },
    },
    MuiLink: {
      root: {
        "&.navLink": {
          color: "#556cd6",
          "& div": {
            borderBottom: "3px solid transparent",
            transition: "border .25s ease-out",
            paddingTop: ".25rem",
            paddingBottom: ".25rem",
            marginTop: ".25rem",
            marginBottom: ".25rem",
            "&:hover": {
              textDecoration: "none",
              borderBottom: "3px solid #556cd6",
            },
          },
          "&.navLinkActive": {
            "& div": {
              borderBottom: "3px solid #B9C0EA",
            },
          },
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiTypography: {
      root: {
        "&.italic": {
          fontStyle: "italic",
        },
      },
      body2: {
        color: "grey",
      },
    },
  },
})

export default theme
