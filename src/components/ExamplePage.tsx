import React, { useState } from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

type PersonalDetailsFormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

type ProfessionalInfoFormValues = {
  company: string;
  position: string;
  experience: string;
};

type SkillsFormValues = {
  skills: { name: string }[];
};

type FormData = PersonalDetailsFormValues & ProfessionalInfoFormValues & SkillsFormValues;

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { register, handleSubmit, formState: { errors }, control, getValues } = useForm<FormData>({ mode: 'onTouched' });
  const { fields: skillsFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: 'skills',
  });
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormData({ ...formData, ...data });
    console.log('Form submitted:', { ...formData, ...data });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className={currentStep > 1 ? 'hidden' : ''}>
        <h2 className="text-xl font-bold mb-4">Step 1: Personal Details</h2>
        <input type="text" {...register('firstName', { required: 'First name is required' })} placeholder="First Name" className="w-full border rounded-md p-2 mb-2" />
        {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
        <input type="text" {...register('lastName', { required: 'Last name is required' })} placeholder="Last Name" className="w-full border rounded-md p-2 mb-2" />
        {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
        <input type="email" {...register('email', { required: 'Email is required' })} placeholder="Email" className="w-full border rounded-md p-2 mb-4" />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)} className={currentStep !== 2 ? 'hidden' : ''}>
        <h2 className="text-xl font-bold mb-4">Step 2: Professional Information</h2>
        <input type="text" {...register('company')} placeholder="Company" className="w-full border rounded-md p-2 mb-2" />
        <input type="text" {...register('position')} placeholder="Position" className="w-full border rounded-md p-2 mb-2" />
        <input type="text" {...register('experience')} placeholder="Experience" className="w-full border rounded-md p-2 mb-4" />
        <button type="button" onClick={handleBack} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md">Back</button>
        <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)} className={currentStep !== 3 ? 'hidden' : ''}>
        <h2 className="text-xl font-bold mb-4">Step 3: Skills</h2>
        {skillsFields.map((skill, index) => (
          <div key={skill.id} className="flex items-center mb-2">
            <input
              type="text"
              {...register(`skills.${index}.name` as const)}
              defaultValue={skill.name}
              placeholder="Skill Name"
              className="w-full border rounded-md p-2"
            />
            <button type="button" onClick={() => removeSkill(index)} className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => appendSkill({ name: '' })} className="bg-green-500 text-white px-4 py-2 rounded-md">Add Skill</button>
        <button type="button" onClick={handleBack} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md">Back</button>
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>

      <div className="mt-8">
        Step {currentStep} of 3
      </div>
    </div>
  );
};

export default MultiStepForm;
