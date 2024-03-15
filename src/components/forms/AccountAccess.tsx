import InputField from '../../helpers/InputField'

const AccountAccess = () => {
  return (
    <div className="mx-auto w-[80%] font-jost pt-4">
      <form
        className=" flex flex-col w-full justify-center pl-[10%]"
        // onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="rounded-lg p-[5px]">
        <div className="flex justify-between">
              <div className="w-[43%]">
                <InputField
                  type="text"
                  placeholder="enter email address"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  // {...register("preferredLanguage")}
                  // error={errors?.preferredLanguage}
                />
              </div>
              <div className="w-[43%]">
                <InputField
                  type="text"
                  placeholder="enter slack ID"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  // {...register("preferredCurrency")}
                  // error={errors?.preferredCurrency}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[43%]">
                <InputField
                  type="text"
                  placeholder="enter skype ID"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  // {...register("preferredLanguage")}
                  // error={errors?.preferredLanguage}
                />
              </div>
              <div className="w-[43%]">
                <InputField
                  type="text"
                  placeholder="enter github ID"
                  className="w-full rounded-md px-2 py-3 placeholder:text-gray-400 sm:text-[12px] my-2 focus:bg-[#EAF0F7] bg-[#EEF0F5]"
                  // {...register("preferredCurrency")}
                  // error={errors?.preferredCurrency}
                />
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

      </form>
      </div>
    
  )
}

export default AccountAccess