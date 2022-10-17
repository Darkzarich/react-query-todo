function AddForm() {
  return (
    <div className="flex bg-slate-600 rounded-md p-5 gap-4 items-center justify-between">
      <div className="flex gap-4">
        <label className="flex flex-col text-white text-sm">
          Name
          <input
            type="text"
            className="bg-slate-500 rounded-md w-[250px] p-3 mt-1 text-base"
          />
        </label>
        <label className="flex flex-col text-white text-sm">
          Description
          <input
            type="text"
            className="bg-slate-500 rounded-md w-[400px] p-3 mt-1 text-base"
          />
        </label>
      </div>
      <button className="bg-orange-600 hover:bg-orange-500 text-white p-2 rounded-md w-[120px]">
        Add Todo
      </button>
    </div>
  )
}

export default AddForm
