import { newsDataFail, newsDataRequest, newsDataSuccess } from "../slices/newsSlice";
import { globalGetService } from "../utils/globalApiService";

export const fetchNewsList = () => {
    return async (dispatch) => {
        try {
            dispatch(newsDataRequest());
            const response = await globalGetService(`/news`);
            console.log(response.data, 'responses');
            dispatch(newsDataSuccess(response.data.data));
        } catch (error) {
            console.error('Error News List data:', error);
            dispatch(newsDataFail(error.message));
        }
    };
};