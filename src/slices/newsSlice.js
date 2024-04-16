import { createSlice } from "@reduxjs/toolkit";

const newsData = createSlice({
    name: 'News',
    initialState: {
        newsDataLoading: false,
        newsData: [],
        error: null,
    },
    reducers: {

        newsDataRequest: (state) => {
            state.newsDataLoading = true;
        },
        newsDataSuccess(state, action) {
            state.newsDataLoading = false;
            state.newsData = action.payload;
        },
        newsDataFail(state, action) {
            state.newsDataLoading = false;
            state.error = action.payload;
        },
    }
});
export const { newsDataRequest, newsDataSuccess, newsDataFail } = newsData.actions;
export const newsReducer = newsData.reducer; 