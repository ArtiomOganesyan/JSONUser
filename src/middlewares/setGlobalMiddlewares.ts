import express from "express";
import morgan from "morgan";
import limiter from "./rateLimit";
import path from "path";

export default (app: express.Express): express.Express => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(process.cwd(), "public")));
  app.use(morgan("dev"));
  app.use(limiter);
  return app;
};
