import React, { Component } from "react";
import { MonthEnum } from "../Enums";
import { capitalizeToLowercase } from "../helperFunctions/stringManipulation";

type Props = {
  start_month: MonthEnum;
  start_year: number;
  end_month?: MonthEnum | null;
  end_year?: number | null;
  date?: string | null;
};

export default class DatePeriod extends Component<Props> {
  getDateString() {
    if (this.props.date) {
      return this.props.date;
    } else {
      const startDate =
        capitalizeToLowercase(MonthEnum[this.props.start_month]) +
        " " +
        this.props.start_year;

      if (
        this.props.end_month !== null &&
        this.props.end_month !== undefined &&
        this.props.end_year !== null &&
        this.props.end_year !== undefined
      ) {
        var endDate =
          capitalizeToLowercase(MonthEnum[this.props.end_month]) +
          " " +
          this.props.end_year;
      } else {
        var endDate = "Today";
      }
      return startDate + " - " + endDate;
    }
  }
  render() {
    return (
      <span className="text-gray-600 text-sm group-hover:text-secondary">
        {this.getDateString()}
      </span>
    );
  }
}
