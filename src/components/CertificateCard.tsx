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
      <div className="w-1/5 flex-grow group bg-white rounded-lg p-4 hover:scale-105 duration-300">
        <div className="flex flex-col">
          <span className="font-black uppercase text-xl text-secondary duration-300">
            {this.props.title}
          </span>
          <span className="text-gray-600 text-sm group-hover:text-secondary flex flex-row gap-2">
            {this.props.date_of_completion}
            <CheckBadgeIcon className="h-5" />
          </span>
        </div>
        <div>
          <img
            src={imageObjects[imageObjectName]}
            alt="logo"
            className="object-contain mx-auto w-full px-2 py-6"
          />
        </div>
      </div>
    );
  }
}
