import { createSlice } from "@reduxjs/toolkit";

const contactData = createSlice({
    name: 'Contact',
    initialState: {
        queryDataLoading: false,
        queryData: [],
        error: null,
    },
    reducers: {

        queryDataRequest: (state) => {
            state.queryDataLoading = true;
        },
        queryDataSuccess(state, action) {
            state.queryDataLoading = false;
            state.queryData = action.payload;
        },
        queryDataFail(state, action) {
            state.queryDataLoading = false;
            state.error = action.payload;
        },
    }
});
export const { queryDataRequest, queryDataSuccess, queryDataFail } = contactData.actions;
export const contactReducer = contactData.reducer; 