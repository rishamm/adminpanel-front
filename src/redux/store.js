import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { homeReducer } from "../slices/homeSlice";
import { footerDataReducer } from "../slices/sharedSlice";
import { contactReducer } from "../slices/contactSlice";
import { careerReducer } from "../slices/careerSlice";
import { programReducer } from "../slices/programSlice";
import { newsReducer } from "../slices/newsSlice";
import { communityReducer } from "../slices/communitySlice";


const reducer = combineReducers({


    homeState: homeReducer,
    contactState: contactReducer,
    careerState: careerReducer,
    programState: programReducer,
    newsState: newsReducer,
    communityState: communityReducer,

    //shared
    sharedState: footerDataReducer,

});

const store = configureStore({
    reducer,
});

export default store;
