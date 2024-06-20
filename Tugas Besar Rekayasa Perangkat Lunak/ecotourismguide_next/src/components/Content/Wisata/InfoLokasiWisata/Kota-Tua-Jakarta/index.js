import Image from "next/image";
import React from 'react';

export default function LokasiKotaTua() {
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

            <div className="flex-col space-y-6" style={{ marginTop: 50}}>
                <div className="max-w-[1024px] mx-auto flex flex-col space-y-5 mt-6 ml-35 mr-35 text-black font-poppins">
                    <div>
                        <h1 className="text-3xl font-bold mb-3">Detail Lokasi Wisata</h1>
                        <h3 className="text-lg text-justify">Daerah ini terletak di antara Kali Besar Barat (barat), Kali Besar Timur (timur), Jalan Pintu Besar Utara (utara), dan Jalan Gajah Mada (selatan). Untuk alamat tepatnya yakni di Mangga Besar, Kecamatan Taman Sari, Kota Jakarta Barat.</h3>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md relative">
                        <a href="https://www.google.com/maps/dir//Kawasan+Kota+Tua,+Taman+Fatahillah+No.1,+RT.7%2FRW.7,+Pinangsia,+Taman+Sari,+West+Jakarta+City,+Jakarta+11110/@-6.134737,106.8136804,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69ec2a940017ed:0xdfce12d4a0938133!2m2!1d106.8136795!2d-6.1350687?entry=ttu" target="_blank" rel="noopener noreferrer" className="absolute bottom-7 right-7 bg-[#2B294575] text-white text-xs px-4 py-2 rounded-full hover:bg-[#1F1E37]">
                            Buka di Google Maps
                        </a>
                        <Image 
                            src="/detailwisata/kotatua/petalokasi.png" 
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