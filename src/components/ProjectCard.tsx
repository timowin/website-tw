import { Component } from "react";
import TechnologyBadge from "./TechnologyBadge";
import { MonthEnum, TechnologyTypeEnum } from "../Enums";
import DatePeriod from "./DatePeriod";

// Defines all properties
type Props = {
  title: string;
  start_month: MonthEnum | undefined;
  start_year: number | undefined;
  end_month?: MonthEnum | undefined;
  end_year?: number | undefined;
  short_description: string;
  technologies?: [string, TechnologyTypeEnum][];
};

export default class ProjectCard extends Component<Props> {
  renderTechnologies() {
    if (!this.props.technologies) return null;

    const sortedTechnologies = this.props.technologies.sort(
      (a, b) => a[1] - b[1]
    );

    return sortedTechnologies.map(([technologyValue, technologyType]) => (
      <TechnologyBadge type={technologyType} value={technologyValue} />
    ));
  }

  render() {
    return (
      <div className="group bg-white w-full rounded-lg p-4 grid grid-cols flex-grow hover:scale-105 duration-300 shadow-lg">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-black uppercase text-xl text-secondary duration-300">
              {this.props.title}
            </span>

            <DatePeriod
              start_month={this.props.start_month}
              start_year={this.props.start_year}
              end_month={this.props.end_month}
              end_year={this.props.end_year}
            />
          </div>
          <div>{this.props.short_description}</div>
          <div className="flex flex-row flex-wrap gap-2">
            {this.renderTechnologies()}
          </div>
        </div>
      </div>
    );
  }
}
