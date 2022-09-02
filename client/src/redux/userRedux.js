import { createSlice } from "@reduxjs/toolkit";

/* Rreduxjs/toolkit nos proporciona una API llamada createSlice, que es un método de tipo helper que nos permite crear un “pedazo” del store. En este caso, será el pedazo que contendrá las tareas de nuestra lista.

El método recibe como parámetro un objeto con las siguientes propiedades principales:

name → nombre de nuestro slice.
initialState → estado inicial de nuestro slice.
reducers → objeto que contiene los reducers y actions asociados a ellos. */

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
    isFetching: false,
    error: false,
  },

  reducers: {
    initialStart: (state) => {
      state.currentUser =
        JSON.parse(localStorage.getItem("state.currentUser")) || null;
      state.isFetching = false;
      state.error = false;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.isFetching = false;
      state.error = null;
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
