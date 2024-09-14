import express, { Router } from "express";

import { getUsers, getWholeList } from "./controller";

const indexRouter: Router = express.Router({ strict: false, caseSensitive: true });

//* MongoDB - list of users
indexRouter.get("/mongo-users", getUsers);

//* PostgreSQL - list of todos
indexRouter.get("/psql/all-todos", getWholeList);

export default indexRouter;
