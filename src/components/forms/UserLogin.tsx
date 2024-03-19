import { Link } from "react-router-dom"
import { useState } from "react";
import InputField from "../../helpers/InputField";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { loginUser } from "../../Apis/UserAuth";
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema,SignInSchemaType } from "../validations/user";
import { BeatLoader } from "react-spinners";
import toast,{Toaster} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import illustration1 from "../../assets/onboarding002.svg"


const UserLogin = () => {
  const [pwdOpenEye, setPwdOpenEye] = useState(false);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();


  const pwdToggle = () => {
    setPwdOpenEye(!pwdOpenEye);
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchemaType>({ resolver: zodResolver(loginSchema) });
  // const {mutate,isLoading}=useMutation(loginUser)

  const onSubmit=async(data:any)=>{
    setLoading(true)
    try{
      const user=await loginUser(data);
      console.log("user===",user);
      if(user.status===200){
        toast.success("user logged in successfully!!");
        window.location.href='/dashboard';
      }
    }
    catch(error){
      console.log("this is the error",error)
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div className="flex  items-center  m-[0] justify-between font-jost overflow-hidden xs:flex-col">
    <div className="w-[50vw] bg-[#307730] h-[100vh] flex items-center justify-center xs:hidden">
      <img className=" " src={illustration1} alt="" />
    </div>
    <div className=" h-[90vh] flex items-center flex-col xs:w-screen">
      <form
        onSubmit={(event) => {
          handleSubmit(onSubmit)(event);
        }}
        className="px-5 xs:w-[80vw] xs:mx-auto w-[30vw] p-[5px] rounded-md h-[80%] mr-[100px] self-start relative top-[-10px]"
      >
        <div className="flex flex-col -space-y-px rounded-md shadow-sm ">
          <div className="flex flex-col gap-8 p-[20px]">
            <h1 className="font-bold text-center text-[24px] ">
              Login first to Continue 
            </h1>
            <div className="h-[2px] w-full bg-[#eae4e4] rounded-xl flex justify-center ">
              <div className="h-full w-[49px] bg-[#307730]"></div>
            </div>
          </div>
          <div>
            <InputField
              placeholder="email"
              type="text"
              className=" w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
              {...register("email")}
              {...errors.email && <p className="text-red-500">{errors.email.message}</p>}
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
          <div className="flex">
            <label className="flex items-center gap-2 text-[#656565] p-[10px] font-[200]">
              <input type="checkbox" className="rounded border-inherit" />I
              agree to the terms and conditions
            </label>
          </div>

          <button className="bg-[#307730] w-full text-white self-center py-[10px] rounded-lg text-[16px]">
          {
            loading ? <p className="my-auto"> <BeatLoader color="#fff" /></p> : <p>Sign In</p>
            }
          </button>
          <Link to="/register" className="text-[#6c6c6c] -[center] flex gap-1">
            don't have an acount? <p className="text-[#307730]">please register</p>
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

export default UserLogin