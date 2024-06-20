"use client"

import { useEffect, useState } from 'react';

export default function DashboardUMKMContent(){
    const [nama, setNama] = useState('');

    useEffect(() => {
        const userDataFromStorage = sessionStorage.getItem('data');
        if (userDataFromStorage) {
            const parsedData = JSON.parse(userDataFromStorage);
            setNama(parsedData.user.nama_pelaku);
        } else {
            console.error('User name not found in sessionStorage');
        }
    }, []);

    return(
        <div className="flex flex-col mx-24">
            <p className="pt-10 text-xl font-bold text-white">Dashboard UMKM</p>

            <div className="mt-6 mb-12 px-4 py-2 bg-white rounded-lg shadow-md">
                <p className="mt-1 text-base font-semibold text-balance">Selamat Datang {nama} di <span className="text-[#1EC28B]">EcoTourismGuide</span>, apa yang baru hari ini?</p>
                <p className="mt-1 text-xs font-normal text-slate-500 text-pretty">Silahkan periksa kebutuhan anda</p>

                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="mt-6 text-sm font-semibold text-balance">Katalog usaha/tempat wisata anda</p>
                        <button className="text-xs font-semibold text-white bg-[#1EC28B] px-4 py-2 rounded-lg shadow-md hover:bg-[#17a77e] transition-colors duration-300">Buat baru</button>
                    </div>
                    <div className="mt-1.5 py-2 px-4 flex flex-row gap-4 bg-white rounded-lg shadow-md">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="my-2.5 bg-white rounded-lg shadow-md flex flex-col hover:bg-gray-100 transition-colors duration-300">
                                <img src={`https://picsum.photos/250/250?random=${item}`} alt={`Destinasi ${item}`} className="w-full h-48 rounded-t-lg" />
                                <div className="p-5">
                                    <p className="text-sm font-semibold">Destinasi {item}</p>
                                    <p className="text-sm">Pantai/Laut</p>
                                    <p className="text-sm">Bali</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-sm font-semibold text-balance">Status registrasi/tempat wisata</p>
                    <div className="mt-1.5 mb-3 flex flex-row gap-4 bg-white overflow-hidden rounded-lg shadow-md">
                        <table className="w-full border border-collapse border-slate-300 table-auto rounded-lg">
                            <thead className="bg-[#1EC28B] text-sm font-bold text-white rounded-t-lg">
                                <tr>
                                    <th className="px-4 py-2 text-left font-semibold w-1/4">
                                        Nama Tempat
                                    </th>
                                    <th className="px-4 py-2 text-left font-semibold w-1/4">
                                        Status
                                    </th>
                                    <th className="px-4 py-2 text-left font-semibold w-1/4">
                                        Tanggal Registrasi
                                    </th>
                                    <th className="px-4 py-2 w-1/4">
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-normal">
                                <tr>
                                    <td className="px-4 py-2">
                                        Pantai Kuta
                                    </td>
                                    <td className="px-4 py-2">
                                        Diterima
                                    </td>
                                    <td className="px-4 py-2">
                                        01-01-2021
                                    </td>
                                    <td className="pr-8 py-2 text-right">
                                        <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-4 rounded">
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="px-4 py-2">
                                        Ubud Forest
                                    </td>
                                    <td className="px-4 py-2">
                                        Menunggu konfirmasi
                                    </td>
                                    <td className="px-4 py-2">
                                        15-03-2021
                                    </td>
                                    <td className="pr-8 py-2 text-right">
                                        <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-4 rounded">
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">
                                        Gunung Agung
                                    </td>
                                    <td className="px-4 py-2">
                                        Ditolak/dikembalikan
                                    </td>
                                    <td className="px-4 py-2">
                                        20-07-2021
                                    </td>
                                    <td className="pr-8 py-2 text-right">
                                        <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-4 rounded">
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}