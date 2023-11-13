import emailDomains from "../assets/emailDomain";
import emailTopDomains from "../assets/emailTopDomain";
import userLastNames from "../assets/userLastName";
import userNameFemales from "../assets/userNameFemale";
import userNameMales from "../assets/userNameMale";
import { randomItem, randomTwo } from "./helpers";
import { GenerateUser, GenerateUserOptionAttributes, User } from "./types";
import { randomBirthDay, randomDocument, randomEmail, randomIp } from "./user";

const generateUser: GenerateUser = (options) => {
  const { specific, attributes } = options;

  const gender = specific?.gender ?? randomTwo("female", "male");

  const age = specific?.age ?? Math.floor(Math.random() * 60 + 15);

  const birthDay = specific?.birthDay
    ? specific?.birthDay
    : randomBirthDay(age).toLocaleDateString();

  const emailDomain = specific?.emailDomain ?? randomItem(emailDomains);

  const emailTopDomain =
    specific?.emailTopDomain ?? randomItem(emailTopDomains);

  const ip = specific?.ip ?? randomIp();

  const firstname =
    specific?.firstname ??
    (gender === "female"
      ? randomItem(userNameFemales)
      : randomItem(userNameMales));

  const lastname = specific?.lastname ?? randomItem(userLastNames);

  const email =
    specific?.email ??
    randomEmail(firstname, lastname, age + "", emailDomain, emailTopDomain);

  const document =
    specific?.document ?? randomDocument(specific?.documentPattern);

  const generatedUser: User = {
    document,
    gender,
    age,
    birthDay,
    email,
    ip,
    firstname,
    lastname,
    fullname: `${firstname} ${lastname}`,
  };

  if (!attributes) {
    return generatedUser;
  }

  if (!Array.isArray(options.attributes)) {
    throw new Error("options.attributes must be an array of strings");
  }

  const result: Partial<User> = generatedUser;
  const resultKeys = Object.keys(result) as GenerateUserOptionAttributes;
  resultKeys.forEach((key) => {
    if (!attributes.includes(key)) {
      delete result[key];
    }
  });
  return result;
};

export default generateUser;
