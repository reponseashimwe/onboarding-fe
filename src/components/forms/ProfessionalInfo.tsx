import InputField from "../../helpers/InputField"


const ProfessionalInfo = () => {
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
              <div className="flex justify-between items-center">
                <div className="w-[46%]">
                  <InputField
                    type="text"
                    placeholder="employee ID"
                    className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                    // {...register("preferredLanguage")}
                    // error={errors?.preferredLanguage}
                  />
                </div>
                <div className="w-[46%]">
                  <InputField
                    type="text"
                    placeholder="username"
                    className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                    // {...register("preferredCurrency")}
                    // error={errors?.preferredCurrency}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="w-[46%]">
                  <select
                    id="employeetype"
                    name="employeetype"
                    className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                    // {...register("gender")}
                    // error={errors?.gender}
                  >
                    <option value="male">type01</option>
                    <option value="female">type02</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="w-[46%]">
                  <InputField
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                    // {...register("DOB")}
                    // error={errors?.DOB}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="w-[46%]">
                  <select
                    id="organizations"
                    name="departments"
                    className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                    // {...register("gender")}
                    // error={errors?.gender}
                  >
                    <option value="male">Department001</option>
                    <option value="female">Department002</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="w-[46%]">
                  <InputField
                    type="text"
                    placeholder="enter designation"
                    className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                    // {...register("DOB")}
                    // error={errors?.DOB}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="w-[46%]">
                  <select
                    id="workingdays"
                    name="workingdays"
                    className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                    // {...register("gender")}
                    // error={errors?.gender}
                  >
                    <option value="male">monday to friday</option>
                    <option value="female">monday to sunday</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="w-[46%]">
                  <InputField
                    type="date"
                    placeholder="select joining dates"
                    className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                    // {...register("DOB")}
                    // error={errors?.DOB}
                  />
                </div>
              </div>
              <div className="w-[100%]">
                  <select
                    id="officeLOcation"
                    name="office"
                    className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                    // {...register("gender")}
                    // error={errors?.gender}
                  >
                    <option value="male">officeLocation001</option>
                    <option value="female">officeLocation002</option>
                    <option value="other">Other</option>
                  </select>
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

export default ProfessionalInfo