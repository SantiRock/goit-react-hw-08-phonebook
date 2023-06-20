import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
//import { Alert } from "@mui/material";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected]() {
            //<Alert severity="error">Username or Email are already being used</Alert>
            alert('Username or Email are already being used')

        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.rejected]() {
            alert('Email or password is incorrect, or both');
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },

    },
});

export const authReducer = authSlice.reducer;

