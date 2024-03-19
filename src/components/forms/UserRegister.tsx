import { Link } from "react-router-dom"
import { useState } from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import InputField from "../../helpers/InputField";
import { registerHr } from "../../Apis/UserAuth";
import {zodResolver} from "@hookform/resolvers/zod"
import { RegisterSchema,SignUpSchemaType } from "../validations/user";
import toast, { Toaster } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import illustration1 from "../../assets/onboarding002.svg"
  
export const getErrorMsg = (error:any) => {
  return (error.message);
// return "you entered a wrong password!"
};

const UserRegister = () => {
  const [loading,setLoading]=useState(false);
  const [pwdOpenEye, setPwdOpenEye] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  // const [formSubmitted,setFormSubmitted]=useState(false)
  const navigate=useNavigate();
  const pwdToggle = () => {
    setPwdOpenEye(!pwdOpenEye);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(RegisterSchema) });
  // const {mutate,isError,isLoading}=useMutation(registerHr,{
  //   onError: (error) => {
  //     setLoading(false); // Reset loading state on error
  //     toast.error("Error creating user");
  //     console.log("the error is ", error);
  //   }
  //   })
  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const user=await registerHr(data);
      if(user.status===200){
        toast.success("HR created successfully!!")
        window.location.href="/login"
      }
    } catch (error) {
      console.log(error)
    } 
    finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex  m-[0] justify-between font-jost overflow-hidden xs:flex-col">
      <div className="w-[50vw] bg-[#307730] h-[100vh] flex items-center justify-center xs:hidden">
        <img className="w-[70%]" src={illustration1} alt="" />
      </div>
      <div className=" h-screen flex items-center flex-col xs:w-screen">
      {/* {isError && <p>Error creating post</p>} */}
        <form
          onSubmit={ handleSubmit(onSubmit)}
          className="px-5 xs:w-[80vw] xs:mx-auto w-[30vw] p-[5px] rounded-md h-[80%] mr-[100px] self-start relative top-[-10px]"
        >
          <div className="flex flex-col -space-y-px rounded-md  shadow-sm ">
            <div className="flex flex-col gap-8 p-[20px]">
              <h1 className="font-bold text-center text-[24px] ">
                Register Now
              </h1>
              <div className="h-[2px] w-full bg-[#eae4e4] rounded-xl flex justify-center ">
                <div className="h-full w-[49px] bg-[#307730]"></div>
              </div>
            </div>
            <div>
              <InputField
                placeholder="eg.John Doe"
                type="text"
                className=" w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("name")}
                {...errors.name && <p className="text-red-500">{errors.name.message}</p>}
              />
            </div>
            <div>
              <InputField
                placeholder="email"
                type="email"
                className=" w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("email")}
                {...errors.email && <p className="text-red-500">{errors.email.message}</p>}
              />
            </div>

            <div>
              <InputField
                placeholder="telephone"
                type="text"
                className=" w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("phone")}
                {...errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              />
            </div>
            <div className=" relative">
              <InputField
                placeholder="Password"
                type={pwdOpenEye ? "text" : "password"}
                className=" w-full rounded-md px-2 py-3  placeholder:text-gray-400 sm:text-[13px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("password")}
                {...errors.password && <p className="text-red-500">{errors.password.message}</p>}
              />
              <div className="ml-[90%] bottom-[57px] relative text-[#a4a3a3]">
                {pwdOpenEye ? (
                  <AiOutlineEye onClick={pwdToggle} />
                ) : (
                  <AiOutlineEyeInvisible onClick={pwdToggle} />
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <h3 className="col-span-2 ">enter organization info</h3>
              <InputField
                placeholder="organization name"
                type="text"
                className=" w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("organizationData.name")}
                {...errors.organizationData?.name && <p className="text-red-500">{errors.organizationData.name.message}</p>}
              />
              <InputField
                placeholder="www.organ.com"
                type="text"
                className=" w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("organizationData.domain")}
                {...errors.organizationData?.domain && <p className="text-red-500">{errors.organizationData.domain.message}</p>}
              />
            </div>
            <div className="flex">
              <label className="flex items-center gap-2 text-[#656565] p-[0px] font-[200]">
                <input type="checkbox" className="rounded border-inherit" />I
                agree to the terms and conditions
              </label>
            </div>
            <div></div>

            <button className="bg-[#307730] w-full text-white self-center py-[10px] rounded-lg text-[16px]">
            {
            loading ? <p className="my-auto"> <BeatLoader color="#fff" /></p> : <p>Register</p>
            }
            </button>
            <Link to="/login" className="text-[#6c6c6c] -[center] flex gap-1">
              don't have an account<p className="text-[#307730]">account?</p>
            </Link>
          </div>
        </form>
        <Toaster
        position="top-right"
        reverseOrder={false}
      />
        {/* <div className="mt-[70px] mr-[20%]">
          <GoogleLogin />
        </div> */}
      </div>
    </div>
  )
}

export default UserRegister