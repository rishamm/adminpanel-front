import { createSlice } from "@reduxjs/toolkit";

const userDataList = createSlice({
    name: 'User',
    initialState: {
        userDataLoading: false,
        userData: [],
        error: null,

    },
    reducers: {
        userDataRequest: (state) => {
            state.userDataLoading = true;
        },
        userDataSuccess(state, action) {
            console.log(state, action, "aaa")
            state.userDataLoading = false;
            state.userData = action.payload;

            state.error = null;
        },
        userDataFail(state, action) {
            state.userDataLoading = false;
            state.error = action.payload;
        },
    }
});

export const { userDataRequest, userDataSuccess, userDataFail } = userDataList.actions;
export const userReducer = userDataList.reducer;
export default userDataList;
