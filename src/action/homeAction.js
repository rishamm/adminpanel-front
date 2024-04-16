import { aboutUsDataFail, aboutUsDataRequest, aboutUsDataSuccess, proffesionalTestimonialsDataFail, proffesionalTestimonialsDataRequest, proffesionalTestimonialsDataSuccess, testimonialsDataFail, testimonialsDataRequest, testimonialsDataSuccess } from "../slices/homeSlice";

import { globalDeleteService, globalGetService, globalPutService, globalPostService } from "../utils/globalApiService";


export const fetchHomeAbout = () => {
    return async (dispatch) => {
        try {
            dispatch(aboutUsDataRequest());
            const response = await globalGetService(`/about`);
            // console.log(response.data, 'responses');
            dispatch(aboutUsDataSuccess(response.data.data));
        } catch (error) {
            console.error('Error Home AboutUs data:', error);
            dispatch(aboutUsDataFail(error.message));
        }
    };
};


export const updateHomeAbout = async (data, id) => {
    try {
        const response = await globalPutService(`about/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error updating Home AboutUs:', error);
        throw error;
    }
};



//// Home testimonials
export const fetchTestimonial = () => {
    return async (dispatch) => {
        try {
            dispatch(testimonialsDataRequest());
            const response = await globalGetService(`/testimonial`);
            console.log(response.data, 'responses');
            dispatch(testimonialsDataSuccess(response.data.data));
        } catch (error) {
            console.error('Error Testimonial data:', error);
            dispatch(testimonialsDataFail(error.message));
        }
    };
};

export const updateTestimonial = async (data, id) => {
    try {
        const response = await globalPutService(`/graducatedTestimonial/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error updating Testimonial:', error);
        throw error;
    }
};


export const deleteTestimonial = async (id) => {
    try {
        const response = await globalDeleteService(`/testimonial/${id}`);
        return response;
    } catch (error) {
        console.error('Error deleting Testiminial data:', error);
        throw error;
    }
};

export const postTestimonial = async (data) => {
    try {
        const response = await globalPostService('/graducatedTestimonial', data);
        return response;
    } catch (error) {
        console.error('Error posting Testimonial:', error);
        throw error;
    }
};


//proffesional testimonial//
export const fetchProffesonalTestimonial = () => {
    return async (dispatch) => {
        try {
            dispatch(proffesionalTestimonialsDataRequest());
            const response = await globalGetService(`/graducatedTestimonial`);
            console.log(response.data.data, 'mmm');
            dispatch(proffesionalTestimonialsDataSuccess(response.data.data));
        } catch (error) {
            console.error('Error Testimonial data:', error);
            dispatch(proffesionalTestimonialsDataFail(error.message));
        }
    };
};



export const updateProffesonalTestimonial = async (data, id) => {
    try {
        const response = await globalPutService(`/graducatedTestimonial/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error updating Proffesonal Testimonial:', error);
        throw error;
    }
};

export const deleteProffesonalTestimonial = async (id) => {
    try {
        const response = await globalDeleteService(`/graducatedTestimonial/${id}`);
        return response.data; // Return only the data from the response
    } catch (error) {
        console.error('Error deleting Professional Testimonial:', error);
        throw error; // Rethrow the error to handle it further if needed
    }
};


export const postProffesonalTestimonial = async (data) => {
    try {
        const response = await globalPostService('/graducatedTestimonial', data);
        return response;
    } catch (error) {
        console.error('Error posting Proffesonal Testimonial:', error);
        throw error;
    }
};




