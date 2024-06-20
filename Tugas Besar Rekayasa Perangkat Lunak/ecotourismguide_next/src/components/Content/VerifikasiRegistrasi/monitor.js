"use client"

import { useRouter } from 'next/navigation';
import MainContainer from "@/components/Container/DashboardAdmin/midContainer";


export default function MonitorVerifikasi(){
    const router = useRouter();

    const handleClickTable = (event) => {
        event.preventDefault()
        router.push('/DinasPariwisata/Verifikasi/DaftarProposal');
    };

    return(
        <MainContainer>
            <p className="mx-6 mt-10 text-xl font-bold text-white">Verifikasi Registrasi</p>
            
            <div className="flex flex-col">
                <div className="flex flex-row mt-6">
                    <div className="basis-1/2 mx-6 px-4 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-base font-semibold text-balance">Status dokumen tempat wisata</p>
                        <p className="mt-1.5 text-xs font-normal text-slate-500 text-pretty">Berikut tertera jumlah dokumen registrasi aktif tempat wisata. Mohon periksa dokumen proposal masuk secara berkala.</p>
                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out" onClick={handleClickTable}>
                            <p className="text-sm font-semibold">Menunggu konfirmasi</p>
                            <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                            <p className="mb-2 text-lg font-semibold">200</p>
                        </div>

                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out" onClick={handleClickTable}>
                            <p className="text-sm font-semibold">Diterima</p>
                            <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                            <p className="mb-2 text-lg font-semibold">200</p>
                        </div>

                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out" onClick={handleClickTable}>
                            <p className="text-sm font-semibold">Ditolak / dikembalikan</p>
                            <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                            <p className="mb-2 text-lg font-semibold">200</p>
                        </div>
                    </div>

                    <div className="basis-1/2 mr-6 px-4 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-base font-semibold text-balance">Status dokumen UMKM</p>
                        <p className="mt-1.5 text-xs font-normal text-slate-500 text-pretty">Berikut tertera jumlah dokumen registrasi aktif UMKM. Mohon periksa dokumen proposal masuk secara berkala.</p>
                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out" onClick={handleClickTable}>
                            <p className="text-sm font-semibold">Menunggu konfirmasi</p>
                            <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                            <p className="mb-2 text-lg font-semibold">200</p>
                        </div>

                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out" onClick={handleClickTable}>
                            <p className="text-sm font-semibold">Diterima</p>
                            <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                            <p className="mb-2 text-lg font-semibold">200</p>
                        </div>

                        <div className="my-2 px-4 pr-32 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out" onClick={handleClickTable}>
                            <p className="text-sm font-semibold">Ditolak / dikembalikan</p>
                            <p className="mt-2 text-xs font-normal text-slate-500">Total dokumen:</p>
                            <p className="mb-2 text-lg font-semibold">200</p>
                        </div>
                    </div>
                </div>
                
                <div className="mx-6 my-4 px-4 py-2 bg-white rounded-lg shadow-md flex flex-col">
                    <p className="text-sm font-semibold text-balance">Riwayat perlakuan dokumen</p>
                    <p className="mt-1.5 text-xs font-normal text-slate-500 text-pretty">Berikut merupakan riwayat dokumen yang telah dikonfirmasi, meliputi baik dokumen tempat wisata maupun UMKM</p>
                    <div className="bg-white rounded-lg shadow-md my-4 overflow-hidden flex-grow">
                        <table className="w-full border border-collapse border-slate-300 table-auto mx-auto">
                            <thead className="bg-[#1EC28B] text-sm font-bold text-white">
                                <tr>
                                    <th className="px-4 py-2 text-center font-semibold">No</th>
                                    <th className="px-4 py-2 text-center font-semibold">Foto Destinasi</th>
                                    <th className="px-4 py-2 text-center font-semibold">Nama Destinasi</th>
                                    <th className="px-4 py-2 text-center font-semibold">Tanggal dikirim</th>
                                    <th className="px-4 py-2 text-center font-semibold">Tanggal Perlakuan</th>
                                    <th className="px-4 py-2 text-center font-semibold">Status</th>
                                    <th className="px-4 py-2 text-center"></th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-normal">
                                <tr>
                                    <td className="px-4 py-2 text-center">1</td>
                                    <td className="px-4 py-2 text-center">
                                        <div className="flex justify-center">
                                            <div className="w-20 h-20 rounded-lg shadow-md overflow-hidden">
                                                <img src="https://picsum.photos/250/250?random=1" alt="Foto Destinasi 1" className="w-full h-full object-cover"/>
                                            </div>   
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 text-center">Destinasi A</td>
                                    <td className="px-4 py-2 text-center">01-01-2022</td>
                                    <td className="px-4 py-2 text-center">01-01-2022</td>
                                    <td className="px-4 py-2 text-center">Menunggu konfirmasi</td>
                                    <td className="px-4 py-2 text-center">
                                        <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                            Periksa
                                        </button>
                                    </td>
                                </tr>

                                <tr className="bg-gray-100">
                                    <td className="px-4 py-2 text-center">2</td>
                                    <td className="px-4 py-2 text-center">
                                        <div className="flex justify-center">
                                            <div className="w-20 h-20 rounded-lg shadow-md overflow-hidden">
                                                <img src="https://picsum.photos/200/200?random=2" alt="Foto Destinasi 2" className="w-full h-full object-cover"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 text-center">Destinasi B</td>
                                    <td className="px-4 py-2 text-center">15-02-2022</td>
                                    <td className="px-4 py-2 text-center">15-02-2022</td>
                                    <td className="px-4 py-2 text-center">Diterima</td>
                                    <td className="px-4 py-2 text-center">
                                        <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                            Periksa
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-4 py-2 text-center">3</td>
                                    <td className="px-4 py-2 text-center">
                                        <div className="flex justify-center">
                                            <div className="w-20 h-20 rounded-lg shadow-md overflow-hidden">
                                                <img src="https://picsum.photos/200/200?random=3" alt="Foto Destinasi 3" className="w-full h-full object-cover"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 text-center">Destinasi C</td>
                                    <td className="px-4 py-2 text-center">20-03-2022</td>
                                    <td className="px-4 py-2 text-center">20-03-2022</td>
                                    <td className="px-4 py-2 text-center">Ditolak / dikembalikan</td>
                                    <td className="px-4 py-2 text-center">
                                        <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                            Periksa
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
}



