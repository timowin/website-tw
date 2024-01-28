import React, { Component } from "react";
import { MonthEnum } from "../Enums";

type Props = {
  start_month: MonthEnum | null;
  start_year: number | null;
  end_month?: MonthEnum | null;
  end_year?: number | null;
  date?: string | null;
};

const toCapitalizedLowercase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default class DatePeriod extends Component<Props> {
  getDateString() {
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
        toCapitalizedLowercase(MonthEnum[this.props.start_month]) +
        " " +
        this.props.start_year +
        " - " +
        toCapitalizedLowercase(MonthEnum[this.props.end_month]) +
        " " +
        this.props.end_year
      );
    }
    if (this.props.start_month && this.props.start_year)
      return (
        toCapitalizedLowercase(MonthEnum[this.props.start_month]) +
        " " +
        this.props.start_year +
        " - Today"
      );
  }
  render() {
    return (
      <span className="text-gray-600 text-sm group-hover:text-secondary">
        {this.getDateString()}
      </span>
    );
  }
}
