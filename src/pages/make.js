import React from "react";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    btn:{
        fontSize: 60,
        backgroundColor: 'violet'
    }
})

export default function Make() {
const classes = useStyles()

  return (
    <Container>
      <Typography variant="h1" color="primary" align="center">
        Make Style Theme
      </Typography>
      <Button
        className={classes.btn}
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Sumbmit
      </Button>
    </Container>
  );
}
