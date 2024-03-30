import client from "./client";

export const createUser = async (userInfo) => {
    try{
        const { data } = await client.post('/user/Sign-up', userInfo)
        return data;
    }catch(error){
        const { response } = error
        if(response?.data) return response.data;
        
        return {error: error.message || error};
    }
}
export const verifyUserEmail = async (userInfo) => {
    try{
        const { data } = await client.post('/user/verify-email', userInfo)
        return data;
    }catch(error){
        const { response } = error
        if(response?.data) return response.data;
        
        return {error: error.message || error};
    }
}
export const signInUser = async (userInfo) => {
    try{
        const { data } = await client.post('/user/Sign-in', userInfo)
        return data;
    }catch(error){
        const { response } = error
        if(response?.data) return response.data;
        
        return {error: error.message || error};
    }
}