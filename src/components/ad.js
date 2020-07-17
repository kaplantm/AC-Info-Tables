import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    border: "2px solid lightGrey",
  },
}))

const AdComponent = ({
  client = "ca-pub-8363507937716618", // TODO: env var?
  slot = "demo",
  format = "auto",
}) => {
  const classes = useStyles()
  if (!client || !slot || !format) {
    return null
  }
  return (
    <div className={classes.container}>
      <ins
        className="adsbygoogle"
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
      ></ins>
    </div>
  )
}

export default AdComponent
