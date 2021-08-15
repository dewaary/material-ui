import React from "react";
import { Typography } from "@material-ui/core";

export default function Typo() {
  return (
    <div>
      <Typography variant="h1" color="primary" align="center">
        Create new note
      </Typography>
      <Typography noWrap color="secondary">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Typography>

      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create new Note
      </Typography>
    </div>
  );
}
