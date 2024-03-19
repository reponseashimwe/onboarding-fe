import { useEffect } from 'react';
import InputField from '../../helpers/InputField';
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeSchemaType, employeeSchema } from "../validations/user";

type OtherInfoProps = {
  onSubmit: SubmitHandler<any>; // Adjust the type of onSubmit as needed
  formData: any; 
};

const OtherInfo:React.FC<OtherInfoProps>= ({onSubmit,formData}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control // Add control from useForm to useFieldArray
  } = useForm<any>({
     resolver: zodResolver(employeeSchema),
     defaultValues: formData.otherInfo
    });
    useEffect(() => {
      // Reset form data when formData prop changes
      reset(formData);
    }, [formData]);

  // useFieldArray for arrays or arrays of objects
  const { fields: educationalBackgroundFields, append: appendEduBackground, remove: removeEduBackground } = useFieldArray({
    control,
    name: "educationalBackground"
  });

  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: "experience"
  });

  const { fields: socialMediaProfilesFields, append: appendSocialMediaProfile, remove: removeSocialMediaProfile } = useFieldArray({
    control,
    name: "socialMediaProfiles"
  });

  return (
    <section className="mx-auto w-[80%] font-jost pt-4">
    <form className="flex flex-col w-full justify-center pl-[10%]"
    onSubmit={handleSubmit(onSubmit)}
    >
      <div className="rounded-lg p-[5px]">
        {/* Educational Background */}
        <div className="mb-4 flex flex-wrap">
          <h2 className="text-lg font-bold mb-2 w-full">Educational Background</h2>
          {educationalBackgroundFields.map((eduBackground, index) => (
            <div key={eduBackground.id} className="w-full grid grid-cols-2 grid-rows-3 gap-4">
              <InputField
                type="text"
                placeholder="School Name"
                className="w-full rounded-md placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register(`educationalBackground.${index}.schoolName`)}
              />
              <InputField
                type="text"
                placeholder="Period"
                className="w-full rounded-md placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register(`educationalBackground.${index}.period`)}
              />
              <InputField
                type="text"
                placeholder="Details"
                className="w-full rounded-md placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register(`educationalBackground.${index}.details`)}
              />
              <button type="button" onClick={() => removeEduBackground(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => appendEduBackground({} as EmployeeSchemaType['educationalBackground'][0])}>Add Educational Background</button>
        </div>

        {/* Experience */}
        <div className="mb-4 flex flex-wrap">
          <h2 className="text-lg font-bold mb-2 w-full">Experience</h2>
          {experienceFields.map((experience, index) => (
            <div key={experience.id} className="w-full grid grid-cols-2 gap-4">
              <InputField
                type="text"
                placeholder="Institution"
                className="w-full rounded-md placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register(`experience.${index}.institution`)}
              />
              <InputField
                type="text"
                placeholder="Period"
                className="w-full rounded-md placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register(`experience.${index}.period`)}
              />
              <InputField
                type="text"
                placeholder="Title"
                className="w-full rounded-md placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register(`experience.${index}.title`)}
              />
              <InputField
                type="text"
                placeholder="Details"
                className="w-full rounded-md placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register(`experience.${index}.details`)}
              />
              <button type="button" onClick={() => removeExperience(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => appendExperience({} as EmployeeSchemaType['experience'][0])}>Add Experience</button>
        </div>

        {/* Social Media Profiles */}
        <div className="mb-4 ">
          <h2 className="text-lg font-bold mb-2">Social Media Profiles</h2>
          {socialMediaProfilesFields.map((socialMediaProfile, index) => (
            <div key={socialMediaProfile.id} className="flex gap-4 w-full">
              <InputField
                type="text"
                placeholder="Media Name"
                className="w-1/2 rounded-md placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register(`socialMediaProfiles.${index}.mediaName`)}
              />
              <InputField
                type="text"
                placeholder="URL"
                className="w-1/2 rounded-md placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                {...register(`socialMediaProfiles.${index}.url`)}
              />
              <button type="button" onClick={() => removeSocialMediaProfile(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => appendSocialMediaProfile({} as EmployeeSchemaType['socialMediaProfiles'][0])}>Add Social Media Profile</button>
        </div>
        {/* Bank Info */}
        <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Bank Info</h2>
            <InputField
              type="text"
              placeholder="Account Holder Name"
              {...register(`bankInfo.accountHolderName`)}
              //@ts-ignore
              error={errors?.bankInfo?.accountHolderName}
            />
            <InputField
              type="text"
              placeholder="Account Number"
              {...register(`bankInfo.accountNumber`)}
              //@ts-ignore
              error={errors?.bankInfo?.accountNumber}
            />
            <InputField
              type="text"
              placeholder="Bank Name"
              {...register(`bankInfo.bankName`)}
              //@ts-ignore
              error={errors?.bankInfo?.bankName}
            />
          </div>

        {/* Remaining Fields */}
        {/* Add remaining fields here similarly using InputField and register */}

        {/* Form Actions */}
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-white text-[#307730] border-[#307730] border rounded-md px-4 py-2"
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
  
  export default OtherInfo;
