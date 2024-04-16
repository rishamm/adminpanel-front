import { createSlice } from "@reduxjs/toolkit";

const careerData = createSlice({
    name: 'Career',
    initialState: {
        careerDataLoading: false,
        careerData: [],
        error: null,
    },
    reducers: {

        careerDataRequest: (state) => {
            state.careerDataLoading = true;
        },
        careerDataSuccess(state, action) {
            state.careerDataLoading = false;
            state.careerData = action.payload;
        },
        careerDataFail(state, action) {
            state.careerDataLoading = false;
            state.error = action.payload;
        },
    }
});
export const { careerDataRequest, careerDataSuccess, careerDataFail } = careerData.actions;
export const careerReducer = careerData.reducer; 