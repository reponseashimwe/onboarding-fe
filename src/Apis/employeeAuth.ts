import customAxios from "./services/customAxios";

const token=localStorage.getItem('token') || '';

export const createEmployee=async(employeeData:any)=>{
    try{
    const response=await customAxios.post("/users",employeeData,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
    return response.data
}
catch(error:any){
    return error.response.data.error;
}
}

