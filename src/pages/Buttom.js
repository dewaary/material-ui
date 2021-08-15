import { Button, ButtonGroup } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";

export default function Buttom() {
  return (
    <Container>
      <Typography variant="h1" color="primary" align="center">
        Buttom
      </Typography>
      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Sumbimt
      </Button>
      <Button type="button">Submit</Button>
      <Button type="button" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Container>
  );
}
