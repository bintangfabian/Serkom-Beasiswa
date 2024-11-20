"use client";

import React, { useEffect, useState } from 'react';
import BeasiswaChart from './components/BeasiswaChart';

// mendefinisikan data yang ada di dalam database
interface Beasiswa {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    semester: string;
    ipk: number;
    beasiswa: string;
    status: string;
}
// membuat list beasiswa berdasarkan data yang ada di dalam database
const Beasiswa: React.FC = () => {
    const [data, setData] = useState<Beasiswa[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // fungsi untuk pengecekkan data dalam database
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9000/student');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className='text-2xl font-bold flex justify-center items-center'>Loading...</div>;
    }

    if (error) {
        return <div className='text-2xl font-bold flex justify-center items-center'>Error: {error}</div>;
    }

    return (
        <div className="container flex justify-center mx-auto p-10 gap-8">
            <div className="w-1/2">
                <BeasiswaChart data={data} />
            </div>
            <div className="flex flex-col w-3/4">
                <h1 className="text-2xl font-bold mb-4">Beasiswa List</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Number</th>
                                <th className="border border-gray-300 p-2">Name</th>
                                <th className="border border-gray-300 p-2">Email</th>
                                <th className="border border-gray-300 p-2">Phone Number</th>
                                <th className="border border-gray-300 p-2">Semester</th>
                                <th className="border border-gray-300 p-2">IPK</th>
                                <th className="border border-gray-300 p-2">Beasiswa</th>
                                <th className="border border-gray-300 p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((entry, index) => (
                                <tr key={entry.id} className="bg-white hover:bg-gray-100">
                                    <td className="border border-gray-300 p-2">{index + 1}</td>
                                    <td className="border border-gray-300 p-2">{entry.name}</td>
                                    <td className="border border-gray-300 p-2">{entry.email}</td>
                                    <td className="border border-gray-300 p-2">{entry.phoneNumber}</td>
                                    <td className="border border-gray-300 p-2">{entry.semester}</td>
                                    <td className="border border-gray-300 p-2">{entry.ipk}</td>
                                    <td className="border border-gray-300 p-2">{entry.beasiswa}</td>
                                    <td
                                        className={`border border-gray-300 p-2 ${entry.status === "Belum Diverifikasi"
                                                ? "text-yellow-500"
                                                : entry.status === "Sudah Diverifikasi"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                    >
                                        {entry.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Beasiswa;
