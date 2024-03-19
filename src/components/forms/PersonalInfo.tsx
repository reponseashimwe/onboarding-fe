import { useEffect } from "react";
import Avatar from "../../assets/avatar.svg";
import InputField from "../../helpers/InputField";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useForm,SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeSchemaType, employeeSchema } from "../validations/user";
import { Link } from "react-router-dom";

interface PersonalInfoProps {
  onSubmit: SubmitHandler<EmployeeSchemaType>;
  formData: EmployeeSchemaType;
}


const PersonalInfo:React.FC<PersonalInfoProps> = ({onSubmit,formData}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EmployeeSchemaType>({
    resolver: zodResolver(employeeSchema),
    defaultValues: formData
  });

  // useEffect(() => {
  //   // Reset form data when formData prop changes
  //   console.log(formData)
  //   reset(formData);
  // }, [formData]);
  console.log(formData)

  return (
    <section className="mx-auto w-[80%] font-jost pt-4">
      <form
        className="flex flex-col w-full justify-center pl-[10%]"
        onSubmit={handleSubmit(onSubmit)}
        // encType="multipart/form-data"
      >
        <div className="rounded-lg p-[5px]">
          <div className="flex justify-between">
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="enter full name"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("personalDetails.fullname")}
                // {error={errors?.personalDetails?.fullname}
              />
            </div>
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="email"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("contactDetails.email")}
                // error={errors?.contactDetails?.email}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[43%]">
              <InputField
                type="date"
                placeholder="date of birth"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("personalDetails.dob")}
                // error={errors?.personalDetails?.dob}
              />
            </div>
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="marital status"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("personalDetails.maritalStatus")}
                // error={errors?.personalDetails?.maritalStatus}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="gender"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("personalDetails.gender")}
                // error={errors?.personalDetails?.gender}
              />
            </div>
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="career summary"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("personalDetails.careerSummary")}
                // error={errors?.personalDetails?.careerSummary}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="nationality"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("personalDetails.nationality")}
                // error={errors?.personalDetails?.nationality}
              />
            </div>
          </div>
        </div>
        <div className="w-[30%]  flex justify-between">
          <button
            type="button"
            className="bg-[white] w-[100px] h-[40px] text-[#307730] border-[#307730] rounded-md border-[1px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#307730] text-[white] w-[100px] h-[40px] rounded-md flex items-center justify-center "
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;
