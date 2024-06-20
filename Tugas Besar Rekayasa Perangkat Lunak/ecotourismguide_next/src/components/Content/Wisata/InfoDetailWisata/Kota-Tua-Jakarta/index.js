"use client"

import Image from "next/image";
import React, { useState } from 'react';
import AksesTransportasi from "../../../AksesTransportasi";
import { useRouter } from 'next/navigation';

export default function KotaTuaJakarta() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const router = useRouter();

    const handleClickhotel = (event) => {
        event.preventDefault()
        router.push('/Wisatawan/ProfilDaerah/DaerahWisata/Hotel');
    };

    const handleClickLocation = (event) => {
        event.preventDefault()
        router.push('/Wisatawan/Wisata/Lokasi/KotaTua');
    };

    const handleClickReview = (event) => {
        event.preventDefault()
        router.push('/Wisatawan/Rating/Review');
    };

    const descWisata = ["Kota Tua Jakarta, juga dikenal dengan sebutan Batavia Lama (Oud Batavia), adalah sebuah wilayah kecil di Jakarta, Indonesia. Wilayah khusus ini memiliki luas 1,3 kilometer persegi melintasi Jakarta Utara dan Jakarta Barat (Pinangsia, Taman Sari dan Roa Malaka). Dijuluki 'Permata Asia' dan 'Ratu dari Timur' pada abad ke-16 oleh pelayar Eropa, Jakarta Lama dianggap sebagai pusat perdagangan untuk benua Asia karena lokasinya yang strategis dan sumber daya melimpah."];

    return (
        <section className="bg-[#B9F4E0] min-h-screen">
            <div className="relative w-full h-[500px] bg-black">
                <Image 
                    src="/detailwisata/kotatua/kotatua.jpg" 
                    alt="Taman Margasatwa Ragunan, Sumatera Utara" 
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-bold">Kota Tua</h1>
                        <br />
                        <h6 className="text-3xl">Jakarta Barat</h6>
                    </div>
                </div>
            </div>

            <div className="flex-col flex justify-center gap-4 mx-4 space-y-6">
                <div className="mx-auto flex flex-col space-y-5 mt-6 px-40 text-black font-poppins">
                    <div>
                        <h3 className="text-lg text-justify">{descWisata}</h3>
                    </div>
                    <div>
                        <h3 style={{color: "#2B2945", marginBottom: "10px"}} className="text-2xl font-bold">Fasilitas</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-roller-coaster text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i>Museum-Museum</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-tree text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i>Bangunan Bersejarah</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-ferris-wheel text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i>Jembatan Intan</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-swim text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i>Art Street</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-bicycle text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i>Cafe Batavia</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-umbrella-beach text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i>Taman Fatahillah</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 style={{color: "#2B2945"}} className="text-2xl font-bold">Jenis Wisata</h3>
                        <h3 className="text-lg text-justify">Sejarah dan budaya</h3>
                    </div>
                    <div>
                        <h3 style={{color: "#2B2945"}} className="text-2xl font-bold">Harga Tiket</h3>
                        <h3 className="text-lg text-justify mb-[30px]">Tidak ada biaya untuk masuk wisata (gratis)</h3>
                    </div>
                </div>
            </div>

            <div className="bg-[#2B2945] w-full h-[70vh]">
                <div className="mx-auto flex flex-col space-y-5 mt-6 px-40 text-white font-poppins">
                    <div className="grid grid-cols-2 gap-20">
                        <div className="col-span-1">
                            <img src="/detailwisata/kotatua/previewlokasi.png" alt="Preview Peta Lokasi Wisata" style={{ width: '100%', height: 'auto', marginTop: 100 }} />
                        </div>
                        <div className="col-span-1 mt-[150px]">
                            <h3 className="text-5xl font-extrabold">Lokasi Wisata</h3>
                            <br />
                            <h3 className="text-lg text-justify">Kawasan Kota Tua, Taman Fatahillah No.1, RT.7/RW.7, Pinangsia,<br/> Taman Sari, Jakarta Barat</h3>
                            <button className="bg-[#1EC28B] text-white rounded-full px-8 py-4 mt-[50px] hover:shadow-lg" onClick={handleClickLocation}>Lihat Detail Lokasi</button>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="bg-white w-full h-[110vh]">
                <div className="mx-auto flex flex-col justify-center px-40 text-black font-poppins">
                    <h3 className="text-5xl font-extrabold mt-[70px]" style={{ color: 'black' }}>Rating & Review Wisata</h3>
                    <div className="flex items-center mt-[50px] ml-[300px]">
                        <p className="font-medium text-5xl mr-2" style={{ color: 'gray' }}>4.5</p>
                        <span className="text-yellow-500 text-5xl">★★★★☆</span>
                    </div> 
                    <div className="grid grid-cols-2 gap-20">
                        <div className="col-span-1 mt-[5px]">
                            <ul className="mt-2 space-y-4">
                                <li style={{ color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://via.placeholder.com/30" alt="Budi profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                        <span style={{ fontWeight: 'bold', fontSize: 'larger' }}>Hilmy (@hilmy123)</span>
                                    </div>
                                    <div style={{ fontSize: 'larger' }}>"Saya suka tempat ini dan cocok untuk menjadi rute lanjutan untuk bersepeda dengan rute yang lebih jauh dan jalanan yang sangat indah di pagi hari."</div>
                                </li>
                                <hr className="mt-[10px]" style={{ borderColor: '#C7C5B8' }} />
                                <li style={{ color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://via.placeholder.com/30" alt="Siti profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                        <span style={{ fontWeight: 'bold', fontSize: 'larger' }}>Laras (@laras456)</span>
                                    </div>
                                    <div style={{ fontSize: 'larger' }}>"Saya tidak pernah bosan kesini. Sekarang lebih rapi dan tertata. Disediakan pemandu wisata juga jika ingin mengetahui lebih jelas mengenai museum."</div>
                                </li>
                                <hr className="mt-[10px]" style={{ borderColor: '#C7C5B8' }} />
                                <li style={{ color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://via.placeholder.com/30" alt="Ahmad profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                        <span style={{ fontWeight: 'bold', fontSize: 'larger' }}>Budi (@budi789)</span>
                                    </div>
                                    <div style={{ fontSize: 'larger' }}>"Bersih dan nyaman untuk jalan, cuma ada beberapa sudut ada sampah dikit dan agak bau, untuk kenyamanan ok jalan2 ok foto2 ok. kalau malam banyak yg jual makanan."</div>
                                </li>
                            </ul>
                            <button className="bg-[#1EC28B] text-white rounded-full px-8 py-4 mt-[50px] mb-[50px] hover:shadow-lg" onClick={handleClickReview}>Tambah Penilaian</button>
                        </div>
                        <div className="col-span-1 mt-[30px]">
                            <div className="flex flex-col space-y-4">
                                <button className="bg-[#164E63] text-white px-8 py-4 rounded-md hover:bg-[#44849D] hover:shadow-lg" onClick={handleOpenModal}>Akses Transportasi</button>
                                <button className="bg-[#164E63] text-white px-8 py-4 rounded-md hover:bg-[#44849D] hover:shadow-lg">Informasi Kuliner</button>
                                <button className="bg-[#164E63] text-white px-8 py-4 rounded-md hover:bg-[#44849D] hover:shadow-lg" onClick={handleClickhotel}>Informasi Penginapan</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 text-2xl" onClick={handleCloseModal}>
                            &times;
                        </button>
                        <AksesTransportasi />
                    </div>
                </div>
            )}
        </section>
    );
}
