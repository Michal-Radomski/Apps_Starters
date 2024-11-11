import { Request, RequestHandler, Response } from "express";

// Test controller
export const testController: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  console.log("req.ip:", req.ip);
  try {
    const testData = { name: "test", type: "object" };
    // console.log("testData:", testData);

    if (!!testData) {
      return res.status(200).json({ testData });
    } else {
      return res.status(200).json({ message: "No Data" });
    }
  } catch (error) {
    // console.log({ error });
    if (error instanceof Error) {
      console.log("error.message:", error.message);
    }
    res.status(404).json({ error });
  }
};
