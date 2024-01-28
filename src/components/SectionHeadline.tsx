import { Typography } from "@material-tailwind/react";
import React, { Component } from "react";

type Props = {
  title: string;
  textColor: string;
};

class SectionHeadline extends Component<Props> {
  render() {
    return (
      <Typography
        placeholder={undefined}
        className={`max-w-screen-lg mx-auto pt-20 pb-8 font-bold text-${this.props.textColor}`}
        variant="h2"
      >
        {this.props.title}
      </Typography>
    );
  }
}

export default SectionHeadline;
