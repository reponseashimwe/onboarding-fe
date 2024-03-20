import { processResume } from "../../Apis/generateObj";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CvInfoGenerator = () => {
  const [file, setFile] = useState<File | null>(null); // Explicitly typing file state
  const navigate=useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]; // Accessing files array safely
    setFile(uploadedFile || null); 
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        console.error("No file selected.");
        return;
      }
      const response = await processResume(file);

      console.log("Extracted information:", response.data);
 
      localStorage.setItem('cvInfo', JSON.stringify(response.data));
      navigate('/dashboard/addEmployee');
    } catch (error:any) {
      console.error("Error processing file:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-around w-full h-[80vh]">
      <h1 className="text-3xl font-bold mb-6">Upload Your CV</h1>
      <input type="file" accept=".pdf" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleUpload} className="bg-[#307730] text-white px-4 py-2 rounded hover:bg-[#307730]">
        Upload
      </button>
      <p className="mt-4 text-gray-600">Please upload your CV before adding an employee.</p>
    </div>
  );
};

export default CvInfoGenerator;
