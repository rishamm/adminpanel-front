
const DeleteModal = ({ open, handleDeleteFn, closeModal }) => {
  return (
    <>
    {open &&
      <div className="fixed inset-0 top-0 overflow-scroll z-50 flex items-center justify-center  pt-10 left-[8%] ">

        <div className="bg-white  w-[500px] h-[200px] rounded-xl flex flex-col justify-center items-center shadow-xl p-5 gap-5">
          <h1 className="text-lg font-bold text-gray-700 ">Are you sure you want to delete this item?</h1>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleDeleteFn()}
              className="px-4 py-2 text-white transition duration-200 bg-red-500 rounded-md hover:bg-red-600"
            >
              Yes
            </button>
            <button
              onClick={() => closeModal()}
              className="px-4 py-2 text-white transition duration-200 bg-gray-500 rounded-md hover:bg-gray-600"
            >
              No
            </button>
          </div>
        </div>
      </div>
    }
  </>
  )
}

export default DeleteModal