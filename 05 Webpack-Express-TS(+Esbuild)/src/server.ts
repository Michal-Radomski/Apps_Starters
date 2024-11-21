// Todo: change name convention to: kebab-case eg: kebab-case.ts

//* Test route: http://localhost:5000, https://localhost:5443/
//* Test - MongoDB: http://localhost:5000/api/mongo-users, https://localhost:5443/api/mongo-users
//* Test - PostgreSQL: http://localhost:5000/api/psql/all-todos, https://localhost:5443/api/psql/all-todos

import path from "path";
import http from "http";
import https from "https";
import fs from "fs";

import * as dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose"; //! Check if necessary! + (pg!)
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
// import cookieParser from "cookie-parser"; //! Check if necessary!

//* Import routes
import indexRouter from "./indexRouter";

//* Import DB connection/ pool
import pool from "./psql";
// import { connectDb } from "./psql";

//* The server
const app: Express = express();

const corsOptions = {
  origin: true,
  methods: ["GET", "POST"],
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: true,
};

//* Custom headers example
// app.use((_req, res, next): void => {
//   // Attach CORS headers
//   // Required when using a detached backend (that runs on a different domain)
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST");
//   next();
// });

//* Middlewares
app.use(cors(corsOptions));
// app.use(cookieParser());
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
// Compress all responses
app.use(compression({ level: 6 }));

//* Route middleware
app.use("/api", indexRouter);

//* Mongo DB
mongoose
  .connect(process.env.MONGO_URL as string)
  .then((con: { connection: { host: string } }) => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  })
  .catch((error: string) => console.log("Mongo DB Error => ", error));

//* PostgreSQL
// connectDb();
pool
  .connect()
  .then(() => {
    console.log("Connected to the PostgreSQL DB successfully...");
  })
  .catch((error) => console.error({ error }));

//* Favicon
app.get("/favicon.ico", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/favicon.svg"));
});
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

const credentials = {
  key: fs.readFileSync(process.env.SERVER_KEY as string, "utf-8"),
  cert: fs.readFileSync(process.env.SERVER_CRT as string, "utf-8"),
};
// console.log("credentials:", credentials);

//* Port
const portHTTP = (process.env.PORT || 5000) as number;
const portHTTPS = (process.env.HTTPS_PORT || 5443) as number;

const httpServer = http.createServer(app);
httpServer.listen({ port: portHTTP }, () => {
  console.log(`🚀 Server is listening at http://localhost:${portHTTP}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});

//* HTTPS Server
const httpsServer = https.createServer(credentials, app);
httpsServer.listen({ port: portHTTPS }, (): void => {
  console.log(`🚀 Server HTTPS is listening at https://localhost:${portHTTPS}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});

// console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

//* Generate JWT secret string
// const JWT_Secret = require("crypto").randomBytes(48).toString("hex");
// console.log({ JWT_Secret }, JWT_Secret.length);

//* Generate JWT secret string - V2 -> console!
// openssl rand -hex 64
