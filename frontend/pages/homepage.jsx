import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import ModalAddFile from "./components/ModalAddFile";

const Homepage = () => {
  const [openModal, setOpenModal] = useState(false);
  const clickOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className="container mx-auto max-w-[1920px] h-dvh bg-white relative">
      <Navbar />
      <div className="flex justify-between w-full">
        <div></div>
        <button
          onClick={clickOpenModal}
          className="mr-5 mt-5 border bg-[#3698FC] text-white border-black px-4 py-2 shadow-lg rounded-xl hover:bg-blue-500 transition"
        >
          Add File
        </button>
      </div>

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

export default Homepage;
