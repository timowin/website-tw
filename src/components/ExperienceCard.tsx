import { Component } from "react";
import { DatePeriodTypeEnum, ExperienceTypeEnum, MonthEnum } from "../Enums";
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
  short_description: string | undefined;
  tasks: string[][] | undefined;
};

export default class ExperienceCard extends Component<Props> {
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
      <div className="flex flex-row snap-start mr-4">
        <div className="w-1/4">
          <DatePeriod
            end_month={this.props.end_month}
            end_year={this.props.end_year}
            type={DatePeriodTypeEnum.TIMELINE}
          />
          <div className="w-0 mx-auto border-l-2 border-white h-full" />
        </div>
        <div className="my-6 w-3/4 group bg-white rounded-lg p-4 flex flex-col gap-8">
          {/** Job title and date */}
          <div className="flex flex-col w-full">
            <span className="font-black uppercase text-xl text-secondary duration-300">
              {this.props.title}
            </span>
            <DatePeriod
              start_month={this.props.start_month}
              start_year={this.props.start_year}
              end_month={this.props.end_month}
              end_year={this.props.end_year}
              date={this.props.date}
              type={DatePeriodTypeEnum.SUBHEADING}
            />
          </div>
          <div className="flex flex-row gap-6">
            <div className="basis-2/3 grid grid-rows-2 content-between">
              {/** Job description and tasks */}
              <div className="flex flex-col gap-2">
                {this.props.short_description}
              </div>
              {/** Experience Type Icon */}
              <div className="hidden lg:flex items-end">
                <div className="relative flex flex-row gap-2 select-none items-center whitespace-nowrap rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue800 group-hover:to-blue-900 bg-blue-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                  <span className="">{this.props.type}</span>
                  <div>{this.renderExperienceTypeIcon()}</div>
                </div>
              </div>
            </div>
            {/** Image with Location */}
            <div className="basis-1/3 m-auto lg:w-full">
              <ImageWithLocation
                image_name={this.props.image_name}
                location={this.props.location}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
