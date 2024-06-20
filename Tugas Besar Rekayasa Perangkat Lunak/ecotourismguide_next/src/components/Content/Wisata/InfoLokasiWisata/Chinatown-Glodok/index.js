import Image from "next/image";
import React from 'react';

export default function LokasiChinatownGlodok() {
    return (
        <section className="bg-[#B9F4E0] min-h-screen">
            <div className="relative w-full h-[500px] bg-black">
                <Image 
                    src="/detailwisata/chinatown/chinatown.jpg" 
                    alt="Taman Margasatwa Ragunan, Sumatera Utara" 
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-bold">Chinatown Glodok</h1>
                        <br />
                        <h6 className="text-3xl">Jakarta Barat</h6>
                    </div>
                </div>
            </div>

            <div className="flex-col space-y-6" style={{ marginTop: 50}}>
                <div className="max-w-[1024px] mx-auto flex flex-col space-y-5 mt-6 ml-35 mr-35 text-black font-poppins">
                    <div>
                        <h1 className="text-3xl font-bold mb-3">Detail Lokasi Wisata</h1>
                        <h3 className="text-lg text-justify">Chinatown Glodok di Jakarta terletak di kawasan Kota Tua, Jakarta Barat. Tepatnya, Glodok berada di sepanjang Jalan Pancoran, Jalan Gajah Mada, dan Jalan Hayam Wuruk, yang menjadi pusat kegiatan perdagangan dan kuliner khas Tionghoa. Kawasan ini juga berdekatan dengan beberapa landmark penting, seperti Petak Sembilan, sebuah pasar tradisional yang ramai, dan Vihara Dharma Bhakti, salah satu vihara tertua di Jakarta. Lokasinya yang strategis menjadikan Glodok sebagai salah satu destinasi wisata budaya dan kuliner yang populer di ibu kota.</h3>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md relative">
                        <a href="https://www.google.com/maps/place/Pasar+Pecinan+Glodok/@-6.142949,106.8145702,17.12z/data=!4m6!3m5!1s0x2e69f60794af519f:0xe79dcb4569eb7d7f!8m2!3d-6.1427907!4d106.8142058!16s%2Fg%2F1tdhpfr0?entry=ttu" target="_blank" rel="noopener noreferrer" className="absolute bottom-7 right-7 bg-[#2B294575] text-white text-xs px-4 py-2 rounded-full hover:bg-[#1F1E37]">
                            Buka di Google Maps
                        </a>
                        <Image 
                            src="/detailwisata/chinatown/petalokasi.png" 
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