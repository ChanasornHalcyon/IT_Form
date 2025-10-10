import React, { useState } from "react";
import { motion } from "framer-motion";

const ModalAddFile = ({ onClose, onSubmit, submitting }) => {
  const [form, setForm] = useState({
    reason: "",
    description: "",
    customerPart: "",
    dwgNo: "",
    customerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-start mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white rounded-2xl shadow-xl w-[350px] sm:w-[400px] md:w-[500px]">
          <div className="flex justify-between items-center p-4 border-b">
            <h5 className="text-2xl font-semibold text-black">Add File</h5>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="p-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason
              </label>
              <input
                type="text"
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3698FC] text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3698FC] text-black"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Part
                </label>
                <input
                  type="text"
                  name="customerPart"
                  value={form.customerPart}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3698FC] text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DWG No.
                </label>
                <input
                  type="text"
                  name="dwgNo"
                  value={form.dwgNo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3698FC] text-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3698FC] text-black"
              />
            </div>
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
              onClick={() => onSubmit(form)}
              disabled={submitting}
              className="px-4 py-2 rounded-lg bg-[#3698FC] text-white hover:bg-blue-600 cursor-pointer"
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
