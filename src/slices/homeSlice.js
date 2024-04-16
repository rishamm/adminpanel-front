import { createSlice } from "@reduxjs/toolkit";

const homeData = createSlice({
    name: 'Home',
    initialState: {
        testimonialsDataLoading: false,
        testimonialsData: [],
        professionalDataLoading:false,
        professionalData:[],
        aboutUsDataLoading: false,
        aboutUsData: [],
        error: null,
    },
    reducers: {

        testimonialsDataRequest: (state) => {
            state.testimonialsDataLoading = true;
        },
        testimonialsDataSuccess(state, action) {
            state.testimonialsDataLoading = false;
            state.testimonialsData = action.payload;
        },
        testimonialsDataFail(state, action) {
            state.testimonialsDataLoading = false;
            state.error = action.payload;
        },
        aboutUsDataRequest: (state) => {
            state.aboutUsDataLoading = true;
        },
        aboutUsDataSuccess: (state, action) => {
            state.aboutUsDataLoading = true;
            state.aboutUsData = action.payload;
        },
        aboutUsDataFail: (state, action) => {
            state.aboutUsDataLoading = true;
            state.error = action.payload;
        },
        proffesionalTestimonialsDataRequest: (state) => {
            state.professionalDataLoading = true;
        },
        proffesionalTestimonialsDataSuccess(state, action) {
            state.professionalDataLoading = false;
            state.professionalData = action.payload;
        },
        proffesionalTestimonialsDataFail(state, action) {
            state.professionalDataLoading = false;
            state.error = action.payload;
        },

    }
});
export const  {aboutUsDataRequest, aboutUsDataSuccess, aboutUsDataFail} = homeData.actions;
export const { testimonialsDataRequest, testimonialsDataSuccess, testimonialsDataFail } = homeData.actions;
export const { proffesionalTestimonialsDataFail, proffesionalTestimonialsDataRequest, proffesionalTestimonialsDataSuccess} = homeData.actions;
export const homeReducer = homeData.reducer; 