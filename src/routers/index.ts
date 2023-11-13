import express from "express";

import userRouter from "./user.router";
import checkAndPrepareUserAttributesQuery from "../middlewares/checkAndPrepareUserAttributesQuery";
import checkAndPrepareUserSpecificQuery from "../middlewares/checkAndPrepareUserSpecificQuery";
import renderRouter from "./render.router";
import apiCors from "../middlewares/apiCors";

const router = express.Router();

//API Routers
router.use(
  "/api/users",
  apiCors,
  checkAndPrepareUserAttributesQuery,
  checkAndPrepareUserSpecificQuery,
  userRouter,
);

//Render Routers
router.use("/", renderRouter);

export default router;
