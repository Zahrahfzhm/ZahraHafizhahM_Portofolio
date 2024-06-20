export default function EditInfoUMKMInfoUMKMContent() {
    return (
        <div className="flex flex-col mx-24">
            <p className="pt-10 text-xl font-bold text-white">Edit Tempat Wisata/UMKM</p>

            <div className="mt-6 mb-12 px-4 py-2 bg-white rounded-lg shadow-md">
                <p className="mt-1 text-base font-semibold text-balance">id destinasi</p>
                <div className="flex gap-6 mt-3">
                    <div className="">
                        <img src="https://picsum.photos/250/250" alt="Destinasi Wisata" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-2/3 flex flex-col justify-start">
                        <form className="ml-4">
                            <label className="block text-sm font-medium text-gray-700">Nama tempat</label>
                            <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Masukkan nama tempat" disabled/>
                            
                            <label className="block mt-4 text-sm font-medium text-gray-700">Kategori</label>
                            <select className="block w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>Tempat wisata</option>
                                <option>UMKM</option>
                                <option>Penginapan</option>
                            </select>

                            <label className="block mt-4 text-sm font-medium text-gray-700">Alamat lengkap</label>
                            <textarea className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="3" placeholder="e.g Graha Merah Putih, The Telkom Hub, Jl. Gatot Subroto No.Kav. 52, RT.6/RW.1, Kuningan Bar., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12710"></textarea>

                            <label className="block mt-4 text-sm font-medium text-gray-700">Deskripsi tempat</label>
                            <textarea className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="3" placeholder="Deskripsi singkat tentang destinasi"></textarea>
                            
                            <label className="block mt-4 text-sm font-medium text-gray-700">Nomor telepon</label>
                            <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g. 081234567890"/>
                            
                            <label className="block mt-4 text-sm font-medium text-gray-700">Alamat email</label>
                            <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g johndoe@gmail.com"/>

                            <label className="block mt-4 text-sm font-medium text-gray-700">Fasilitas</label>
                            <textarea className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="3" placeholder="Fasilitas yang tersedia, akses transportasi, area parkir, dll"></textarea>

                            <label className="block mt-4 text-sm font-medium text-gray-700">Harga dan tarif</label>
                            <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g Rp500.000"/>

                            <button type="submit" className="my-6 px-4 py-2 bg-[#1EC28B] text-white rounded-lg shadow hover:bg-[#17a77e]">Simpan</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}