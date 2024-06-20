import Image from "next/image";
import React from 'react';

export default function InfoLokasiWisata() {
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

            <div className="flex-col space-y-6" style={{ marginTop: 50}}>
                <div className="max-w-[1024px] mx-auto flex flex-col space-y-5 mt-6 ml-35 mr-35 text-black font-poppins">
                    <div>
                        <h1 className="text-3xl font-bold mb-3">Detail Lokasi Wisata</h1>
                        <h3 className="text-lg text-justify">Taman Margasatwa Ragunan di daerah Pasar Minggu, sekitar 20 km dari pusat kota Jakarta, Ia berada di ketinggian 50 m di atas permukaan laut dengan curah hujan 2300 mm, suhu 27 ° C dan kelembapan 60 %. Taman Margasatwa Ragunan berdiri di atas tanah latosol merah seluas 147 hektar.</h3>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md relative">
                        <a href="https://www.google.co.id/maps/dir//Taman+Margasatwa+Ragunan,+Jalan+Harsono+RM,+Ragunan,+South+Jakarta+City,+Jakarta/@-6.3111691,106.8380022,12.63z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69edfdb17f7b7d:0xf9dd2a3f5ab5069a!2m2!1d106.820353!2d-6.3059887?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer" className="absolute bottom-7 right-7 bg-[#2B294575] text-white text-xs px-4 py-2 rounded-full hover:bg-[#1F1E37]">
                            Buka di Google Maps
                        </a>
                        <Image 
                            src="/detailwisata/ragunan/petalokasi.png" 
                            alt="Preview Peta Google Maps" 
                            layout="responsive"
                            width={800}
                            height={600}
                        />
                    </div>
                    <div className="mb-6">
                    </div>
                </div>
            </div>
        </section>
    );
}