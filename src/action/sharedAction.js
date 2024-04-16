import { socialIconFail, socialIconRequest, socialIconSuccess, termFail, termRequest, termSuccess } from '../slices/sharedSlice';
import { globalDeleteService, globalGetService, globalPostService, globalPutService } from '../utils/globalApiService'

export const fetchSocialData = () => {
    return async (dispatch) => {
        try {
            dispatch(socialIconRequest());
            const response = await globalGetService(`/footer`);
            console.log(response.data, 'responses');
            dispatch(socialIconSuccess(response.data.data));
        } catch (error) {
            console.error('Error fetching footer data:', error);
            dispatch(socialIconFail(error.message));
        }
    };
};


export const postFooterData = async (data) => {
    try {
        const response = await globalPostService('/footer', data);
        return response;
    } catch (error) {
        console.error('Error posting terms:', error);
        throw error;
    }
};


export const updateFooterData = async (data, id) => {
    try {
        const response = await globalPutService(`footer/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error updating footer:', error);
        throw error;
    }
};



export const deleteFooterData = async (id) => {
    try {
        const response = await globalDeleteService(`/footer/${id}`);
        return response;
    } catch (error) {
        console.error('Error deleting footer data:', error);
        throw error;
    }
};

export const fetchTermData = () => {
    return async (dispatch) => {
        try {
            dispatch(termRequest());
            const response = await globalGetService(`/terms`);
            // console.log(response.data.data, 'responses');
            dispatch(termSuccess(response.data.data));
        } catch (error) {
            console.error('Error fetching Term Data:', error);
            dispatch(termFail(error.message));
        }
    };
};

// export const postTermData = (data) => async (dispatch) => {
//     try {
//         const response = await globalPostService('/terms', data);

//         dispatch({
//             type: 'POST_TERM_DATA_SUCCESS',
//             payload: response
//         });

//         return response;

//     } catch (error) {
//         dispatch({
//             type: 'POST_TERM_DATA_FAILURE',
//             error: error.message
//         });

//         throw error;
//     }
// }


export const postTermData = async (data) => {
    try {
        const response = await globalPostService('/terms', data);
        return response;
    } catch (error) {
        console.error('Error posting terms:', error);
        throw error;
    }
};

export const updateTermData = async (data, id) => {
    try {
        const response = await globalPutService(`/terms/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error updating terms:', error);
        throw error;
    }
};

export const deleteTerm = async (id) => {
    try {
        const response = await globalDeleteService(`/terms/${id}`);
        return response;
    } catch (error) {
        console.error('Error deleting Term data:', error);
        throw error;
    }
};


