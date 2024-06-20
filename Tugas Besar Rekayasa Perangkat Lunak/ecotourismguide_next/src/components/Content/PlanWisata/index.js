import Image from "next/image";
import React from 'react';

export default function PlanWisata() {
    return (
        <section className="bg-[#B9F4E0] min-h-screen">
        <div className="max-w-[1440px] mx-auto p-6">
            <h1 className="text-5xl font-extrabold text-center mt-[10px] mb-[30px] text-black">Rekomendasi Plan Wisata</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-5 h-[600px] flex flex-col justify-between">
                    <div>
                        <Image src="/Bandung.jpg" alt="Taman Safari" width={700} height={400} className="w-full object-cover rounded-t-lg"/>
                        <h2 className="text-xl font-semibold mt-2 text-black">Paket Keluarga</h2>
                        <p className="text-gray-600">Nikmati liburan keluarga dengan berbagai kegiatan menarik.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Kunjungan ke Taman Safari</li>
                            <li>Makan siang di restoran lokal</li>
                            <li>Workshop membuat kerajinan tangan</li>
                        </ul>
                    </div>
                    <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">Lihat Detail</button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5 h-[600px] flex flex-col justify-between">
                    <div>
                        <Image src="/Gunung-Bromo.jpg" alt="Arung Jeram" width={700} height={400} className="w-full object-cover rounded-t-lg"/>
                        <h2 className="text-xl font-semibold mt-2 text-black">Paket Petualangan</h2>
                        <p className="text-gray-600">Rasakan adrenalin dengan aktivitas outdoor yang menantang.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Arung jeram di Sungai Elo</li>
                            <li>Tracking di Gunung Bromo</li>
                            <li>Camping di tepi danau</li>
                        </ul>
                    </div>
                    <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">Lihat Detail</button>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-5 h-[600px] flex flex-col justify-between">
                    <div>
                        <Image src="/Malang.jpg" alt="Arung Jeram" width={700} height={400} className="w-full object-cover rounded-t-lg"/>
                        <h2 className="text-xl font-semibold mt-2 text-black">Paket Relaksasi</h2>
                        <p className="text-gray-600">Lepaskan penat dengan kegiatan yang menenangkan dan memanjakan.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Spa tradisional Bali</li>
                            <li>Yoga di tepi pantai</li>
                            <li>Menikmati sunset di kafe pantai</li>
                        </ul>
                    </div>
                    <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">Lihat Detail</button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5 h-[600px] flex flex-col justify-between">
                    <div>
                        <Image src="/Semarang.jpg" alt="Museum Daerah" width={700} height={400} className="w-full object-cover rounded-t-lg"/>
                        <h2 className="text-xl font-semibold mt-2 text-black">Paket Budaya</h2>
                        <p className="text-gray-600">Jelajahi kekayaan budaya lokal dengan berbagai aktivitas edukatif.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Kunjungan ke museum daerah</li>
                            <li>Workshop tari tradisional</li>
                            <li>Kuliner tradisional di pasar malam</li>
                        </ul>
                    </div>
                    <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">Lihat Detail</button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5 h-[600px] flex flex-col justify-between">
                    <div>
                        <Image src="/Yogyakarta.jpg" alt="Fotografi Alam" width={700} height={400} className="w-full object-cover rounded-t-lg"/>
                        <h2 className="text-xl font-semibold mt-2 text-black">Paket Fotografi</h2>
                        <p className="text-gray-600">Abadikan momen indah perjalanan Anda dengan panduan fotografi profesional.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Foto sunrise di pantai</li>
                            <li>Foto landscape di pegunungan</li>
                            <li>Workshop fotografi alam</li>
                        </ul>
                    </div>
                    <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">Lihat Detail</button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5 h-[600px] flex flex-col justify-between">
                    <div>
                        <Image src="/Bali.png" alt="Paket Liburan Bali" width={700} height={400} className="w-full object-cover rounded-t-lg"/>
                        <h2 className="text-xl font-semibold mt-2 text-black">Paket Liburan Bali</h2>
                        <p className="text-gray-600">Menikmati keindahan alam dan budaya Bali dengan paket liburan yang lengkap.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>Wisata ke Pantai Kuta</li>
                            <li>Menikmati sunset di Uluwatu</li>
                            <li>Kunjungan ke Tirtha Empul</li>
                        </ul>
                    </div>
                    <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">Lihat Detail</button>
                </div>
            </div>
        </div>
        </section>
    );
}
