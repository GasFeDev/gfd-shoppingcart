import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
/* import axios from "axios";
import { publicRequest } from "../requestMethods"; */
import { axiosInstance } from "../config";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
