//@ Webpack!
import path from "path";
import http from "http";

import * as dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";

//* Import routes
import indexRouter from "./indexRouter";

//* Import DB connection/ pool
// import pool from "./psql";
// import { connectDb } from "./psql"

//* The server
const app: Express = express();

//* Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
  })
);

//* Route middleware
app.use("/api", indexRouter);

//* Mongo DB
// mongoose
//   .connect(process.env.MONGO_URL as string)
//   .then((con: { connection: { host: string } }) => {
//     console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
//   })
//   .catch((error: string) => console.log("Mongo DB Error => ", error));

//* PostgreSQL
// connectDb();
// pool
//   .connect()
//   .then(() => {
//     console.log("Connected to the PostgreSQL DB successfully...");
//   })
//   .catch((error) => console.error({ error }));

//* Test route
app.get("/", (req: Request, res: Response) => {
  console.log("req.ip:", req.ip);
  res.send("<h1 style='color:blue;text-align:center'>API is running</h1>");
});

//* Serve static assets in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));
//   app.get("/*", (req: Request, res: Response) => {
//     console.log("req.ip:", req.ip);
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

//* Port
const port = (process.env.PORT || 5000) as number;

const server = http.createServer(app);
server.listen({ port: port }, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});

//* Generate JWT secret string
const JWT_Secret = require("crypto").randomBytes(48).toString("hex");
console.log({ JWT_Secret }, JWT_Secret.length);

//* Generate JWT secret string - V2 -> console!
// openssl rand -hex 64
