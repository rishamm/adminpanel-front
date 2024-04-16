import { createSlice } from "@reduxjs/toolkit";

const sharedData = createSlice({
    name: 'shared',
    initialState: {
        footerDataLoading: false,
        footerData: [],
        termDataLoading: false,
        termData: [],
        error: null,
    },
    reducers: {
        socialIconRequest: (state) => {
            state.footerDataLoading = true;
        },
        socialIconSuccess(state, action) {
            state.footerDataLoading = false;
            state.footerData = action.payload;
        },
        socialIconFail(state, action) {
            state.footerDataLoading = false;
            state.error = action.payload;
        },
        termRequest: (state) => {
            state.termDataLoading = true;
        },
        termSuccess(state, action) {
            state.termDataLoading = false;
            state.termData = action.payload;
        },
        termFail(state, action) {
            state.termDataLoading = false;
            state.error = action.payload;
        },
    }
});
export const { termSuccess, termRequest, termFail } = sharedData.actions;
export const { socialIconFail, socialIconRequest, socialIconSuccess } = sharedData.actions;
export const footerDataReducer = sharedData.reducer;
