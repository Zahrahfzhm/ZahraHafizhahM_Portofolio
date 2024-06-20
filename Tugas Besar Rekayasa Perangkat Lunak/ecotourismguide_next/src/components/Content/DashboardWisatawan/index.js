import React from 'react';
import Cardconten from '@/components/Container/DashboardWisatawan/cardcontent';
import Cardwisata from '@/components/Container/DashboardWisatawan/cardwisata';

export default function DashboardWisatawanContent() {
    return (
        <div className="flex flex-col items-center pl-26 bg-green-200 max-md:pl-10">
            <section class="flex overflow-hidden relative flex-col items-start px-16 py-20 w-full text-white min-h-[755px] max-md:px-5 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ded300463fb133a03f71174cb5678e8092e599e6484ae92ce5c75ff2948b57c?apiKey=59541bf2346a4f44991d05930261be7f&" class="object-cover absolute inset-0 size-full h-11/12" alt="" />
            <div className="flex gap-5 ml-16 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow mt-16 text-white max-md:max-w-full">
                            <h1 className="relative text-6xl font-semibold max-md:max-w-full max-md:text-4xl">
                                Elevate Your Adventure Preserve Nature
                            </h1>
                            <p className="relative mt-6 text-2xl font-medium max-md:max-w-full">
                                Discover Sustainable Tourism Destinations in Indonesia, Enjoying the Beauty of Nature While Preserving the Environment
                            </p>
                            <a href="http://localhost:3000/Wisatawan/Katalog" className="flex justify-center items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1EC28B] hover:shadow-md px-16 py-5 mt-5 text-xl font-bold leading-5 text-white bg-[#1EC28B] rounded-lg max-w-[241px]">
                                Explore
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="z-10 p-48 pt-2 pb-24 w-full bg-green-200 max-md:px-5 max-md:max-w-full">
            <div class="flex gap-28 max-md:flex-col max-md:gap-0">
                <section class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <article class="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                    <img src="/logo_landscape.png" alt="ECO-TOURISM GUIDE" class="w-[500px] pl-2 mt-8" />
                    <p class="mt-6 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
                    Ekowisata atau eco-tourism adalah bentuk wisata yang bertujuan untuk
                    mengunjungi dan menikmati area alami yang belum terjamah, dengan cara
                    yang menjaga kelestarian lingkungan serta mendukung kesejahteraan
                    masyarakat lokal. Anda dapat menikmati keindahan alam sekaligus
                    berkontribusi pada pelestarian lingkungan dan kesejahteraan masyarakat
                    lokal. Selamat berpetualang secara bertanggung jawab!
                    </p>
                    <section class="mt-8 max-md:max-w-full">
                    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                        <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full transition-transform duration-300 hover:scale-105">
                            <div class="group flex flex-col grow justify-between px-16 py-10 w-full text-center bg-white rounded-2xl shadow-2xl transition-transform duration-300 transform hover:scale-105 max-md:px-5 max-md:mt-10">
                                <span class="text-5xl font-semibold text-emerald-500 leading-[56px] transition-transform transform group-hover:scale-110 max-md:text-4xl max-md:leading-[50px]">
                                    <span class="text-stone-950">30</span> +
                                </span>
                                <p class="mt-2 text-base font-medium leading-6 text-neutral-600 transition-transform transform group-hover:translate-y-1">
                                    Daerah Wisata
                                </p>
                            </div>
                        </article>
                        <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full transition-transform duration-300 hover:scale-105">
                            <div class="group flex flex-col grow justify-between px-16 py-10 w-full text-center bg-white rounded-2xl shadow-2xl transition-transform duration-300 transform group-hover:scale-105 max-md:px-5 max-md:mt-10">
                                <span class="text-5xl font-semibold text-emerald-500 leading-[56px] transition-transform duration-300 transform group-hover:scale-110 max-md:text-4xl max-md:leading-[50px]">
                                    <span class="text-stone-950">30</span> +
                                </span>
                                <p class="mt-2 text-base font-medium leading-6 text-neutral-600 transition-transform duration-300 transform group-hover:translate-y-1">
                                    Daerah Wisata
                                </p>
                            </div>
                        </article>
                    </div>
                    </section>
                    <section class="mt-6 max-md:max-w-full">
                    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                        <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full transition-transform duration-300 hover:scale-105">
                            <div class="group flex flex-col grow justify-between px-16 py-10 w-full text-center bg-white rounded-2xl shadow-2xl transition-transform duration-300 transform group-hover:scale-105 max-md:px-5 max-md:mt-10">
                                <span class="text-5xl font-semibold text-emerald-500 leading-[56px] transition-transform duration-300 transform group-hover:scale-110 max-md:text-4xl max-md:leading-[50px]">
                                    <span class="text-stone-950">6K</span> +
                                </span>
                                <p class="mt-2 text-base font-medium leading-6 text-neutral-600 transition-transform duration-300 transform group-hover:translate-y-1">
                                Kuliner Daerah
                                </p>
                            </div>
                        </article>
                        <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full transition-transform duration-300 hover:scale-105">
                            <div class="group flex flex-col grow justify-between px-16 py-10 w-full text-center bg-white rounded-2xl shadow-2xl transition-transform duration-300 transform group-hover:scale-105 max-md:px-5 max-md:mt-10">
                                <span class="text-5xl font-semibold text-emerald-500 leading-[56px] transition-transform duration-300 transform group-hover:scale-110 max-md:text-4xl max-md:leading-[50px]">
                                    <span class="text-stone-950">99</span> +
                                </span>
                                <p class="mt-2 text-base font-medium leading-6 text-neutral-600 transition-transform duration-300 transform group-hover:translate-y-1">
                                Penghargaan
                                </p>
                            </div>
                        </article>
                    </div>
                    </section>
                </article>
                </section>
                <section class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="relative">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbef8d9d1337739fba273b396a78fa39bf52194b70446840aa54b5c934218cdb?apiKey=59541bf2346a4f44991d05930261be7f&"
                        className="ml-60 mt-10 w-2/3 aspect-square rounded-2xl"
                        alt=""
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af0914aa07757647e0958fbbe37c71d056f688fecf134682751230b9c04a442?apiKey=59541bf2346a4f44991d05930261be7f&"
                        className="absolute top-72  w-2/3 aspect-square rounded-2xl"
                        alt=""
                    />
                </div>
                </section>
            </div>
            </section>
            <div class="flex flex-col px-10 pt-2 pb-10 w-full bg-slate-800 max-md:px-5 max-md:max-w-full">
            <div className="flex items-center justify-center pb-10 ">
                <div className="flex flex-col w-[30%] text-white text-center">
                    <div className="flex flex-col grow mt-16 max-md:max-w-full">
                        <h1 className="relative text-6xl font-semibold max-md:max-w-full max-md:text-4xl">
                            Tips and Trick Wisata Indonesia
                        </h1>
                    </div>
                </div>
            </div>
            <section class="self-center mt-9 w-full max-w-[1350px] max-md:max-w-full">
                <div class="flex gap-10 max-md:flex-col max-md:gap-0">
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
            <section class="self-center mt-10 w-full max-w-[1350px] max-md:max-w-full">
                <div class="flex gap-10 max-md:flex-col max-md:gap-0">
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
            <div class="flex justify-center">
                <a href="http://localhost:3000/Wisatawan/KontenPariwisata/listkonten">
                    <button class="px-8 py-5 mt-20 mb-10 text-lg font-bold leading-6 text-white whitespace-nowrap bg-emerald-500 rounded-lg max-md:px-5 max-md:mt-10">
                        Lainnya
                    </button>
                </a>
            </div>
        </div>
        <section class="flex flex-col justify-center px-5 py-20 w-full bg-white max-md:max-w-full">
        <header class="self-center text-6xl font-bold text-center text-cyan-900 leading-[67.2px] max-md:max-w-full max-md:text-4xl">
            Rekomendasi Wisata
        </header>
        <section class="flex justify-center items-center w-full mt-12 max-w-[1500px] mb-20 max-md:max-w-full mx-auto flex-col w-full">
            <section class="max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                    <Cardwisata
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fadc8866fb7de09b15ffbba59c1d60b055badca32ad25703339080df8de01330?apiKey=59541bf2346a4f44991d05930261be7f&"
                        title="Sunda Kelapa"
                        description="Di utara Jakarta, adalah pusat perdagangan sejak abad ke-16. Saksikan kapal tradisional Phinisi."
                        link="#"
                    />
                    <Cardwisata
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/081c81b2006632b7813a81be5ea5959f60aa9fdaece50b0416f79477bc301f45?apiKey=59541bf2346a4f44991d05930261be7f&"
                        title="Setu Babakan"
                        description="Pusat pelestarian budaya Betawi dengan rumah adat, kuliner khas, dan pertunjukan seni tradisional."
                        link="http://localhost:3000/Wisatawan/Wisata/Detail"
                    />
                    <Cardwisata
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3d60034c176b78267df56396683e9d1986389d6d4587c2edbbefb1ae14a511?apiKey=59541bf2346a4f44991d05930261be7f&"
                        title="Kota Tua Jakarta"
                        description="Area bersejarah dengan Museum Fatahillah, Museum Wayang, dan bangunan kolonial."
                        link="/Wisatawan/Wisata/Detail/KotaTua"
                    />
                </div>
            </section>
            <section class="mt-12 max-md:mt-10 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                    <Cardwisata
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6cb910e5122a0cf80630e2ce8c2ce80dce2a83b2723267f83a255eeb5ebc8b77?apiKey=59541bf2346a4f44991d05930261be7f&"
                        title="Glodok (Chinatown)"
                        description="Area pecinan dengan pasar tradisional, toko obat Tionghoa, dan kuil-kuil bersejarah."
                        link="/Wisatawan/Wisata/Detail/Chinatown"
                    />
                    <Cardwisata
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/35deb543888a3e01a358388d63f777b00d11a67c60c16517d0faafc7f6ea97d4?apiKey=59541bf2346a4f44991d05930261be7f&"
                        title="Pasar Jatinegara"
                        description="Pasar tradisional yang menjual berbagai barang, termasuk kebutuhan sehari-hari."
                        link="http://localhost:3000/Wisatawan/Wisata/Detail"
                    />
                    <Cardwisata
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2bcfdc4d76d2e3c8de01c66f741e3eeb8ae4b687b69a13c8af9c68429af52e?apiKey=59541bf2346a4f44991d05930261be7f&"
                        title="Taman Margasatwa Ragunan"
                        description="Kebun binatang dengan berbagai satwa eksotis dan lingkungan hijau yang luas."
                        link="http://localhost:3000/Wisatawan/Wisata/Detail"
                    />
                </div>
            </section>
            <section class="mt-12 max-md:mt-10 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                    <Cardwisata
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fcd451893a8560a960c8b530404b1d74db8e0a65809139576bbc722b16281ea7?apiKey=59541bf2346a4f44991d05930261be7f&"
                        title="Ancol"
                        description="Ancol Dreamland adalah destinasi sempurna untuk rekreasi keluarga."
                        link="http://localhost:3000/Wisatawan/Wisata/Detail"
                    />
                    <Cardwisata
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7de84f8d62638975f278d0219d009999282cf7da8bc74e8c950dd71cf0383232?apiKey=59541bf2346a4f44991d05930261be7f&"
                        title="Taman Ayodya"
                        description="Taman kecil yang terletak di Blok M, Jakarta Selatan, dengan pepohonan rindang dan area bermain anak. Cocok untuk santai dan rekreasi keluarga."
                        link="http://localhost:3000/Wisatawan/Wisata/Detail"
                    />
                    <Cardwisata
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3d60034c176b78267df56396683e9d1986389d6d4587c2edbbefb1ae14a511?apiKey=59541bf2346a4f44991d05930261be7f&"
                        title="Kota Tua Jakarta"
                        description="Area bersejarah dengan Museum Fatahillah, Museum Wayang, dan bangunan kolonial."
                        link="/Wisatawan/Wisata/Detail/KotaTua"
                    />
                </div>
            </section>
            </section>
            <div class="flex justify-center">
                <a href="http://localhost:3000/Wisatawan/Katalog">
                    <button class="px-8 py-5 mt-8 mb-10 text-lg font-bold leading-6 text-white whitespace-nowrap bg-emerald-500 rounded-lg max-md:px-5 max-md:mt-10">
                        Lainnya
                    </button>
                </a>
            </div>
            </section>
            <div class="flex flex-col w-full max-w-[1500px] max-md:mt-50 mt-20 mb-20 max-md:max-w-full">
                <section class="overflow-hidden relative flex-col justify-center items-center self-center px-16 pt-36 pb-28 w-full text-7xl font-semibold leading-10 text-center text-white whitespace-nowrap shadow-sm max-w-[1774px] min-h-[320px] rounded-[10px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/450207660d965ec5891122f15a44fc7b99af07f14578857049223fdf96f935dd?apiKey=59541bf2346a4f44991d05930261be7f&" alt="" class="object-cover absolute inset-0 size-full" />
                <span className="relative z-10 px-4 py-2 rounded">Daerah</span>
                </section>
                <section class="mt-10 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-10 max-md:flex-col max-md:gap-5">
                    <a href="http://localhost:3000/Wisatawan/ProfilDaerah/DaerahWisata" className="w-6/12 max-md:w-full">
                        <div className="relative flex items-center justify-center overflow-hidden bg-green-200 rounded-lg min-h-[226px] max-md:min-w-full">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5bf3417699cfc25fe2fb0835f9fc5811689af2ae97e5228d607689836831a4d?apiKey=59541bf2346a4f44991d05930261be7f&" alt="Surabaya" className="absolute inset-0 object-cover w-full h-full" />
                            <span className="relative z-10 px-4 py-2 text-5xl font-semibold text-white">Jakarta</span>
                        </div>
                    </a>
                    <a href="http://localhost:3000/Wisatawan/ProfilDaerah/DaerahWisata" className="w-6/12 max-md:w-full">
                        <div className="relative flex items-center justify-center overflow-hidden bg-green-200 rounded-lg min-h-[226px] max-md:min-w-full">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b550acaeba7eeda0b6b16a2542169099f8f31947e316d59499ed399f98ea7d52?apiKey=59541bf2346a4f44991d05930261be7f&" alt="Bandung" className="absolute inset-0 object-cover w-full h-full" />
                            <span className="relative z-10 px-4 py-2 text-5xl font-semibold text-white">Bandung</span>
                        </div>
                    </a>
                </div>
                </section>
                <section class="mt-10 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-10 max-md:flex-col max-md:gap-5">
                    <a href="http://localhost:3000/Wisatawan/ProfilDaerah/DaerahWisata" className="w-6/12 max-md:w-full">
                        <div className="relative flex items-center justify-center overflow-hidden bg-green-200 rounded-lg min-h-[226px] max-md:min-w-full">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/afb912cf50b4158faab1ce019f566f77592563708fdb4ab3f64bda6cd0128352?apiKey=59541bf2346a4f44991d05930261be7f&&" alt="Surabaya" className="absolute inset-0 object-cover w-full h-full" />
                            <span className="relative z-10 px-4 py-2 text-5xl font-semibold text-white">Surabaya</span>
                        </div>
                    </a>
                    <a href="http://localhost:3000/Wisatawan/ProfilDaerah/DaerahWisata" className="w-6/12 max-md:w-full">
                        <div className="relative flex items-center justify-center overflow-hidden bg-green-200 rounded-lg min-h-[226px] max-md:min-w-full">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2371324036005988b1aed1ea4e691ccc93fea6240f5d3744362872523cacf6e0?apiKey=59541bf2346a4f44991d05930261be7f&" alt="Bandung" className="absolute inset-0 object-cover w-full h-full" />
                            <span className="relative z-10 px-4 py-2 text-5xl font-semibold text-white">Madiun</span>
                        </div>
                    </a>
                </div>
                </section>
                <section class="mt-10 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-10 max-md:flex-col max-md:gap-5">
                    <a href="hhttp://localhost:3000/Wisatawan/ProfilDaerah/DaerahWisata" className="w-6/12 max-md:w-full">
                        <div className="relative flex items-center justify-center overflow-hidden bg-green-200 rounded-lg min-h-[226px] max-md:min-w-full">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c790467c7f2142e0d2c2ee2f36066e037bb0b35632f1e93a82f75b1b14aa0fa4?apiKey=59541bf2346a4f44991d05930261be7f&" alt="Surabaya" className="absolute inset-0 object-cover w-full h-full" />
                            <span className="relative z-10 px-4 py-2 text-5xl font-semibold text-white">Banten</span>
                        </div>
                    </a>
                    <a href="http://localhost:3000/Wisatawan/ProfilDaerah/ListDaerah" className="w-6/12 max-md:w-full">
                        <div className="relative flex items-center justify-center overflow-hidden bg-green-200 rounded-lg min-h-[226px] max-md:min-w-full">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccec3df1c8a14e419c4b2fa1e542cfa1a68b0ac941c6bed36099b356afe7907?apiKey=59541bf2346a4f44991d05930261be7f&" alt="Bandung" className="absolute inset-0 object-cover w-full h-full" />
                            <span className="relative z-10 px-4 py-2 text-5xl font-semibold text-white">lainnya...</span>
                        </div>
                    </a>
                </div>
                </section>
            </div>
        </div>
    );
}
