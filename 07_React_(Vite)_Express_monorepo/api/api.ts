import path from "path";
import http from "http";
import https from "https";
import fs from "fs";

import * as dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

//* Import routes
import indexRouter from "./indexRouter";

//* The server
const app: Express = express();

const corsOptions = {
  origin: true,
  methods: ["POST", "GET"],
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: true,
};

//* Create /tmp/ folder for express-fileupload
// Define the path for the 'tmp' folder
const tmpDir = path.join(__dirname, "tmp");
// console.log("tmpDir:", tmpDir);

// Check if the 'tmp' folder exists
if (!fs.existsSync(tmpDir)) {
  // Create the 'tmp' folder if it doesn't exist
  fs.mkdirSync(tmpDir, { recursive: true });
  console.log("Created tmp directory");
}

//* Middlewares
app.use(cors(corsOptions));
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

//* Favicon
app.get("/favicon.ico", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/favicon.svg"));
});
//* Test route
app.get("/test", (req: Request, res: Response) => {
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
// console.log("process.env.HTTP_PORT:", process.env.HTTP_PORT);
// console.log("process.env.HTTPS_PORT:", process.env.HTTPS_PORT);
const portHTTP = (process.env.HTTP_PORT || 5000) as number;
const portHTTPS = (process.env.HTTPS_PORT || 5443) as number;
// console.log({ portHTTP, portHTTPS });

//* HTTP Server
const httpServer = http.createServer(app);
httpServer.listen({ port: portHTTP }, () => {
  console.log(`Server is listening at http://localhost:${portHTTP}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});

//* HTTPS Server
const httpsServer = https.createServer(credentials, app);
httpsServer.listen({ port: portHTTPS }, () => {
  console.log(`Server HTTPS is listening at https://localhost:${portHTTPS}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});
