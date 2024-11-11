// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiData>): void {
  console.log("req.method:", req.method);

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress; //* IPv6
  console.log({ ip });

  return res.status(200).json({ name: "John Doe", age: 99 });
}
