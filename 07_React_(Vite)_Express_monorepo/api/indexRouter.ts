import express, { Router } from "express";

import { testController } from "./controller";

const indexRouter: Router = express.Router({ strict: false, caseSensitive: true });

//* Test route
indexRouter.get("/test-route", testController);

export default indexRouter;
