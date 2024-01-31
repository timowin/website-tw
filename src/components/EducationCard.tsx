import { Component } from "react";
import { ExperienceTypeEnum, MonthEnum } from "../Enums";
import ImageWithLocation from "./ImageWithLocation";
import {
  BriefcaseIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import DatePeriod from "./DatePeriod";

// Defines all properties
type Props = {
  image_name: string;
  experience_type: ExperienceTypeEnum | undefined;
  start_month?: MonthEnum | undefined;
  start_year?: number | undefined;
  end_month?: MonthEnum | undefined;
  end_year?: number | undefined;
  date?: string | undefined;
  title: string;
  type: string;
  location: string;
  description: string | undefined;
  tasks: string[][] | undefined;
};

export default class EducationCard extends Component<Props> {
  renderExperienceTypeIcon() {
    if (this.props.experience_type === ExperienceTypeEnum.WORK) {
      return <BriefcaseIcon className="h-6" />;
    }
    if (this.props.experience_type === ExperienceTypeEnum.EDUCATION) {
      return <AcademicCapIcon className="h-6" />;
    }
    if (this.props.experience_type === ExperienceTypeEnum.CERTIFICATE) {
      return <CheckBadgeIcon className="h-6" />;
    }
  }

  renderTasks() {
    // If no tasks are defined, return nothing
    if (!this.props.tasks) {
      return undefined;
    }
    // else if tasks are defined, return an unordered list with all tasks
    return (
      <div>
        {"Tasks and responsibilites:"}
        <ul className="pl-6 list-disc ">
          {this.props.tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="w-full shadow-lg group bg-white rounded-lg p-4 flex flex-row gap-8 hover:scale-105 duration-300">
        <div className="basis-1/4 m-auto">
          <ImageWithLocation
            image_name={this.props.image_name}
            location={this.props.location}
          />
        </div>
        <div className="flex flex-col gap-4 content-between basis-3/4">
          <div className="basis-2/3">
            <div className="flex flex-col basis-2/3">
              <span className="font-black uppercase text-xl text-secondary duration-300">
                {this.props.title}
              </span>
              <DatePeriod
                start_month={this.props.start_month}
                start_year={this.props.start_year}
                end_month={this.props.end_month}
                end_year={this.props.end_year}
                date={this.props.date}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {this.props.description}
            {this.renderTasks()}
          </div>
          <div className="flex items-end">
            <div className="relative flex flex-row gap-2 select-none items-center whitespace-nowrap rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue800 group-hover:to-blue-900 bg-blue-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
              <span className="">{this.props.type}</span>
              <div>{this.renderExperienceTypeIcon()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
