import { globalPostService } from "../../utils/globalApiService";


export const adminLogin = async(credentials,next)=>{
    console.log(credentials,'credentials');
try {
  const response=await  globalPostService('/auth/login',credentials);
  return response.data
} catch (error) {
    console.log(error.response.data.message);
   return error 
}
}



export const storeToken = (data) => {
    try {
        const token = JSON.stringify(data);
        localStorage.setItem('accessToken', token);
        console.log('Token stored successfully.');
    } catch (error) {
        console.error('Failed to store token:', error);
        throw new Error('Error storing the token.');
    }
};