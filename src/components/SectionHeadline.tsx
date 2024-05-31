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
        className={`px-4 lg:px-0 max-w-screen-lg mx-auto pb-6 font-bold text-${this.props.textColor}`}
        variant="h2"
      >
        {this.props.title}
      </Typography>
    );
  }
}

export default SectionHeadline;
