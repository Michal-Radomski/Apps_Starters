import axios from "axios";

import { GET_ADDRESS_IP } from "./actionTypes";
import { Dispatch } from "../Interfaces";

export const getAddressIP =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const URL = process.env.APP_Api_URL as string;
    // console.log({ URL });

    await axios
      .get(URL)
      .then(({ data }) => {
        // console.log("data:", data);
        dispatch({ type: GET_ADDRESS_IP, payload: data });
      })
      .catch((error) => {
        if (error.response) {
          // console.log("error.response.data:", error.response.data);
          console.error("error.response.status:", error.response.status);
          // console.log("error.response.headers:", error.response.status);
        }
        // console.log("error.config:", error.config);
        // console.log("error:", error);
        // throw error;
        // throw new Error("Error");
      })
      .finally(() => console.log("Job done!"));
  };
