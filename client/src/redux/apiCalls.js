import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";
import { publicRequest } from "../requestMethods";

const axiosInstance = axios.create({
  BASE_URL: process.env.REACT_APP_API_URL,
});

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
