import { useEffect } from "react";
import InputField from "../../helpers/InputField";
import { useForm,SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeSchemaType, employeeSchema } from "../validations/user";

type ProfessionalInfoProps = {
  onSubmit: SubmitHandler<any>; // Adjust the type of onSubmit as needed
  formData: any; 
};

const ProfessionalInfo:React.FC<ProfessionalInfoProps> = ({onSubmit,formData}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<any>({ 
    resolver: zodResolver(employeeSchema),
    defaultValues: formData.professionalInfo
  });
  useEffect(() => {
    // Reset form data when formData prop changes
    reset(formData);
  }, [formData]);

  return (
    <section className="mx-auto w-[80%] font-jost pt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full justify-center pl-[10%]">
          <div className="rounded-lg p-[5px]">
            <div className="flex justify-between items-center">
              <div className="w-[46%]">
                <InputField
                  type="text"
                  placeholder="Employee ID"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  {...register("employmentDetails.employeeID")}
                  // error={errors?.employmentDetails?.employeeID?.message}
                />
              </div>
              <div className="w-[46%]">
                <InputField
                  type="text"
                  placeholder="Designation"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  {...register("employmentDetails.designation")}
                  // error={errors?.employmentDetails?.designation?.message}
                />
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="w-[46%]">
                <InputField
                  type="text"
                  placeholder="Working Days"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  {...register("employmentDetails.workingDays")}
                  // error={errors?.employmentDetails?.workingDays?.message}
                />
              </div>
              <div className="w-[46%]">
                <InputField
                  type="text"
                  placeholder="Office Location"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  {...register("employmentDetails.officeLocation")}
                  // error={errors?.employmentDetails?.officeLocation?.message}
                />
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="w-[46%]">
                <InputField
                  type="date"
                  placeholder="Joining Date"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  {...register("employmentDetails.joiningDate")}
                  // error={errors?.employmentDetails?.joiningDate?.message}
                />
              </div>
              <div className="w-[46%]">
                <InputField
                  type="text"
                  placeholder="Salary"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  {...register("employmentDetails.salary")}
                  // error={errors?.employmentDetails?.salary?.message}
                />
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
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfessionalInfo;
