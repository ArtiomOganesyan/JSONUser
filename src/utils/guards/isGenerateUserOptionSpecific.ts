import { GenerateUserOptionSpecific } from "../types";

export default function (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
): value is Partial<GenerateUserOptionSpecific> {
  const specificOptionKeys: (keyof GenerateUserOptionSpecific)[] = [
    "document",
    "documentPattern",
    "gender",
    "age",
    "birthDay",
    "email",
    "ip",
    "firstname",
    "lastname",
  ];

  if (typeof value !== "object" || value === null) {
    return false;
  }

  for (const key in value) {
    if (!specificOptionKeys.includes(key as keyof GenerateUserOptionSpecific)) {
      return false;
    }

    switch (key) {
      case "document":
      case "documentPattern":
      case "gender":
      case "birthDay":
      case "email":
      case "ip":
      case "firstname":
      case "lastname":
      case "fullname":
        if (typeof value[key] !== "string") return false;
        break;
      case "age":
        if (typeof value[key] !== "number") return false;
        break;
      default:
        return false;
    }
  }

  return true;
}
