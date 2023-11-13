import { Request, Response, NextFunction } from "express";
import isGenerateUserOptionAttributes from "../utils/guards/isGenerateUserOptionAttributes";

export default (req: Request, _res: Response, next: NextFunction) => {
  const attributes = [];

  if (!req.query.attributes) {
    next();
    return;
  }

  if (!Array.isArray(req.query.attributes)) {
    attributes.push(req.query.attributes);
  } else {
    attributes.push(...req.query.attributes);
  }

  attributes.forEach((attribute, i) => {
    attributes[i] = attribute.toLowerCase();
  });

  if (isGenerateUserOptionAttributes(attributes)) {
    req.body.attributes = attributes;
    next();
  } else {
    next(new Error("Invalid GenerateUserOptionAttributes"));
  }
};
