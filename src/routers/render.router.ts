import { Router } from "express";

const renderRouter = Router();

renderRouter.get("/", (req, res) => {
  res.render("index");
});

renderRouter.get("*", (req, res) => {
  res.render("page404", { host: res.app.locals.host, urlHit: req.url });
});

export default renderRouter;
