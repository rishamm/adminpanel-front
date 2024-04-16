import { programDataFail, programDataRequest, programDataSuccess } from "../slices/programSlice";
import { globalGetService } from "../utils/globalApiService";

export const fetchProgramList = () => {
    return async (dispatch) => {
        try {
            dispatch(programDataRequest());
            const response = await globalGetService(`/careerCard`);
            console.log(response.data, 'responses');
            dispatch(programDataSuccess(response.data.data));
        } catch (error) {
            console.error('Error fetching footer data:', error);
            dispatch(programDataFail(error.message));
        }
    };
};