/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

export default (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (Array.isArray(error)) {
    res.json(error);
    return;
  }
  res.json({ msg: error.message, stack: error.stack });
};
