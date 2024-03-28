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