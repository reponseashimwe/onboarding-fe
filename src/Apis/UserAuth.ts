import customAxios from "./services/customAxios";
import toast from "react-hot-toast";
export const registerHr=async(userData:any)=>{
    try{
    const response=await customAxios.post("/auth/register",userData)
    return response;
    }
    catch(error:any){
        toast.error(error.response.data.error)
        return error.response.data.error;
    }
}

export const loginUser = async (userData:any) => {
    try {
      const response = await customAxios.post("/auth/login", userData);
      const token  = response.data.accessToken;
      localStorage.setItem("token", token); 
      toast.success("user logged in successfully")
      return response.data;
    } catch (error:any) {

        if (error.response && error.response.data) {
            toast.error(error.response.data.error);
            return error.response.data;
          } else {
            return error;
          }
    }
  };