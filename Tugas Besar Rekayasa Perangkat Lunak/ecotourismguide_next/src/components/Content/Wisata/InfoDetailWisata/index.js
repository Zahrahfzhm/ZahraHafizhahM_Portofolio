"use client"

import Image from "next/image";
import React, { useState } from 'react';
import AksesTransportasi from "../../AksesTransportasi";
import { useRouter } from 'next/navigation';

export default function DetailKotaTuaJakarta() {
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
        router.push('/Wisatawan/Wisata/Lokasi');
    };

    const handleClickReview = (event) => {
        event.preventDefault()
        router.push('/Wisatawan/Rating/Review');
    };

    const descWisata = ["Berkunjung ke Taman Margasatwa Ragunan berarti memasuki sebuah hutan tropis mini, di dalamnya terdapat keanekaragaman hayati yang memiliki nilai konservasi tinggi dan menyimpan harapan untuk masa depan. Sebuah kebun binatang modern menampilkan suatu system ekologi yang lengkap yang bias menjadi satu sumber ilmu pengetahuan yang akan mengawali langkah pelestarian kehidupan alam liar. Singkatnya, kebuna binatang adalah “Kapal Nuh” kita dalam menghadapi bencana dan kerusakan alam yang akhir-akhir ini sering terjadi. Bila nanti sudah tidak ada lagi hutan di bumi ini, paling tidak masih ada contoh-contoh makhluk yang menakjubkan ini di kebun binatang, entah itu telah berwujud satwa ataupun masih berbentuk embrio, sel atau DNA."];

    return (
        <section className="bg-[#B9F4E0] min-h-screen">
            <div className="relative w-full h-[500px] bg-black">
                <Image 
                    src="/detailwisata/ragunan/ragunan.jpg" 
                    alt="Taman Margasatwa Ragunan, Sumatera Utara" 
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-bold">Taman Margasatwa Ragunan</h1>
                        <br />
                        <h6 className="text-3xl">Jakarta Selatan</h6>
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
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i> Wahana Gajah Tunggang</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-tree text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i> Wahana Kuda Tunggang</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-ferris-wheel text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i> Taman Satwa Anak</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-swim text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i> Taman Perahu Angsa</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-bicycle text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i> Penyewaan Sepeda</h5>
                                </div>
                            </div>
                            <div className="bg-[#164E63] rounded-md shadow-md p-4 bg-opacity-80 text-center">
                                <div className="flex items-center">
                                    <i className="fas fa-umbrella-beach text-lg mr-2 text-white"></i>
                                    <h5 className="text-lg text-white font-normal"> <i className="fas fa-arrow-right text-sm mr-2"></i> Kereta Keliling</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 style={{color: "#2B2945", marginTop: "5px"}} className="text-2xl font-bold">Jenis Wisata</h3>
                        <h3 className="text-lg text-justify">Kebun binatang, Wahana Bermain Anak dan Dewasa</h3>
                    </div>
                    <div>
                        <h3 style={{color: "#2B2945", marginTop: "5px"}} className="text-2xl font-bold">Harga Tiket</h3>
                        <h3 className="text-lg text-justify mb-[30px]">Mulai dari Rp 45.000/orang</h3>
                    </div>
                </div>
            </div>

            <div className="bg-[#2B2945] w-full h-[70vh]">
                <div className="mx-auto flex flex-col space-y-5 mt-6 px-40 text-white font-poppins">
                    <div className="grid grid-cols-2 gap-20">
                        <div className="col-span-1">
                            <img src="/detailwisata/ragunan/previewlokasi.png" alt="Preview Peta Lokasi Wisata" style={{ width: '100%', height: 'auto', marginTop: 100 }} />
                        </div>
                        <div className="col-span-1 mt-[150px]">
                            <h3 className="text-5xl font-extrabold">Lokasi Wisata</h3>
                            <br />
                            <h3 className="text-lg text-justify">Jl. Harsono RM No.1, Ragunan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta</h3>
                            <button style={{marginBottom: 100}} className="bg-[#1EC28B] text-white rounded-full px-8 py-4 mt-[50px] hover:shadow-lg" onClick={handleClickLocation}>Lihat Detail Lokasi</button>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="bg-white w-full h-[110vh]">
                <div className="mx-auto flex flex-col justify-center px-40 text-black font-poppins">
                    <h3 className="text-5xl font-extrabold mt-[70px]" style={{ color: 'black' }}>Rating & Review Wisata</h3>
                    <div className="flex items-center mt-[50px] ml-[300px]">
                        <p className="font-medium text-5xl mr-2" style={{ color: 'gray' }}>5.0</p>
                        <span className="text-yellow-500 text-5xl">★★★★★</span>
                    </div> 
                    <div className="grid grid-cols-2 gap-20">
                        <div className="col-span-1 mt-[5px]">
                            <ul className="mt-2 space-y-4">
                                <li style={{ color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://via.placeholder.com/30" alt="Budi profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                        <span style={{ fontWeight: 'bold', fontSize: 'larger' }}>Budi (@budi123)</span>
                                    </div>
                                    <div style={{ fontSize: 'larger' }}>"Luas bangeeeet! Buat yang ga mau capek, banyak sewaan sepeda goes atau listrik. Ada kereta keliling juga, dan stroller friendly. Jadi aman banget kalo bawa bayi atau anak2"</div>
                                </li>
                                <hr className="mt-[10px]" style={{ borderColor: '#C7C5B8' }} />
                                <li style={{ color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://via.placeholder.com/30" alt="Siti profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                        <span style={{ fontWeight: 'bold', fontSize: 'larger' }}>Siti (@siti456)</span>
                                    </div>
                                    <div style={{ fontSize: 'larger' }}>"Tempatnya bagus dikelola dengan baik, terdapat banyak jenis satwa didalamnya. Ada kereta keliling untuk mengelilingi ragunanzoo agar tidak lelah berjalan kaki."</div>
                                </li>
                                <hr className="mt-[10px]" style={{ borderColor: '#C7C5B8' }} />
                                <li style={{ color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://via.placeholder.com/30" alt="Ahmad profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                        <span style={{ fontWeight: 'bold', fontSize: 'larger' }}>Ahmad (@ahmad789)</span>
                                    </div>
                                    <div style={{ fontSize: 'larger' }}>"Alternatif hiburan ramah anak dan ramah kantong emaknya. Dateng sabtu tgl 20 april dipenghujung libur lebaran, datang jam 10 dan masih agak sepi."</div>
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
                    <div className="inline-flex relative rounded-lg shadow-lg  bg-gradient-to-b from-[#1679AB] to-[#B9F4E0]">
                        <button className="absolute top-0 right-0 text-white text-2xl" onClick={handleCloseModal}>
                            &times;
                        </button>
                        <div className="p-4">
                            <AksesTransportasi />
                        </div>
                    </div>
                </div>



                            )}
        </section>
    );
}
