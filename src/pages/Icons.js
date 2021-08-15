import React from "react";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button } from "@material-ui/core";

export default function Icons() {
  return (
    <Container>
      <Typography variant="h1" color="primary" align="center">
        Icon
      </Typography>
      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Sumbimt
      </Button>
      <AcUnitIcon />
      <AcUnitIcon color="secondary" fontSize="large" />
      <AcUnitIcon color="secondary" fontSize="small" />
      <AcUnitIcon color="action" fontSize="large" />
      <AcUnitIcon color="error" fontSize="large" />
      <AcUnitIcon color="disabled" fontSize="large" />
      <AcUnitIcon color="secondary" fontSize="large" />
    </Container>
  );
}
