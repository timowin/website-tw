import { Typography } from "@material-tailwind/react";
import React, { Component } from "react";

type Props = {
  title: String;
};

class SectionHeadline extends Component<Props> {
  render() {
    return (
      <Typography placeholder={undefined} className="font-bold" variant="h2">
        {this.props.title}
      </Typography>
    );
  }
}

export default SectionHeadline;
