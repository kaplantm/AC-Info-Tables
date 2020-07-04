import { red } from "@material-ui/core/colors"
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
