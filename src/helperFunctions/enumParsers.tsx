import { MonthEnum, TechnologyTypeEnum } from "../Enums";

function parseMonth(monthString: string): MonthEnum | undefined {
  if (!monthString) {
    return undefined;
  }
  switch (monthString.toUpperCase()) {
    case "JAN":
      return MonthEnum.JAN;
    case "FEB":
      return MonthEnum.FEB;
    case "MAR":
      return MonthEnum.MAR;
    case "APR":
      return MonthEnum.APR;
    case "MAY":
      return MonthEnum.MAY;
    case "JUN":
      return MonthEnum.JUN;
    case "JUL":
      return MonthEnum.JUL;
    case "AUG":
      return MonthEnum.AUG;
    case "SEP":
      return MonthEnum.SEP;
    case "OCT":
      return MonthEnum.OCT;
    case "NOV":
      return MonthEnum.NOV;
    case "DEC":
      return MonthEnum.DEC;
    default:
      return undefined;
  }
}
export { parseMonth };

function parseTechnology(
  technologyTypeString: string
): TechnologyTypeEnum | undefined {
  if (!technologyTypeString) {
    return undefined;
  }
  switch (technologyTypeString.toUpperCase()) {
    case "LANGUAGE":
      return TechnologyTypeEnum.LANGUAGE;
    case "FRAMEWORK":
      return TechnologyTypeEnum.FRAMEWORK;
    case "DATABASE":
      return TechnologyTypeEnum.DATABASE;
    case "TOOL":
      return TechnologyTypeEnum.MISC;
    default:
      return TechnologyTypeEnum.MISC;
  }
}
export { parseTechnology };
