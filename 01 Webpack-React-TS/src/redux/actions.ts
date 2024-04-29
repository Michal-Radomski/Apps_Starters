import axios from "axios";

import { GET_ADDRESS_IP } from "./actionTypes";

export const getAddressIP = () => async (dispatch: Dispatch) => {
  console.log("getAddressIP");
  const URL = "https://skyline.github.com/michal-radomski/2023.json";
  console.log({ URL });

  await axios
    .get(URL)
    .then((data) => {
      console.log("data:", data);
      // dispatch({ type: GET_ADDRESS_IP, payload: data });
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
    });
  // .finally(() => console.log("Job done!"));
};
