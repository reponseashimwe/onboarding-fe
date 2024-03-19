import { processResume } from "../../Apis/generateObj";
import { useState } from "react";

const CvInfoGenerator = () => {
  const [file, setFile] = useState<File | null>(null); // Explicitly typing file state

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
    } catch (error) {
      console.error("Error processing file:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full hei">
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default CvInfoGenerator;
