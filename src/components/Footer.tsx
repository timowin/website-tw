import { Typography } from "@material-tailwind/react";
import React, { Component } from "react";
import {
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-primary py-12">
        <div className="mx-auto text-white gap-12 max-w-screen-lg flex flex-col lg:flex-row justify-between px-12">
          {/** Social Links */}
          <div className="flex flex-col gap-3">
            <Typography
              className="place-self-center uppercase font-bold"
              placeholder={undefined}
            >
              Connect with me
            </Typography>
            <div className="flex flex-row justify-center gap-6">
              <a
                className="group"
                href="https://github.com/timowin"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="group-hover:scale-150"
                  size="lg"
                  icon={faGithub}
                />
              </a>
              <a
                className="group"
                href="https://www.linkedin.com/in/timo-winkler/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="group-hover:scale-125"
                  size="lg"
                  icon={faLinkedin}
                />
              </a>
              <a
                className="group"
                href="https://www.xing.com/profile/Timo_Winkler19/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="group-hover:scale-125"
                  size="lg"
                  icon={faXing}
                />
              </a>
            </div>
            <div className="flex justify-center text-sm hover:font-bold">
              <a href="tel:+4917680855591">+49 176 808 555 91</a>
            </div>
            <div className="flex justify-center text-sm hover:font-bold">
              <a href="mailto:info@timowinkler.de">info@timowinkler.de</a>
            </div>
          </div>

          {/** Legals */}
          <div className="flex flex-col gap-3">
            <Typography
              className="place-self-center uppercase font-bold"
              placeholder={undefined}
            >
              Information and Legals
            </Typography>
            <Typography
              className="place-self-center text-sm hover:font-bold"
              placeholder={undefined}
            >
              Terms of Service
            </Typography>
            <Typography
              className="place-self-center text-sm hover:font-bold"
              placeholder={undefined}
            >
              Privacy Policy
            </Typography>
            <Typography
              className="place-self-center text-sm hover:font-bold"
              placeholder={undefined}
            >
              Legal Notice
            </Typography>
          </div>
          {/** Navigation */}
          <div className="flex flex-col gap-3">
            <Typography
              className="place-self-center uppercase font-bold"
              placeholder={undefined}
            >
              Navigation
            </Typography>
            <Typography
              className="place-self-center text-sm hover:font-bold"
              placeholder={undefined}
            >
              About me
            </Typography>
            <Typography
              className="place-self-center text-sm hover:font-bold"
              placeholder={undefined}
            >
              Services
            </Typography>
            <Typography
              className="place-self-center text-sm hover:font-bold"
              placeholder={undefined}
            >
              Projects
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
