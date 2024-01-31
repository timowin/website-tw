import { ExperienceTypeEnum, MonthEnum, TechnologyTypeEnum } from "../Enums";

function parseMonthEnum(
  monthString: string | undefined
): MonthEnum | undefined {
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
export { parseMonthEnum };

function parseTechnologyTypeEnum(
  technologyTypeString: string
): TechnologyTypeEnum {
  switch (technologyTypeString.toUpperCase()) {
    case "LANGUAGE":
      return TechnologyTypeEnum.LANGUAGE;
    case "FRAMEWORK":
      return TechnologyTypeEnum.FRAMEWORK;
    case "DATABASE":
      return TechnologyTypeEnum.DATABASE;
    case "TOOL":
      return TechnologyTypeEnum.TOOL;
    case "MISC":
      return TechnologyTypeEnum.MISC;
    default:
      return TechnologyTypeEnum.MISC;
  }
}
export { parseTechnologyTypeEnum };

function parseExperienceTypeEnum(
  experienceTypeString: string | undefined
): ExperienceTypeEnum | undefined {
  if (!experienceTypeString) {
    return undefined;
  }
  switch (experienceTypeString.toUpperCase()) {
    case "WORK":
      return ExperienceTypeEnum.WORK;
    case "CERTIFICATE":
      return ExperienceTypeEnum.CERTIFICATE;
    case "EDUCATION":
      return ExperienceTypeEnum.EDUCATION;
    default:
      return undefined;
  }
}
export { parseExperienceTypeEnum };
