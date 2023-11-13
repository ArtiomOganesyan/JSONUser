import generateUser from "./generateUser";
import { RandomizeUsers } from "./types";
import { optionValidation } from "./validation";

const randomizeUsers: RandomizeUsers = (options) => {
  optionValidation(options);

  if (options.amount === undefined) {
    return [generateUser(options)];
  }

  if (typeof options.amount !== "number") {
    throw new Error("options.amount must be a number");
  }

  const result = new Array(options.amount ?? 1)
    .fill("")
    .map((_el, i) => ({ ...generateUser(options), id: i + 1 }));

  return result;
};

export default randomizeUsers;
