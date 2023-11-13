import { GenerateUserOptionAttributes } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (value: any): value is GenerateUserOptionAttributes {
  const validOptions: string[] = [
    "document",
    "gender",
    "age",
    "birthDay",
    "email",
    "ip",
    "firstname",
    "lastname",
    "fullname",
  ];

  return (
    Array.isArray(value) &&
    value.every((option) => validOptions.includes(option))
  );
}
