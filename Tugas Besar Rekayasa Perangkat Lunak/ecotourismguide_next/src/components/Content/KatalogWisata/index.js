import { Star } from "@phosphor-icons/react/dist/ssr";

export default function KatalogWisata(){
    return(
        <div className="mx-36">
            <p className="pt-10 text-xl font-bold">Katalog Wisata</p>
            <div className="flex flex-row gap-8">
                <div className="flex flex-col">
                    <p className="mt-8 font-semibold">Filter</p>
                    <div className="mt-2 px-4 py-2 bg-white rounded-lg shadow-md">
                        <p className="font-semibold">Kategori</p>
                        <div className="flex flex-col mt-3 space-y-2">
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Pantai/Laut" className="mr-2"/> Pantai/Laut</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Pegunungan" className="mr-2"/> Pegunungan</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Danau/Danau Buatan" className="mr-2"/> Danau/Danau Buatan</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Hutan/Hutan Tropis" className="mr-2"/> Hutan/Hutan Tropis</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Pulau" className="mr-2"/> Pulau</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Desa Wisata" className="mr-2"/> Desa Wisata</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Air Terjun/Waterfall" className="mr-2"/> Air Terjun/Waterfall</label>
                        </div>

                        <p className="mt-4 font-semibold">Lokasi</p>
                        <div className="flex flex-col mt-3 space-y-2">
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Pantai/Laut" className="mr-2"/> Jakarta</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Pegunungan" className="mr-2"/> Bandung</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Danau/Danau Buatan" className="mr-2"/> Surabaya</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Hutan/Hutan Tropis" className="mr-2"/> Banten</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Pulau" className="mr-2"/> Lombok</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Desa Wisata" className="mr-2"/> Jogja</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Air Terjun/Waterfall" className="mr-2"/> Bogor</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Air Terjun/Waterfall" className="mr-2"/> Malang</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Air Terjun/Waterfall" className="mr-2"/> Semarang</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Air Terjun/Waterfall" className="mr-2"/> Banyuwangi</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Air Terjun/Waterfall" className="mr-2"/> Lampung</label>
                            <label className="text-sm flex items-center text-slate-500"><input type="checkbox" value="Air Terjun/Waterfall" className="mr-2"/> Bali</label>
                        </div>

                        <p className="mt-4 font-semibold">Harga</p>
                        <div className="flex items-center mt-4 space-x-2">
                            <div className="font-medium">Rp</div>
                            <input 
                                data-unify="TextField" 
                                name="pmin" 
                                placeholder="Harga Minimum" 
                                type="text"
                                className="border border-gray-300 rounded-md p-1"
                                value=""
                            />
                        </div>

                        <div className="flex items-center mt-4 space-x-2">
                            <div className="font-medium">Rp</div>
                            <input 
                                data-unify="TextField" 
                                name="pmin" 
                                placeholder="Harga Maximum" 
                                type="text"
                                className="border border-garay-300 rounded-md p-1"
                                value=""
                            />
                        </div>

                        <p className="mt-4 font-semibold">Rating</p>
                        <div className="flex flex-col mt-3 space-y-2">
                            <label className="text-sm flex items-center text-slate-500">
                                <input type="checkbox" value="Pantai/Laut" className="mr-2"/>
                                <Star size={16} className="mr-1 text-yellow-500"/>
                                4 keatas
                            </label>
                        </div>
                        
                    
                    </div>
                    
                </div>
                
                <div className="flex flex-col">
                    <p className="mt-8 font-semibold">Destinasi Wisata</p>
                    <div className="mt-2 mb-8 px-4 py-2 bg-white rounded-lg shadow-md">
                        <div>
                            <p>search bar</p>
                        </div>                        
                        <div className="flex justify-end items-center mt-2">
                            <p className="mr-2">Sort:</p>
                            <select className="border border-gray-300 rounded-md p-1">
                                <option value="ascending">A-Z</option>
                                <option value="price">By Price</option>
                                <option value="rating">By Rating</option>
                            </select>
                        </div>

                        <div className="flex flex-row justify-between gap-4 mt-4">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg">
                                    <img src={`https://picsum.photos/250/250?random=${item}`} alt={`Destinasi ${item}`} className="w-full h-48 rounded-t-lg" />
                                    <div className="p-5">
                                        <p className="text-sm">Destinasi ${item}</p>
                                        <p className="text-sm font-semibold">Rp 500.000</p>
                                        <p className="text-sm">Pantai/Laut</p>
                                        <p className="text-sm">Bali</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between gap-4 mt-4">
                            {[6, 7, 8, 9, 10].map((item) => (
                                <div key={item} className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg">
                                    <img src={`https://picsum.photos/250/250?random=${item}`} alt={`Destinasi ${item}`} className="w-full h-48 rounded-t-lg" />
                                    <div className="p-5">
                                        <p className="text-sm">Destinasi ${item}</p>
                                        <p className="text-sm font-semibold">Rp 500.000</p>
                                        <p className="text-sm">Pantai/Laut</p>
                                        <p className="text-sm">Bali</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between gap-4 mt-4">
                            {[11, 12, 13, 14, 15].map((item) => (
                                <div key={item} className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg">
                                    <img src={`https://picsum.photos/250/250?random=${item}`} alt={`Destinasi ${item}`} className="w-full h-48 rounded-t-lg" />
                                    <div className="p-5">
                                        <p className="text-sm">Destinasi ${item}</p>
                                        <p className="text-sm font-semibold">Rp 500.000</p>
                                        <p className="text-sm">Pantai/Laut</p>
                                        <p className="text-sm">Bali</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between gap-4 mt-4">
                            {[16, 17, 18, 19, 20].map((item) => (
                                <div key={item} className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg">
                                    <img src={`https://picsum.photos/250/250?random=${item}`} alt={`Destinasi ${item}`} className="w-full h-48 rounded-t-lg" />
                                    <div className="p-5">
                                        <p className="text-sm">Destinasi ${item}</p>
                                        <p className="text-sm font-semibold">Rp 500.000</p>
                                        <p className="text-sm">Pantai/Laut</p>
                                        <p className="text-sm">Bali</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between gap-4 mt-4">
                            {[21, 22, 23, 24, 25].map((item) => (
                                <div key={item} className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg">
                                    <img src={`https://picsum.photos/250/250?random=${item}`} alt={`Destinasi ${item}`} className="w-full h-48 rounded-t-lg" />
                                    <div className="p-5">
                                        <p className="text-sm">Destinasi ${item}</p>
                                        <p className="text-sm font-semibold">Rp 500.000</p>
                                        <p className="text-sm">Pantai/Laut</p>
                                        <p className="text-sm">Bali</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between gap-4 mt-4">
                            {[26, 27, 28, 29, 30].map((item) => (
                                <div key={item} className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg">
                                    <img src={`https://picsum.photos/250/250?random=${item}`} alt={`Destinasi ${item}`} className="w-full h-48 rounded-t-lg" />
                                    <div className="p-5">
                                        <p className="text-sm">Destinasi ${item}</p>
                                        <p className="text-sm font-semibold">Rp 500.000</p>
                                        <p className="text-sm">Pantai/Laut</p>
                                        <p className="text-sm">Bali</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex justify-center mt-8">
                            <div className="flex gap-2">
                                <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white border rounded-md">1</button>
                                <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white border rounded-md">2</button>
                                <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white border rounded-md">3</button>
                                <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white border rounded-md">4</button>
                                <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white border rounded-md">5</button>
                                <span className="px-4 py-2 text-sm font-semibold text-gray-800">...</span>
                                <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white border rounded-md">10</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

