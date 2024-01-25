import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Component } from "react";

type Props = {
  start_month: string;
  start_year: number;
  end_month?: string | null;
  end_year?: number | null;
  employer: string;
  job_title: string;
  job_type: string;
  description: string;
  task_1?: string | null;
  task_2?: string | null;
  task_3?: string | null;
  image: string;
};

export default class WorkExperience extends Component<Props> {
  renderTasks() {
    const tasks = [this.props.task_1, this.props.task_2, this.props.task_3];

    return tasks.map((task, index) => {
      if (task) {
        return <li key={index}>{task}</li>;
      }
      return null;
    });
  }

  render() {
    return (
      <Card className="w-full flex-row" placeholder={undefined}>
        <CardBody placeholder={undefined}>
          <Typography
            placeholder={undefined}
            variant="h6"
            color="gray"
            className="mb-4 uppercase"
          >
            {this.props.start_month} {this.props.start_year} -{" "}
            {this.props.end_month} {this.props.end_year}
          </Typography>
          <Typography placeholder={undefined} variant="h4" color="blue-gray">
            {this.props.job_title}
          </Typography>
          <Typography
            placeholder={undefined}
            variant="h6"
            color="blue-gray"
            className="mb-2"
          >
            {this.props.job_type} @ {this.props.employer}
          </Typography>
          <Typography
            placeholder={undefined}
            color="gray"
            className="mb-8 font-normal"
          >
            {this.props.description}
            <ul className="list-disc pl-4">{this.renderTasks()}</ul>
          </Typography>
        </CardBody>
        <CardHeader
          placeholder={undefined}
          shadow={false}
          floated={false}
          className="m-0 w-1/3 shrink-0 rounded-l-none p-8"
        >
          <img
            src={this.props.image}
            alt="card-image"
            className="h-full w-full object-contain"
          />
        </CardHeader>
      </Card>
    );
  }
}
