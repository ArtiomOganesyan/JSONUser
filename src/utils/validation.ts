import { OptionValidation } from "./types";

const specificRules: [string, string[]][] = [
  ["number", ["age"]],
  [
    "string",
    [
      "gender",
      "firstname",
      "lastname",
      "email",
      "emailDomain",
      "emailTopDomain",
      "birthDay",
      "ip",
      "document",
      "documentPattern",
    ],
  ],
];

export const optionValidation: OptionValidation = ({ specific }) => {
  if (!specific) return;

  const results: string[] = [];

  Object.entries(specific).forEach(([key, value]) => {
    specificRules.forEach(([type, ruleFor]) => {
      if (ruleFor.some((item) => item === key)) {
        if (typeof value !== type) {
          results.push(
            `\nproperty ${key} of option.specific must be typeof ${type}`,
          );
        }
      }
    });
  });
  if (results.length) throw new Error(`${results.join(" ")}\n`);
};
