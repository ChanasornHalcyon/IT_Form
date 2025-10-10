import React from "react";
import { motion } from "framer-motion";

const ModalAddFile = ({ onClose, onSubmit, submitting }) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex h-96 justify-center mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white rounded-2xl shadow-xl w-[350px] md:w-[500px] sm:w-[400px] relative">
          <div className="flex justify-between items-center p-4 border-b">
            <h5 className="text-2xl font-semibold text-black ">Add File</h5>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-500">Modal body content...</p>
          </div>

          <div className="flex justify-end gap-2 p-4 border-t">
            <button
              onClick={onClose}
              disabled={submitting}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-black cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              disabled={submitting}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
    </>
  );
};

export default ModalAddFile;
