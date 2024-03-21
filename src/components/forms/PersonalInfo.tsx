import { useEffect } from "react";
import InputField from "../../helpers/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeSchemaType, employeeSchema } from "../validations/user";

interface PersonalInfoProps {
  onNext: (data: EmployeeSchemaType) => void;
  formData: EmployeeSchemaType;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onNext, formData }) => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<EmployeeSchemaType>({
    resolver: zodResolver(employeeSchema),
    defaultValues: formData,
  });

  useEffect(() => {
    reset(formData);
  }, [formData]);
  const onSubmit = (data: EmployeeSchemaType) => {
    onNext(data);
  };

  return (
    <section className="mx-auto w-[80%] font-jost pt-4">
      <form
        className="flex flex-col w-full justify-center pl-[10%]"
        onSubmit={handleSubmit(onSubmit)}
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
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="telephone number"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("contactDetails.phoneNumber")}
                // error={errors?.personalDetails?.nationality}
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="enter country name"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("address.country")}
                // error={errors?.personalDetails?.nationality}
              />
            </div>
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="enter city name"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("address.city")}
                // error={errors?.personalDetails?.nationality}
              />
            </div>
            <div className="w-[43%]">
              <InputField
                type="text"
                placeholder="other cities"
                className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register("address.otherAddress")}
                // error={errors?.personalDetails?.nationality}
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;
