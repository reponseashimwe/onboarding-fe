import Avatar from "../../assets/avatar.svg"

const EmployeeDocs = () => {
  return (
<div className="mx-auto w-[80%] font-jost pt-4">
        <form
          className=" flex flex-col w-full justify-center pl-[10%]"
          // onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          {/* {loading ? ( 
            <div className="flex justify-center items-center w-full h-[60vh]">
          <CircleLoader color="#5157E0" />
          </div>
          ) : ( */}
            <div className="rounded-lg p-[5px]">
              <div className="flex w-full justify-between mb-10">
              <div className="w-[46%] border-[1px]">
                <label htmlFor="appointment leter">appointment letter</label>
                <div
                  className="relative w-[60px] h-[60px]  border-[1px] border-[#307730]"
                  // {...getRootProps()}
                >
                  <img
                    // src={selectedImage || watch("profilePic") || Avatar}
                    src={Avatar}
                    alt="User Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* <input {...getInputProps()} /> */}
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 p-1 bg-white rounded-full cursor-pointer"
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.6665 1.33333C8.6665 0.597333 9.21717 0 9.89717 0H18.1025C18.7825 0 19.3332 0.597333 19.3332 1.33333C19.3332 2.06933 18.7825 2.66667 18.1025 2.66667H9.89717C9.21717 2.66667 8.6665 2.06933 8.6665 1.33333ZM11.0372 24H16.9625C21.1238 24 23.2052 24 24.6998 23.0373C25.3429 22.6239 25.8983 22.0879 26.3345 21.46C27.3332 20.02 27.3332 18.0133 27.3332 14C27.3332 9.98667 27.3332 7.98133 26.3332 6.54C25.8975 5.91215 25.3425 5.37619 24.6998 4.96267C23.2052 4 21.1238 4 16.9625 4H11.0372C6.87584 4 4.7945 4 3.29984 4.96267C2.6572 5.37622 2.10222 5.91218 1.6665 6.54C0.666504 7.98 0.666504 9.98667 0.666504 13.9973V14C0.666504 18.0133 0.666504 20.0187 1.66517 21.46C2.09717 22.084 2.65184 22.62 3.29984 23.0373C4.7945 24 6.87584 24 11.0372 24ZM8.44384 14C8.44384 11.04 10.9318 8.64267 13.9998 8.64267C17.0678 8.64267 19.5558 11.0413 19.5558 14C19.5558 16.9587 17.0665 19.3573 13.9998 19.3573C10.9318 19.3573 8.44384 16.9573 8.44384 14ZM10.6665 14C10.6665 12.224 12.1598 10.7867 13.9998 10.7867C15.8398 10.7867 17.3332 12.2253 17.3332 14C17.3332 15.7747 15.8398 17.2133 13.9998 17.2133C12.1598 17.2133 10.6665 15.7747 10.6665 14ZM22.1478 8.64267C21.5345 8.64267 21.0372 9.12267 21.0372 9.71467C21.0372 10.3053 21.5345 10.7853 22.1478 10.7853H22.8892C23.5025 10.7853 23.9998 10.3053 23.9998 9.71467C23.9998 9.12267 23.5025 8.64267 22.8892 8.64267H22.1478Z"
                        fill="#242760"
                        fillOpacity="0.81"
                      />
                    </svg>
                  </label>
                </div>
                </div>
                <div className="w-[46%] border-[1px]">
                <label htmlFor="appointment leter">upload salary slip</label>
                <div
                  className="relative w-[60px] h-[60px]  border-[1px] border-[#307730]"
                  // {...getRootProps()}
                >
                  <img
                    // src={selectedImage || watch("profilePic") || Avatar}
                    src={Avatar}
                    alt="User Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* <input {...getInputProps()} /> */}
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 p-1 bg-white rounded-full cursor-pointer"
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.6665 1.33333C8.6665 0.597333 9.21717 0 9.89717 0H18.1025C18.7825 0 19.3332 0.597333 19.3332 1.33333C19.3332 2.06933 18.7825 2.66667 18.1025 2.66667H9.89717C9.21717 2.66667 8.6665 2.06933 8.6665 1.33333ZM11.0372 24H16.9625C21.1238 24 23.2052 24 24.6998 23.0373C25.3429 22.6239 25.8983 22.0879 26.3345 21.46C27.3332 20.02 27.3332 18.0133 27.3332 14C27.3332 9.98667 27.3332 7.98133 26.3332 6.54C25.8975 5.91215 25.3425 5.37619 24.6998 4.96267C23.2052 4 21.1238 4 16.9625 4H11.0372C6.87584 4 4.7945 4 3.29984 4.96267C2.6572 5.37622 2.10222 5.91218 1.6665 6.54C0.666504 7.98 0.666504 9.98667 0.666504 13.9973V14C0.666504 18.0133 0.666504 20.0187 1.66517 21.46C2.09717 22.084 2.65184 22.62 3.29984 23.0373C4.7945 24 6.87584 24 11.0372 24ZM8.44384 14C8.44384 11.04 10.9318 8.64267 13.9998 8.64267C17.0678 8.64267 19.5558 11.0413 19.5558 14C19.5558 16.9587 17.0665 19.3573 13.9998 19.3573C10.9318 19.3573 8.44384 16.9573 8.44384 14ZM10.6665 14C10.6665 12.224 12.1598 10.7867 13.9998 10.7867C15.8398 10.7867 17.3332 12.2253 17.3332 14C17.3332 15.7747 15.8398 17.2133 13.9998 17.2133C12.1598 17.2133 10.6665 15.7747 10.6665 14ZM22.1478 8.64267C21.5345 8.64267 21.0372 9.12267 21.0372 9.71467C21.0372 10.3053 21.5345 10.7853 22.1478 10.7853H22.8892C23.5025 10.7853 23.9998 10.3053 23.9998 9.71467C23.9998 9.12267 23.5025 8.64267 22.8892 8.64267H22.1478Z"
                        fill="#242760"
                        fillOpacity="0.81"
                      />
                    </svg>
                  </label>
                </div>
                </div>
              </div>
              <div className="flex w-full justify-between pb-10">
              <div className="w-[46%] border-[1px]">
              <label htmlFor="appointment leter">upload relieving letter</label>
              <div
                  className="relative w-[60px] h-[60px]  border-[1px] border-[#307730]"
                  // {...getRootProps()}
                >
                  <img
                    // src={selectedImage || watch("profilePic") || Avatar}
                    src={Avatar}
                    alt="User Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* <input {...getInputProps()} /> */}
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 p-1 bg-white rounded-full cursor-pointer"
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.6665 1.33333C8.6665 0.597333 9.21717 0 9.89717 0H18.1025C18.7825 0 19.3332 0.597333 19.3332 1.33333C19.3332 2.06933 18.7825 2.66667 18.1025 2.66667H9.89717C9.21717 2.66667 8.6665 2.06933 8.6665 1.33333ZM11.0372 24H16.9625C21.1238 24 23.2052 24 24.6998 23.0373C25.3429 22.6239 25.8983 22.0879 26.3345 21.46C27.3332 20.02 27.3332 18.0133 27.3332 14C27.3332 9.98667 27.3332 7.98133 26.3332 6.54C25.8975 5.91215 25.3425 5.37619 24.6998 4.96267C23.2052 4 21.1238 4 16.9625 4H11.0372C6.87584 4 4.7945 4 3.29984 4.96267C2.6572 5.37622 2.10222 5.91218 1.6665 6.54C0.666504 7.98 0.666504 9.98667 0.666504 13.9973V14C0.666504 18.0133 0.666504 20.0187 1.66517 21.46C2.09717 22.084 2.65184 22.62 3.29984 23.0373C4.7945 24 6.87584 24 11.0372 24ZM8.44384 14C8.44384 11.04 10.9318 8.64267 13.9998 8.64267C17.0678 8.64267 19.5558 11.0413 19.5558 14C19.5558 16.9587 17.0665 19.3573 13.9998 19.3573C10.9318 19.3573 8.44384 16.9573 8.44384 14ZM10.6665 14C10.6665 12.224 12.1598 10.7867 13.9998 10.7867C15.8398 10.7867 17.3332 12.2253 17.3332 14C17.3332 15.7747 15.8398 17.2133 13.9998 17.2133C12.1598 17.2133 10.6665 15.7747 10.6665 14ZM22.1478 8.64267C21.5345 8.64267 21.0372 9.12267 21.0372 9.71467C21.0372 10.3053 21.5345 10.7853 22.1478 10.7853H22.8892C23.5025 10.7853 23.9998 10.3053 23.9998 9.71467C23.9998 9.12267 23.5025 8.64267 22.8892 8.64267H22.1478Z"
                        fill="#242760"
                        fillOpacity="0.81"
                      />
                    </svg>
                  </label>
                </div>
                </div>
                <div className="w-[46%] border-[1px]">
                <label htmlFor="appointment leter">upload experience letter</label>
                <div
                  className="relative w-[60px] h-[60px]  border-[1px] border-[#307730]"
                  // {...getRootProps()}
                >
                  <img
                    // src={selectedImage || watch("profilePic") || Avatar}
                    src={Avatar}
                    alt="User Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* <input {...getInputProps()} /> */}
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 p-1 bg-white rounded-full cursor-pointer"
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.6665 1.33333C8.6665 0.597333 9.21717 0 9.89717 0H18.1025C18.7825 0 19.3332 0.597333 19.3332 1.33333C19.3332 2.06933 18.7825 2.66667 18.1025 2.66667H9.89717C9.21717 2.66667 8.6665 2.06933 8.6665 1.33333ZM11.0372 24H16.9625C21.1238 24 23.2052 24 24.6998 23.0373C25.3429 22.6239 25.8983 22.0879 26.3345 21.46C27.3332 20.02 27.3332 18.0133 27.3332 14C27.3332 9.98667 27.3332 7.98133 26.3332 6.54C25.8975 5.91215 25.3425 5.37619 24.6998 4.96267C23.2052 4 21.1238 4 16.9625 4H11.0372C6.87584 4 4.7945 4 3.29984 4.96267C2.6572 5.37622 2.10222 5.91218 1.6665 6.54C0.666504 7.98 0.666504 9.98667 0.666504 13.9973V14C0.666504 18.0133 0.666504 20.0187 1.66517 21.46C2.09717 22.084 2.65184 22.62 3.29984 23.0373C4.7945 24 6.87584 24 11.0372 24ZM8.44384 14C8.44384 11.04 10.9318 8.64267 13.9998 8.64267C17.0678 8.64267 19.5558 11.0413 19.5558 14C19.5558 16.9587 17.0665 19.3573 13.9998 19.3573C10.9318 19.3573 8.44384 16.9573 8.44384 14ZM10.6665 14C10.6665 12.224 12.1598 10.7867 13.9998 10.7867C15.8398 10.7867 17.3332 12.2253 17.3332 14C17.3332 15.7747 15.8398 17.2133 13.9998 17.2133C12.1598 17.2133 10.6665 15.7747 10.6665 14ZM22.1478 8.64267C21.5345 8.64267 21.0372 9.12267 21.0372 9.71467C21.0372 10.3053 21.5345 10.7853 22.1478 10.7853H22.8892C23.5025 10.7853 23.9998 10.3053 23.9998 9.71467C23.9998 9.12267 23.5025 8.64267 22.8892 8.64267H22.1478Z"
                        fill="#242760"
                        fillOpacity="0.81"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              </div>
 
              <div className="w-[30%]  flex justify-between">
                <button
                  // onClick={() => reset()}
                  type="button"
                  className="bg-[white] w-[100px] h-[40px] text-[#307730] border-[#307730] rounded-md border-[1px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#307730] text-[white] w-[100px] h-[40px] rounded-md flex items-center justify-center "
                >
                  {/* {loading1 ? <Loader /> : "Save"}  */}
                  Save
                </button>
              </div>
            </div>
          {/* )} */}
        </form>
      </div>
  )
}

export default EmployeeDocs