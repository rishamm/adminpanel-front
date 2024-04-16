import { queryDataFail, queryDataRequest, queryDataSuccess } from "../slices/contactSlice";
import { globalGetService } from "../utils/globalApiService";

export const fetchQueryList = () => {
    return async (dispatch) => {
        try {
            dispatch(queryDataRequest());
            const response = await globalGetService(`/queries`);
            console.log(response.data, 'responses');
            dispatch(queryDataSuccess(response.data.data));
        } catch (error) {
            console.error('Error Query List data:', error);
            dispatch(queryDataFail(error.message));
        }
    };
};