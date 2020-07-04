import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./src/theme"
import CssBaseline from "@material-ui/core/CssBaseline"

export default ({ element }) => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
)
