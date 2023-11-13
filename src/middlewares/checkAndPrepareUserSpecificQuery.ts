import { Request, Response, NextFunction } from "express";
import isGenerateUserOptionSpecific from "../utils/guards/isGenerateUserOptionSpecific";

export default (req: Request, _res: Response, next: NextFunction) => {
  const specificOptions = { ...req.query } as Record<string, string | number>;

  delete specificOptions.amount;
  delete specificOptions.attributes;

  if (specificOptions.age) {
    specificOptions.age = +specificOptions.age;
  }

  if (isGenerateUserOptionSpecific(specificOptions)) {
    req.body.specific = specificOptions;
    next();
  } else {
    next(new Error("Invalid SpecificOptions"));
  }
};
