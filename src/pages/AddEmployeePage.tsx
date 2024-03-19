import { Tab } from '@headlessui/react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeSchemaType, employeeSchema } from "../components/validations/user";
import PersonalInfo from '../components/forms/PersonalInfo';
import ProfessionalInfo from '../components/forms/ProfessionalInfo';
import EmployeeDocs from '../components/forms/EmployeeDocs';
import OtherInfo from '../components/forms/OtherInfo';


const AddEmployeePage = () => {
  const [step, setStep] = useState<number>(1);

  // Data object to hold form inputs
  const [formData, setFormData] = useState<EmployeeSchemaType>({
    personalDetails: {
      fullname: '',
      dob: '',
      maritalStatus: '',
      gender: '',
      careerSummary: '',
      nationality: '',
    },
    contactDetails: {
      email: '',
      phoneNumber: '',
    },
    address: {
      country: '',
      city: '',
      otherAddress: '',
    },
    educationalBackground: [], // Initialize as empty array
    experience: [], // Initialize as empty array
    skills: [], // Initialize as empty string or whatever default value you prefer
    certifications: [], // Initialize as empty string or whatever default value you prefer
    languages: [], // Initialize as empty string or whatever default value you prefer
    socialMediaProfiles: [], // Initialize as empty array
    bankInfo: {
      accountHolderName: '',
      accountNumber: '',
      bankName: '',
    },
    employmentDetails: {
      employeeID: '',
      employeeType: '',
      designation: '',
      workingDays: '',
      officeLocation: '',
      joiningDate: '',
      salary: '',
    },
    salarySlip: null,
    appointmentLetter: null,
    experienceLetter: null,
    relievingLetter: null,
    contract: null,
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data: any) => {
    // Merge new form data with existing formData
    setFormData((prevData: any) => ({
      ...prevData,
      ...data
    }));
    
    // For testing purposes
    console.log(formData);
  };

  return (
    <div>
      {step === 1 && <PersonalInfo onSubmit={onSubmit} formData={formData}/>}
      {step === 2 && <ProfessionalInfo onSubmit={onSubmit} formData={formData} />}
      {step === 3 && <EmployeeDocs onSubmit={onSubmit} formData={formData}/>}
      {step === 4 && <OtherInfo onSubmit={onSubmit}  formData={formData}/>}

      {/* Navigation Buttons */}
      <div>
        {step > 1 && (
          <button onClick={handleBack} className='bg-black text-white py-3 px-5'>Back</button>
        )}
        {step < 4 && (
          <button onClick={handleNext} className='bg-[green] text-white py-3 px-5 '>Next</button>
        )}
        {step === 4 && (
          <button type="submit" onClick={() => onSubmit(formData)}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default AddEmployeePage;
