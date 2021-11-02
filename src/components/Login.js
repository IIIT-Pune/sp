import { Typography, Button, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  loginHeading: {
    margin: "1%",
  },
  btnStyling: {
    marginTop: "1%",
    textAlign: "left",
    background: "#3e57ab",
    color: "white"
  },
});

export default function Login() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.loginHeading} variant="h3" align="center">
        Login
      </Typography>
      <Typography align="center">
        Login using institute email id only.
      </Typography>
      <Box textAlign="center">
        <Button className={classes.btnStyling} variant="contained">
          SIGN IN WITH GOOGLE
        </Button>
      </Box>
    </div>
  );
}
