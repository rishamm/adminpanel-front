import { careerDataFail, careerDataRequest, careerDataSuccess } from "../slices/careerSlice";
import { communityDataFail, communityDataRequest, communityDataSuccess } from "../slices/communitySlice";
import { globalGetService, globalPutService } from "../utils/globalApiService";

// Our Community
export const fetchOurCommunity = () => {
    return async (dispatch) => {
        try {
            dispatch(communityDataRequest());
            const response = await globalGetService(`/community`);
            console.log(response.data, 'responses');
            dispatch(communityDataSuccess(response.data.data));
        } catch (error) {
            console.error('Error fetching Our Community', error);
            dispatch(communityDataFail(error.message));
        }
    };
};

export const updateOurCommunity = async (data, id) => {
    try {
        const response = await globalPutService(`/community/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error updating Our Community:', error);
        throw error;
    }
};

// Community Table