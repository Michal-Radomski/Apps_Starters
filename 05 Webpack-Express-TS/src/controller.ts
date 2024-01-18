import { Request, RequestHandler, Response } from "express";

import User, { IUser } from "./UserModel";
import pool from "./psql";

//* MongoDB - list of users
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

//* PostgreSQL - list all of todos
export const getWholeList: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  console.log("req.ip:", req.ip);
  try {
    const list = await pool.query(
      "select u.user_name, u.user_email, t.todo_id, t.description, t.created_at, t.updated_at, t.private from users as u join todos as t on t.user_id = u.user_id where t.private=false"
    );
    res.status(200).json({ list: list.rows, message: "200, All todos list is ok" });
  } catch (error) {
    console.error({ error });
    res.status(500).send("Server error");
  }
};
