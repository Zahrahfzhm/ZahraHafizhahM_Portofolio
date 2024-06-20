export default function DaftarRating(){
    return(
        <div className="flex flex-col mx-40">
            <p className="pt-10 text-xl font-bold">Rating Wisata</p>

            <div className="mt-6 px-4 py-2 bg-white rounded-lg shadow-md">
                <p className="text-base font-semibold text-balance">Ulasan Saya</p>
                <p className="mt-1.5 text-xs font-normal text-slate-500 text-pretty">Berikut tertera jumlah dokumen registrasi aktif tempat wisata. Mohon periksa dokumen proposal masuk secara berkala.</p>
                
                <div className="flex flex-row mx-12 mt-4 gap-x-6 justify-center">
                    <div className="px-4 pr-8 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-sm font-semibold">Menunggu Diulas</p>
                        <p className="mt-2 text-xs font-normal text-slate-500">Total tempat wisata/UMKM:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>

                    <div className="px-4 pr-8 py-2 bg-white rounded-lg shadow-md">
                        <p className="text-sm font-semibold">Telah Diulas</p>
                        <p className="mt-2 text-xs font-normal text-slate-500">Total tempat wisata/UMKM:</p>
                        <p className="text-lg font-semibold">200</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md my-4 overflow-hidden">
                    <table className="w-full border border-collapse border-slate-300 table-auto">
                        <thead className="bg-[#1EC28B] text-sm font-bold text-white">
                            <tr>
                                <th className="px-4 py-2 text-left font-semibold">No</th>
                                <th className="px-4 py-2 text-left font-semibold">Column Name</th>
                                <th className="px-4 py-2 text-left font-semibold">Column Name</th>
                                <th className="px-4 py-2 text-left font-semibold">Column Name</th>
                                <th className="px-4 py-2 text-left font-semibold">Column Name</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal">
                            <tr>
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">
                                    <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                        Button
                                    </button>
                                </td>
                            </tr>

                            <tr className="bg-gray-100">
                                <td className="px-4 py-2">2</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">Content</td>
                                <td className="px-4 py-2">
                                    <button className="bg-[#FF8345] hover:bg-[#c17a3a] text-white font-medium py-2 px-2 rounded">
                                        Button
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
}