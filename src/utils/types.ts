export type GenerateUserOptionSpecific = {
  document?: string;
  gender?: string;
  age?: number;
  birthDay?: string;
  email?: string;
  ip?: string;
  firstname?: string;
  lastname?: string;
  emailDomain?: string;
  emailTopDomain?: string;
  documentPattern?: string;
};

export type GenerateUserOptionAttributes = (
  | "document"
  | "gender"
  | "age"
  | "birthDay"
  | "email"
  | "ip"
  | "firstname"
  | "lastname"
  | "fullname"
)[];

export type GenerateUserOption = {
  specific?: GenerateUserOptionSpecific;
  attributes?: GenerateUserOptionAttributes;
};

export type User = {
  document: string;
  gender: string;
  age: number;
  birthDay: string;
  email: string;
  ip: string;
  firstname: string;
  lastname: string;
  fullname: string;
};

export type GenerateUser = (option: GenerateUserOption) => Partial<User>;

export type RandomTwo = <T>(first: T, second: T) => T;

export type RandomItem = <T>(arr: T[]) => T;

export type RandomizeUsersOption = {
  amount?: number;
} & Partial<GenerateUserOption>;

export type RandomizeUsers = (options: RandomizeUsersOption) => Partial<User>[];

export type RandomEmail = (
  firstname: string,
  lastname: string,
  age: string,
  domain: string,
  topDomain: string,
) => string;

export type RandomBirthDay = (age: number) => Date;

export type RandomIp = () => string;

export type RandomDocument = (pattern?: string) => string;

export type OptionValidation = (option: RandomizeUsersOption) => void;
