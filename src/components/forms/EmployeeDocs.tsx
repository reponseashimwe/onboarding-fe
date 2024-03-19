import { useEffect } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {employeeSchema,EmployeeSchemaType } from "../validations/user";
import Avatar from "../../assets/upload.svg";

type EmployeeDocsProps = {
  onSubmit: SubmitHandler<any>; // Adjust the type of onSubmit as needed
  formData: any; 
};


const EmployeeDocs:React.FC<EmployeeDocsProps>= ({onSubmit,formData}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<any>({ 
    resolver: zodResolver(employeeSchema),
    defaultValues: formData.employeeDocs
  });

  const onDrop: DropzoneOptions["onDrop"] = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData: any = reader.result;
        setSelectedImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    // Reset form data when formData prop changes
    reset(formData);
  }, [formData]);

  //@ts-ignore
  const { getRootProps: getRootPropsAppointment, getInputProps: getInputPropsAppointment } = useDropzone({ onDrop, accept: "image/*" } as DropzoneOptions);
  //@ts-ignore
  const { getRootProps: getRootPropsSalary, getInputProps: getInputPropsSalary } = useDropzone({ onDrop, accept: "image/*" } as DropzoneOptions);
  //@ts-ignore                                                                              
  const { getRootProps: getRootPropsRelieving, getInputProps: getInputPropsRelieving } = useDropzone({ onDrop, accept: "image/*" } as DropzoneOptions);
  //@ts-ignore
  const { getRootProps: getRootPropsExperience, getInputProps: getInputPropsExperience } = useDropzone({ onDrop, accept: "image/*" } as DropzoneOptions);

  return (
    <section className="mx-auto w-[80%] font-jost pt-4">
      <form className="flex flex-col w-full justify-center pl-[10%]"
      onSubmit={handleSubmit(onSubmit)}
       >
        <div className="rounded-lg p-[5px]">
          <div className="flex w-full justify-between mb-10">
            <div className="w-[46%] border-[1px]">
              <label htmlFor="appointmentLetter">Appointment Letter</label>
              <div className="relative w-[60px] h-[60px] " {...getRootPropsAppointment()}>
                <img
                  src={selectedImage || Avatar}
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                />
                <input {...getInputPropsAppointment()} {...register("appointmentLetter")} />
              </div>
              {/* {errors.appointmentLetter && <p>{errors.appointmentLetter.message}</p>} */}
            </div>
            <div className="w-[46%] border-[1px]">
              <label htmlFor="salarySlip">Upload Salary Slip</label>
              <div className="relative w-[60px] h-[60px]" {...getRootPropsSalary()}>
                <img
                  src={selectedImage || Avatar}
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                />
                <input {...getInputPropsSalary()} {...register("salarySlip")} />
              </div>
              {/* {errors.salarySlip && <p>{errors.salarySlip.message}</p>} */}
            </div>
          </div>
          <div className="flex w-full justify-between pb-10">
            <div className="w-[46%] border-[1px]">
              <label htmlFor="relievingLetter">Upload Relieving Letter</label>
              <div className="relative w-[60px] h-[60px]" {...getRootPropsRelieving()}>
                <img
                  src={selectedImage || Avatar}
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                />
                <input {...getInputPropsRelieving()} {...register("relievingLetter")} />
              </div>
              {/* {errors.relievingLetter && <p>{errors.relievingLetter.message}</p>} */}
            </div>
            <div className="w-[46%] border-[1px]">
              <label htmlFor="experienceLetter">Upload Experience Letter</label>
              <div className="relative w-[60px] h-[60px] " {...getRootPropsExperience()}>
                <img
                  src={selectedImage || Avatar}
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                />
                <input {...getInputPropsExperience()} {...register("experienceLetter")} />
              </div>
              {/* {errors.experienceLetter && <p>{errors.experienceLetter.message}</p>} */}
            </div>
          </div>
          <div className="w-[30%] flex justify-between">
            <button
              type="button"
              className="bg-[white] w-[100px] h-[40px] text-[#307730] border-[#307730] rounded-md border-[1px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#307730] text-[white] w-[100px] h-[40px] rounded-md flex items-center justify-center"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EmployeeDocs;
