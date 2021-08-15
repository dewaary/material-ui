import React from "react";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const Style = (props) => {
  const {   } = props;
  const useStyles = makeStyles({
    btn: {
      fontSize: 60,
      backgroundColor: "violet",
      "&:hover": {
        background: "blue",
      },
    },
    title: {
      textDecoration: "underline",
      marginBottom: 20,
    },
  });
  const classes = useStyles();
    return (
      <Container size="sm">
        <Typography
          className={classes.title}
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create a New Note
        </Typography>

        <Button
          className={classes.btn}
          onClick={() => console.log("you clicked me")}
          type="submit"
          color="secondary"
          variant="contained"
        >
          Submit
        </Button>
      </Container>
    );
  }

Style.propTypes = {};
Style.defaultProps = {};
export default Style;
