import { createSlice } from "@reduxjs/toolkit";

const communityData = createSlice({
    name: 'community',
    initialState: {
        communityDataLoading: false,
        communityData: [],
        error: null,
    },
    reducers: {

        communityDataRequest: (state) => {
            state.communityDataLoading = true;
        },
        communityDataSuccess(state, action) {
            state.communityDataLoading = false;
            state.communityData = action.payload;
        },
        communityDataFail(state, action) {
            state.communityDataLoading = false;
            state.error = action.payload;
        },
    }
});
export const { communityDataRequest, communityDataSuccess, communityDataFail } = communityData.actions;
export const communityReducer = communityData.reducer; 