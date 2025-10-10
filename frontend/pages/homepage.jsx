import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import ModalAddFile from "./components/ModalAddFile";

const Homepage = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const card = ["NPTR", "NPTA", "NCOT", "MAHLE"];

  const clickOpenModal = () => {
    setOpenModal((prev) => !prev);
  };
  const clickCard = (path) => {
    router.push(`/${path}`);
  };

  return (
    <div className="container mx-auto max-w-[1920px] h-dvh bg-[#F8F8FF] relative">
      <Navbar />
      <div className="flex w-full  px-5 mt-5">
        <div className="flex flex-1 justify-center">
          <input
            className="md:w-96 px-4 py-3 border border-gray-800 rounded-md text-gray-600"
            placeholder="code or description...."
          />
        </div>

        <button
          onClick={clickOpenModal}
          className="ml-4 mt-0 border bg-[#3698FC] text-white border-black px-4 py-2 shadow-lg rounded-xl hover:bg-blue-500 transition"
        >
          Add File
        </button>
      </div>
      <div className=" md:mt-20 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-5 md:mx-auto ">
          {card.map((item, index) => (
            <div
              key={index}
              onClick={() => clickCard(item)}
              className="h-44 border-3 border-black flex items-center justify-center bg-white text-black font-bold rounded-xl cursor-pointer hover:bg-gray-100 transition"
            >
              {item}
            </div>
          ))}
        </div>
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
