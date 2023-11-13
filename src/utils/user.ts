import { randomTwo } from "./helpers";
import { RandomBirthDay, RandomDocument, RandomEmail, RandomIp } from "./types";

export const randomEmail: RandomEmail = (
  firstname,
  lastname,
  age,
  domain,
  topDomain,
) =>
  `${firstname}${randomTwo(".", "")}${lastname}${randomTwo(
    age,
    "",
  )}@${domain}.${topDomain}`;

export const randomBirthDay: RandomBirthDay = (age) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDay();

  const dateStart = new Date(
    currentYear - age - 1,
    currentMonth,
    currentDay + 1,
  );
  const dateEnd = new Date(currentYear - age, currentMonth, currentDay);

  return new Date(
    dateStart.getTime() +
      Math.random() * (dateEnd.getTime() - dateStart.getTime()),
  );
};

export const randomIp: RandomIp = () =>
  Array(4)
    .fill(0)
    .map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0))
    .join(".");

export const randomDocument: RandomDocument = (pattern = "###-##-####") =>
  pattern
    .split("")
    .map((el) => (el === "#" ? Math.floor(Math.random() * 9) + 1 : el))
    .join("");
