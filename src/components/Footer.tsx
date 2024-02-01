import { Typography } from "@material-tailwind/react";
import React, { Component } from "react";
import iconObjects from "../images/iconLoader";

type Props = {};

export default class Footer extends Component<Props> {
  render() {
    return (
      <div className="bg-primary py-12">
        <div className="mx-auto text-white max-w-screen-lg flex flex-row justify-between">
          <div>
            <Typography className="uppercase font-bold" placeholder={undefined}>
              Connect with me
            </Typography>
            <div className="flex flex-row gap-2">
              <div>Icon</div>
              <Typography placeholder={undefined}>GitHub</Typography>
            </div>
            <div className="flex flex-row gap-2">
              <div>Icon</div>
              <Typography placeholder={undefined}>LinkedIn</Typography>
            </div>
            <div className="flex flex-row gap-2">
              <div>Icon</div>
              <Typography placeholder={undefined}>Xing</Typography>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Typography className="uppercase font-bold" placeholder={undefined}>
              Information and Legals
            </Typography>
            <Typography className="uppercase text-sm" placeholder={undefined}>
              Terms of service
            </Typography>
            <Typography className="uppercase text-sm" placeholder={undefined}>
              Privacy policy
            </Typography>
          </div>
          <div>
            <Typography className="uppercase font-bold" placeholder={undefined}>
              Navigation
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
