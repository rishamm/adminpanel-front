import { createSlice } from "@reduxjs/toolkit";

const programData = createSlice({
    name: 'Program',
    initialState: {
        programDataLoading: false,
        programData: [],
        error: null,
    },
    reducers: {

        programDataRequest: (state) => {
            state.programDataLoading = true;
        },
        programDataSuccess(state, action) {
            state.programDataLoading = false;
            state.programData = action.payload;
        },
        programDataFail(state, action) {
            state.programDataLoading = false;
            state.error = action.payload;
        },
    }
});
export const { programDataRequest, programDataSuccess, programDataFail } = programData.actions;
export const programReducer = programData.reducer; 