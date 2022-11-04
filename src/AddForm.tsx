function AddForm() {
  return (
    <div className="flex bg-slate-600 rounded-md p-5 gap-4 items-center justify-between">
      <div className="flex flex-col lg:flex-row gap-4 w-full text-white">
        <label className="flex flex-col w-full lg:w-[250px] text-sm">
          Name
          <input
            type="text"
            className="bg-slate-500 p-3 mt-1 text-base rounded-md outline-none"
          />
        </label>
        <label className="flex flex-col w-full lg:w-[600px] text-sm">
          Description
          <input
            type="text"
            className="bg-slate-500 p-3 mt-1 text-base rounded-md outline-none"
          />
        </label>
        <button className="bg-orange-600 hover:bg-orange-500 p-2 mt-2 lg:mt-6 ml-auto rounded-md w-full lg:w-[120px]">
          Add Todo
        </button>
      </div>
    </div>
  )
}

export default AddForm
