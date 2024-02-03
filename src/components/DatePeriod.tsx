import React, { Component } from "react";
import { DatePeriodTypeEnum, MonthEnum } from "../Enums";
import { capitalizeToLowercase } from "../helperFunctions/stringManipulation";
import { Typography } from "@material-tailwind/react";

type Props = {
  start_month?: MonthEnum | null;
  start_year?: number | null;
  end_month?: MonthEnum | null;
  end_year?: number | null;
  date?: string | null;
  type: DatePeriodTypeEnum;
};

export default class DatePeriod extends Component<Props> {
  getDateStyle() {
    switch (this.props.type) {
      case DatePeriodTypeEnum.SUBHEADING:
        return "text-gray-600 text-sm group-hover:text-secondary";
      case DatePeriodTypeEnum.TIMELINE:
        return "uppercase text-white text-xl font-bold py-4 my-2 text-center bg-primary sticky top-0";
    }
  }

  getDateString(): string {
    // if date is given, just return the data as string
    if (this.props.date) {
      return this.props.date;
    }
    var startDate: string = "";
    var endDate: string = "";

    // check if start_month and start_year is given
    if (
      (this.props.start_month || this.props.start_month === 0) &&
      this.props.start_year
    ) {
      startDate =
        capitalizeToLowercase(MonthEnum[this.props.start_month]) +
        " " +
        this.props.start_year;
    }

    // check if end_month and end_year is given
    if (
      (this.props.end_month || this.props.end_month === 0) &&
      this.props.end_year
    ) {
      endDate =
        capitalizeToLowercase(MonthEnum[this.props.end_month]) +
        " " +
        this.props.end_year;
    } else {
      endDate = "Today";
    }

    if (!startDate) {
      return endDate;
    } else return startDate + " - " + endDate;
  }

  render() {
    return (
      <Typography placeholder={undefined} className={this.getDateStyle()}>
        {this.getDateString()}
      </Typography>
    );
  }
}
