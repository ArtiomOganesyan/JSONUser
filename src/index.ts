import express from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import routers from "./routers";
import setErrorHandle from "./middlewares/setErrorHandle";
import setGlobalMiddlewares from "./middlewares/setGlobalMiddlewares";
dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();

// Set View Engine
app.set("view engine", "ejs");

// Set Global Variables
app.locals.port = process.env.PORT || "5005";
app.locals.host = process.env.HOST || `http://localhost:${app.locals.port}`;

// Set Global Middlewares
setGlobalMiddlewares(app);

// Set Routers
app.use("/", routers);

// Set Error Handlers
app.use(setErrorHandle);

app.listen(app.locals.port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${app.locals.port}`,
  );
});
