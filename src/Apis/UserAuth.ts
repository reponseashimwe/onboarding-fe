import customAxios from "./services/customAxios";

export const registerHr=async(userData:any)=>{
    try{
    const response=await customAxios.post("/auth/register",userData)
    return response.data;
    }
    catch(error:any){
        console.log(error.response.data.error)
        return error.response.data.error;
    }
}

export const loginUser = async (userData:any) => {
    try {
      const response = await customAxios.post("/auth/login", userData);
      const token  = response.data.accessToken;
      localStorage.setItem("token", token); 
      console.log("user:",response.data.accessToken)
      return response.data;
    } catch (error:any) {

        if (error.response && error.response.data) {
            console.log(error.response.data);
            return error.response.data;
          } else {
            return error;
          }
    }
  };