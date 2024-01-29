import { MapPinIcon } from "@heroicons/react/24/outline";
import React, { Component } from "react";
import imageObjects from "../images/imageLoader";

type Props = {
  image_name: string;
  location: string;
};

export default class ImageWithLocation extends Component<Props> {
  render() {
    const imageObjectName = this.props.image_name as keyof typeof imageObjects;
    return (
      <div className="flex flex-col gap-8 justify-end">
        <img
          src={imageObjects[imageObjectName]}
          alt="logo"
          className="max-h-32 object-contain mx-auto"
        />
        <span className="content-center mx-auto italic text-gray-600 text-sm group-hover:text-secondary flex flex-row gap-2">
          <MapPinIcon className="h-5 w-5" />
          {this.props.location}
        </span>
      </div>
    );
  }
}
