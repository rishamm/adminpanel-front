import { userDataFail, userDataRequest, userDataSuccess } from "../slices/userSlice";
import { globalGetService } from "../utils/globalApiService";

export const fetchUserList = () => {
    return async (dispatch) => {
        console.log("call");
        try {
            dispatch(userDataRequest());
            const response = await globalGetService(`/user`);
            console.log(response.data, 'responses');
            dispatch(userDataSuccess(response.data));
        } catch (error) {
            console.error('Error fetching user data:', error);
            dispatch(userDataFail(error.message));
        }
    };
};