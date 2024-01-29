import React, { Component } from "react";
import { MonthEnum } from "../Enums";
import { capitalizeToLowercase } from "../helperFunctions/stringManipulation";

type Props = {
  start_month: MonthEnum | null;
  start_year: number | null;
  end_month?: MonthEnum | null;
  end_year?: number | null;
  date?: string | null;
};

export default class DatePeriod extends Component<Props> {
  getDateString() {
    // if date is given, just return the data as string
    if (this.props.date) {
      return this.props.date;
    }

    // check if start_month and start_year is given
    if (
      (this.props.start_month || this.props.start_month === 0) &&
      this.props.start_year
    ) {
      const startDate =
        capitalizeToLowercase(MonthEnum[this.props.start_month]) +
        " " +
        this.props.start_year;

      // if start_date is given, check if end_month and end_year is given
      if (
        (this.props.end_month || this.props.end_month === 0) &&
        this.props.end_year
      ) {
        var endDate =
          capitalizeToLowercase(MonthEnum[this.props.end_month]) +
          " " +
          this.props.end_year;
      } else {
        endDate = "Today";
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
