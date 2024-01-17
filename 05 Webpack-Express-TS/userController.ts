import { Request, RequestHandler, Response } from "express";

import User, { IUser } from "./UserModel";

export const getUsers: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  console.log("req.ip:", req.ip);
  try {
    const list: IUser[] = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json({ list });
  } catch (error) {
    console.log({ error });
    res.status(404).json(error);
  }
};
