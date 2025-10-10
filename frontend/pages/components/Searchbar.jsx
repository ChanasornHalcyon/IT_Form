import React from "react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import ModalAddFile from "./ModalAddFile";
const Searchbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const clickOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className="flex items-center w-full px-5 mt-5 relative">
      <div className="flex md:justify-center w-full ">
        <div className="relative w-[250px] md:w-96">
          <input
            className="w-full px-4 py-3 pr-10 border border-gray-800 rounded-md text-gray-600 focus:outline-none focus:border-[#FF3399]"
            placeholder="code or description...."
          />
          <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3698FC] w-8 h-8 cursor-pointer hover:text-blue-600 transition" />
        </div>
      </div>

      <button
        onClick={clickOpenModal}
        className="absolute right-3 bg-[#3698FC] text-white border border-black px-3 py-3 shadow-md rounded-xl hover:bg-blue-500 transition cursor-pointer"
      >
        Add File
      </button>

      {openModal && (
        <ModalAddFile
          onClose={() => setOpenModal(false)}
          onSubmit={() => alert("Submit clicked")}
          submitting={false}
        />
      )}
    </div>
  );
};

export default Searchbar;
