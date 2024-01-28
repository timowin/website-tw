import {
  MapPinIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { Component } from "react";
import { ExperienceType, Month } from "../Enums";
import ImageWithLocation from "./ImageWithLocation";

// Defines all properties
type Props = {
  image: string;
  experience_type: ExperienceType;
  start_month: Month | null;
  start_year: number | null;
  end_month?: Month | null;
  end_year?: number | null;
  date?: string | null;
  title: string;
  type: string;
  location: string;
};

export default class ExperienceCard extends Component<Props> {
  renderDate() {
    if (this.props.date) {
      return this.props.date;
    }
    if (
      this.props.start_month &&
      this.props.start_year &&
      this.props.end_month &&
      this.props.end_year
    ) {
      return (
        this.props.start_month +
        " " +
        this.props.start_year +
        " - " +
        this.props.end_month +
        " " +
        this.props.end_year
      );
    }
    if (this.props.start_month && this.props.start_year)
      return this.props.start_month + " " + this.props.start_year + " - Today";
  }

  renderExperienceTypeIcon() {
    if (this.props.experience_type === ExperienceType.WORK) {
      return <BriefcaseIcon className="h-6" />;
    }
    if (this.props.experience_type === ExperienceType.EDUCATION) {
      return <AcademicCapIcon className="h-6" />;
    }
    if (this.props.experience_type === ExperienceType.CERTIFICATE) {
      return <CheckBadgeIcon className="h-6" />;
    }
  }

  render() {
    return (
      <div className="w-full group bg-white rounded-lg p-4 flex flex-row gap-8 hover:scale-105 duration-300">
        <div className="flex flex-col gap-4 content-between basis-3/4">
          <div className="basis-2/3">
            <div className="flex flex-col basis-2/3">
              <span className="font-black uppercase text-xl text-secondary duration-300">
                {this.props.title}
              </span>

              <span className="text-gray-600 text-sm group-hover:text-secondary">
                {this.renderDate()}
              </span>
            </div>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eaque doloribus, consectetur quas error voluptates officia id quis
            nemo officiis nisi molestias eos dicta consequatur quibusdam sunt
            voluptatum illum eveniet!
          </div>

          <div className="flex items-end">
            <div className="relative flex flex-row gap-2 select-none items-center whitespace-nowrap rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue800 group-hover:to-blue-900 bg-blue-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
              <span className="">{this.props.type}</span>
              <div>{this.renderExperienceTypeIcon()}</div>
            </div>
          </div>
        </div>

        <div className="basis-1/4 m-auto">
          <ImageWithLocation
            image={this.props.image}
            location={this.props.location}
          />
        </div>
      </div>
    );
  }
}
