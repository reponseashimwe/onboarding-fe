import { useEffect, useState } from "react";
import { EmployeeSchemaType } from "../components/validations/user";
import PersonalInfo from "../components/forms/PersonalInfo";
import ProfessionalInfo from "../components/forms/ProfessionalInfo";
import EmployeeDocs from "../components/forms/EmployeeDocs";
import OtherInfo from "../components/forms/OtherInfo";
import profile from "../assets/profile.svg";
import profession from "../assets/professional.svg";
import document from "../assets/Document.svg";
import account from "../assets/account.svg";

const activeLinkStyle: React.CSSProperties = {
  color: "white",
};
const AddEmployeePage = () => {
  const [step, setStep] = useState<number>(1);

  // Data object to hold form inputs
  const [formData, setFormData] = useState<EmployeeSchemaType>({
    personalDetails: {
      fullname: "",
      dob: "",
      maritalStatus: "",
      gender: "",
      careerSummary: "",
      nationality: "",
    },
    contactDetails: {
      email: "",
      phoneNumber: "",
    },
    address: {
      country: "",
      city: "",
      otherAddress: "",
    },
    educationalBackground: [], // Initialize as empty array
    experience: [], // Initialize as empty array
    skills: [], // Initialize as empty string or whatever default value you prefer
    certifications: [], // Initialize as empty string or whatever default value you prefer
    languages: [], // Initialize as empty string or whatever default value you prefer
    socialMediaProfiles: [], // Initialize as empty array
    bankInfo: {
      accountHolderName: "",
      accountNumber: "",
      bankName: "",
    },
    employmentDetails: {
      employeeID: "",
      employeeType: "",
      designation: "",
      workingDays: "",
      officeLocation: "",
      joiningDate: "",
      salary: "",
    },
    salarySlip: null,
    appointmentLetter: null,
    experienceLetter: null,
    relievingLetter: null,
    contract: null,
  });

  const handleNext = (data: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      ...data,
    }));

    if (step < 4) {
      setStep((prevStep) => prevStep + 1);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleTabClick = (clickedStep: number) => {
    setStep(clickedStep);
  };
  useEffect(() => {
    const cvInfo = localStorage.getItem("cvInfo");
    console.log(cvInfo);
    setFormData(cvInfo as unknown as EmployeeSchemaType);
  }, [formData]);

  return (
    <div className="container mx-auto p-6">
      <div className="form-container max-w-full mx-auto">
        {/* Step Counter */}
        <nav className="py-3 border-b-[1px] border-[#d8d6d6]">
          <ul className="flex justify-around items-center">
            <li
              onClick={() => handleTabClick(1)}
              className={step === 1 ? "active" : ""}
            >
              <div
                className="flex flex-col items-center cursor-pointer"
                style={activeLinkStyle}
              >
                <img src={profile} alt="Profile" className="h-5 w-5" />
                <span className="text-black">Personal Information</span>
              </div>
            </li>
            <li
              onClick={() => handleTabClick(2)}
              className={step === 2 ? "active" : ""}
            >
              <div
                className="flex flex-col items-center cursor-pointer"
                style={activeLinkStyle}
              >
                <img src={profession} alt="Profession" className="h-5 w-5" />
                <span className="text-black">Professional Information</span>
              </div>
            </li>
            <li
              onClick={() => handleTabClick(3)}
              className={step === 3 ? "active" : ""}
            >
              <div
                className="flex flex-col items-center cursor-pointer"
                style={activeLinkStyle}
              >
                <img src={document} alt="Document" className="h-5 w-5" />
                <span className="text-black">Documents</span>
              </div>
            </li>
            <li
              onClick={() => handleTabClick(4)}
              className={step === 4 ? "active" : ""}
            >
              <div
                className="flex flex-col items-center cursor-pointer"
                style={activeLinkStyle}
              >
                <img src={account} alt="Account" className="h-5 w-5" />
                <span className="text-black">Account Access</span>
              </div>
            </li>
          </ul>
        </nav>
        <div className="text-right text-gray-500 mb-4">Step {step} / 4</div>

        {step === 1 && <PersonalInfo onNext={handleNext} formData={formData} />}
        {step === 2 && (
          <ProfessionalInfo
            onNext={handleNext}
            formData={formData}
            onBack={handleBack}
          />
        )}
        {step === 3 && (
          <EmployeeDocs
            onNext={handleNext}
            formData={formData}
            onBack={handleBack}
          />
        )}
        {step === 4 && (
          <OtherInfo
            onNext={handleNext}
            formData={formData}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default AddEmployeePage;
