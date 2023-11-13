import { Router } from "express";
import randomizeUsers from "../utils/randomizeUsers";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  const users = randomizeUsers({
    amount: req.query.amount ? +req.query.amount : 1,
    attributes: req.body.attributes,
    specific: req.body.specific,
  });

  res.json(users);
});

export default userRouter;
