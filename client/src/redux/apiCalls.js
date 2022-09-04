import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";
import { publicRequest } from "../requestMethods";
import { axiosInstance } from "../config";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
