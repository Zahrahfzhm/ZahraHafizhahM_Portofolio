'use client'

import { useState, useEffect } from 'react';
import Cardconten from "@/components/Container/DashboardWisatawan/cardcontent";

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

export default function DashboardWisatawanlistContent() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContents = async () => {
            try {
                const response = await fetch('/api/v1/getContent'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setContents(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContents();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const chunkedContents = chunkArray(contents, 2);

    return (
        <div className="flex flex-col px-10 pt-2 pb-10 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex items-center justify-center pb-10 ">
                <div className="flex flex-col w-[35%] text-emerald-500  text-center">
                    <div className="flex flex-col grow mt-16 max-md:max-w-full">
                        <h1 className="relative text-6xl max-md:max-w-full max-md:text-4xl">
                            Tips & Trick Wisata Indonesia
                        </h1>
                    </div>
                </div>
            </div>
            <section className="self-center mt-4 w-full max-w-[1350px] max-md:max-w-full">
                <div className="flex gap-10 max-md:flex-col max-md:gap-0">
                <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <Cardconten 
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/70e4b53c4616f5f85d131324cc997ab03c1311ede958f696348a615d937a3011?apiKey=59541bf2346a4f44991d05930261be7f&"
                            title="Rahasia Sukses: Panduan Pintar Berpetualang di Indonesia"
                            description="Panduan praktis untuk menjelajahi keindahan alam dan budaya dengan lancar."
                            likes="50"
                            views="12K"
                            time="15 min ago"
                            link="http://localhost:3000/Wisatawan/KontenPariwisata/isikonten"
                        />
                    </article>
                    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <Cardconten 
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5218109e6d98372a74d29d9e266642adf15c334f603b40704a0bbf9c3aa3a6cc?apiKey=59541bf2346a4f44991d05930261be7f&"
                            title="Merajut Bahasa Bumi: Panduan Bahasa Daerah untuk Wisatawan"
                            description="Terhubung dengan Budaya Lokal: Pelajari Bahasa Daerah Indonesia untuk Pengalaman Wisata yang Autentik."
                            likes="100"
                            views="15K"
                            time="20 min ago"
                            link="http://localhost:3000/Wisatawan/KontenPariwisata/isikonten"
                        />
                    </article>
                </div>
            </section>
            <section className="self-center mt-4 w-full max-w-[1350px] max-md:max-w-full">
                <div className="flex gap-10 max-md:flex-col max-md:gap-0">
                <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <Cardconten 
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b9b244b5dd93ca15eebc78093d7859277c7673400daa5b5ac7e41606612c7e?apiKey=59541bf2346a4f44991d05930261be7f&"
                            title="Bawaan Berpetualang: Panduan Pintar Membawa Perlengkapan Wisata"
                            description="Daftar Perlengkapan Wisata Wajib Bawa. Jelajahi alam dengan lengkap dan nyaman dengan barang-barang penting ini."
                            likes="20"
                            views="9K"
                            time="30 min ago"
                            link="http://localhost:3000/Wisatawan/KontenPariwisata/isikonten"
                        />
                    </article>
                    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <Cardconten 
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ae5c36bee0fd1a8e77b98c34bcdeba4f52321f706c90e69edce04f70bdd445c2?apiKey=59541bf2346a4f44991d05930261be7f&"
                            title="BMenikmati Wisata dengan Lebih Banyak Kenangan: Tips dan Trik Berpetualang"
                            description="Temukan cara cerdas untuk meraih pengalaman berwisata yang tak terlupakan dengan tips praktis ini. dari persiapan matang hingga trik nya."
                            likes="3k"
                            views="20K"
                            time="35 min ago"
                            link="http://localhost:3000/Wisatawan/KontenPariwisata/isikonten"
                        />
                    </article>
                </div>
            </section>
            {chunkedContents.map((chunk, index) => (
                <section key={index} className="self-center mt-4 w-full max-w-[1350px] max-md:max-w-full">
                    <div className="flex gap-10 max-md:flex-col max-md:gap-0">
                        {chunk.map((content, idx) => (
                            <article key={idx} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <Cardconten
                                    imageSrc={content.url}
                                    title={content.Judul}
                                    description={content.Caption}
                                    likes={content.likes || 'N/A'}
                                    views={content.views || 'N/A'}
                                    time={content.time || 'N/A'}
                                    link={content.link || '#'}
                                />
                            </article>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}