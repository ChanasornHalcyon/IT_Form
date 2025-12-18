import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
    Legend
);

const Data = () => {
    const [status, setStatus] = useState("PENDING");
    const [chartType, setChartType] = useState("bar");
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const isDateSelected = startDate && endDate;

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString("th-TH");
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:8000/ITDashboard", {
                params: { status, startDate, endDate },
            });
            setChartData(res.data.data || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isDateSelected) fetchData();
    }, [status]);

    const data = {
        labels: chartData.map((d) => formatDate(d.date)),
        datasets: [
            {
                label: `จำนวนคำขอ (${status})`,
                data: chartData.map((d) => d.total),
                backgroundColor: status === "PENDING" ? "#FF3366" : "#22c55e",
                borderColor: status === "PENDING" ? "#FF3366" : "#16a34a",
                tension: 0.35,
                fill: chartType === "bar",
            },
        ],
    };

    return (
        <div className="container mx-auto max-w-[1600px] min-h-screen bg-[#F8F8FF]">
            <Navbar />

            <div className="pt-24 flex justify-center px-4">
                <div className="w-full max-w-4xl space-y-6">

                    <div className="grid grid-cols-2 gap-4">
                        <div
                            onClick={() => setStatus("PENDING")}
                            className={`cursor-pointer px-4 py-3 rounded-lg text-center text-sm font-medium transition
                ${status === "PENDING"
                                    ? "bg-[#FF3366] text-white shadow"
                                    : "bg-white hover:bg-rose-50"
                                }`}
                        >
                            Pending
                        </div>

                        <div
                            onClick={() => setStatus("APPROVED")}
                            className={`cursor-pointer px-4 py-3 rounded-lg text-center text-sm font-medium transition
                ${status === "APPROVED"
                                    ? "bg-green-500 text-white shadow"
                                    : "bg-white hover:bg-green-50"
                                }`}
                        >
                            Approved
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm px-4 py-3 flex flex-col md:flex-row gap-4 items-center justify-between">

                        <div className="flex gap-2 items-center text-sm">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="border rounded-md px-2 py-1 text-sm text-black"
                            />
                            <span className="text-gray-400">–</span>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="border rounded-md px-2 py-1 text-sm text-black"
                            />
                            <button
                                onClick={fetchData}
                                className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition cursor-pointer"
                            >
                                ค้นหา
                            </button>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => setChartType("bar")}
                                className={`px-3 py-1.5 rounded-md text-sm transition cursor-pointer
                  ${chartType === "bar"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white border hover:bg-gray-50"
                                    }`}
                            >
                                Bar
                            </button>

                            <button
                                onClick={() => setChartType("line")}
                                className={`px-3 py-1.5 rounded-md text-sm transition cursor-pointer
                  ${chartType === "line"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white border hover:bg-gray-50"
                                    }`}
                            >
                                Line
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        {!isDateSelected ? (
                            <div className="text-center text-gray-400 py-16 text-sm">
                                กรุณาเลือกช่วงวันที่เพื่อแสดงกราฟ
                            </div>
                        ) : loading ? (
                            <div className="text-center text-gray-500 py-16 text-sm">
                                กำลังโหลดข้อมูล...
                            </div>
                        ) : chartType === "bar" ? (
                            <Bar data={data} />
                        ) : (
                            <Line data={data} />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Data;
