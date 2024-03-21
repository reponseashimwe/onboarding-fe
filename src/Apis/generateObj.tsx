import customAxios from "./services/customAxios";

export const processResume = async (pdfFile: File) => {
  try {
    // Create FormData object
    const formData = new FormData();
    formData.append("pdfFile", pdfFile);

    // Make a POST request to the server endpoint for processing resumes
    const response = await customAxios.post("/processResume", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Return the response from the server
    return response.data;
  } catch (error:any) {
    // Handle any errors that occur during the request
    console.error("Error processing resume:", error);
    throw new Error("Error processing resume: " + error.message);
  }
};