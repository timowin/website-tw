import { Chip } from "@material-tailwind/react";
import React, { Component } from "react";
import { TechnologyTypeEnum } from "../Enums";
import {
  CodeBracketIcon,
  BookOpenIcon,
  WrenchIcon,
  SparklesIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

type Props = {
  type: TechnologyTypeEnum | null;
  value: string | null;
};

class TechnologyBadge extends Component<Props> {
  getIcon() {
    if (this.props.type === TechnologyTypeEnum.LANGUAGE) {
      return <CodeBracketIcon />;
    }
    if (this.props.type === TechnologyTypeEnum.FRAMEWORK) {
      return <BookOpenIcon />;
    }
    if (this.props.type === TechnologyTypeEnum.TOOL) {
      return <WrenchIcon />;
    }
    if (this.props.type === TechnologyTypeEnum.MISC) {
      return <SparklesIcon />;
    }
    if (this.props.type === TechnologyTypeEnum.DATABASE) {
      return <ServerStackIcon />;
    }
  }

  getColor() {
    if (this.props.type === TechnologyTypeEnum.LANGUAGE) {
      return "indigo";
    }
    if (this.props.type === TechnologyTypeEnum.FRAMEWORK) {
      return "blue";
    }
    if (this.props.type === TechnologyTypeEnum.TOOL) {
      return "teal";
    }
    if (this.props.type === TechnologyTypeEnum.MISC) {
      return "green";
    }
    if (this.props.type === TechnologyTypeEnum.DATABASE) {
      return "cyan";
    }
  }

  render() {
    return (
      <Chip
        value={this.props.value}
        size="sm"
        className={`bg-${this.getColor()}-500`}
        icon={this.getIcon()}
      />
    );
  }
}

export default TechnologyBadge;
