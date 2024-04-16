import { careerDataFail, careerDataRequest, careerDataSuccess } from "../slices/careerSlice";
import { globalGetService } from "../utils/globalApiService";

export const fetchCareerList = () => {
    return async (dispatch) => {
        try {
            dispatch(careerDataRequest());
            const response = await globalGetService(`/careerCard`);
            console.log(response.data, 'responses');
            dispatch(careerDataSuccess(response.data.data));
        } catch (error) {
            console.error('Error fetching footer data:', error);
            dispatch(careerDataFail(error.message));
        }
    };
};