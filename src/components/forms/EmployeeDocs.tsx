import { useEffect } from "react";
import { DropzoneOptions, useDropzone, FileRejection } from "react-dropzone";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeSchema, EmployeeSchemaType } from "../validations/user";
import Avatar from "../../assets/upload.svg";

type EmployeeDocsProps = {
  onNext: (data: EmployeeSchemaType) => void;
  formData: any;
  onBack: () => void; // Add a callback function for the "Back" button
};

type ImageField = "appointmentLetter" | "salarySlip" | "relievingLetter" | "experienceLetter";

const EmployeeDocs: React.FC<EmployeeDocsProps> = ({ onNext, formData, onBack }) => {
  const [appointmentLetter, setAppointmentLetter] = useState<string | null>(null);
  const [salarySlip, setSalarySlip] = useState<string | null>(null);
  const [relievingLetter, setRelievingLetter] = useState<string | null>(null);
  const [experienceLetter, setExperienceLetter] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<any>({
    resolver: zodResolver(employeeSchema),
    defaultValues: formData.employeeDocs
  });
  //@ts-ignore
  const onDrop: DropzoneOptions["onDrop"] = async (acceptedFiles, fileRejections: FileRejection[], event: React.DragEvent<HTMLDivElement>) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData: any = reader.result;

        switch (file.name) {
          case "appointmentLetter":
            setAppointmentLetter(imageData);
            break;
          case "salarySlip":
            setSalarySlip(imageData);
            break;
          case "relievingLetter":
            setRelievingLetter(imageData);
            break;
          case "experienceLetter":
            setExperienceLetter(imageData);
            break;
          default:
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    reset(formData);
  }, [formData]);

  const onSubmit: SubmitHandler<EmployeeSchemaType> = (data) => {
    console.log("data", data);
    onNext(data);
  };

  return (
    <section className="mx-auto w-[80%] font-jost pt-4">
      <form
        className="flex flex-col w-full justify-center pl-[10%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="rounded-lg p-[5px]">
          <div className="flex w-full justify-between mb-10">
            <div className="w-[46%] border-[1px]">
              <label htmlFor="appointmentLetter">Appointment Letter</label>
              <div className="relative w-[60px] h-[60px]">
                <img
                  src={appointmentLetter || Avatar}
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                />
                <input
                  {...register("appointmentLetter")}
                  //@ts-ignore
                  onChange={(e) => onDrop(e.target.files, [], e)}
                  type="file"
                />
              </div>
            </div>
            <div className="w-[46%] border-[1px]">
              <label htmlFor="salarySlip">Upload Salary Slip</label>
              <div className="relative w-[60px] h-[60px]">
                <img
                  src={salarySlip || Avatar}
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                />
                <input
                  {...register("salarySlip")}
                  //@ts-ignore
                  onChange={(e) => onDrop(e.target.files, [], e)}
                  type="file"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between pb-10">
            <div className="w-[46%] border-[1px]">
              <label htmlFor="relievingLetter">Upload Relieving Letter</label>
              <div className="relative w-[60px] h-[60px]">
                <img
                  src={relievingLetter || Avatar}
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                />
                <input
                  {...register("relievingLetter")}
                  //@ts-ignore
                  onChange={(e) => onDrop(e.target.files, [], e)}
                  type="file"
                />
              </div>
            </div>
            <div className="w-[46%] border-[1px]">
              <label htmlFor="experienceLetter">Upload Experience Letter</label>
              <div className="relative w-[60px] h-[60px]">
                <img
                  src={experienceLetter || Avatar}
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                />
                <input
                  {...register("experienceLetter")}
                  //@ts-ignore
                  onChange={(e) => onDrop(e.target.files, [], e)}
                  type="file"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onBack} className="bg-black text-white py-2 px-4 rounded">
              Back
            </button>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EmployeeDocs;
