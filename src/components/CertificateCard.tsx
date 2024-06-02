import React, { Component } from "react";
import imageObjects from "../images/imageLoader";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

type Props = {
  image_name: string;
  title: string;
  location: string;
  date_of_completion: string;
};

export default class CertificateCard extends Component<Props> {
  render() {
    const imageObjectName = this.props.image_name as keyof typeof imageObjects;
    return (
      <div className="grid grid-row content-between flex-grow group bg-white shadow-md border-primary rounded-lg p-4">
        <div>
          <img
            src={imageObjects[imageObjectName]}
            alt={this.props.title}
            className="object-contain mx-auto w-full px-2 py-6"
          />
        </div>
        <div className="flex flex-col h-1/3 ">
          <span className="text-sm mx-auto flex flex-row gap-2">
            {this.props.date_of_completion}
            <CheckBadgeIcon className="h-5" />
          </span>
        </div>
      </div>
    );
  }
}
