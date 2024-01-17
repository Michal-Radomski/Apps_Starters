import express, { Router } from "express";

import { getUsers } from "./userController";

const indexRouter: Router = express.Router();

indexRouter.get("/mongo-users", getUsers);

export default indexRouter;
