"use client"

import Image from "next/image";
import InputSearch from "@/components/Content/DashboardAdmin/InputSearch";
import MidContainer from "@/components/Container/DashboardAdmin/midContainer";


export default function MainContent () {
    const handleClick = () => {

    };
    return(
        <MidContainer>
            <div className="flex flex-col justify-center max-w-full">
                <section className="flex flex-col px-6 pt-5 pb-5 w-full rounded-xl max-md:pl-5 max-md:max-w-full ">
                    <div className="flex justify-between items-center px-px max-md:flex-wrap max-md:max-w-full">
                    <h1 className="self-stretch my-auto text-xl font-bold text-center text-black">Hi, ..... !</h1>
                    </div>
                    <h2 className="mt-8 text-xl font-bold text-left text-black max-md:mt-10 max-md:max-w-full">Data terbaru</h2>
                    <div className="px-0.5 mt-3.5 max-md:max-w-full">
                    <div className="grid grid-cols-1 gap-4 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <article className="flex flex-col">
                            <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3 ">
                                <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86] ">
                                <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cfe0ed407812cf4f05d18fe06a35b10a74e4ead7e1c9b90c7a0f83d68d222e?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                                    alt="Wisata 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 "
                                />
                                <div className="relative flex mt-[80%] justify-between space-x-8">
                                    <h3 className="text-[10px] text-left">Nama Wisata <br /> Nama UMKM</h3>
                                    <div className="text-[10px] flex items-center">
                                        <p>Lokasi</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col">
                            <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3">
                                <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86]">
                                <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5702608afba7fc3cbd45a2fb37a5703ee48481dab4bd83db9876759e21cd365?apiKey=59541bf2346a4f44991d05930261be7f&"
                                    alt="Wisata 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0"
                                />
                                <div className="relative flex mt-[80%] justify-between space-x-8">
                                    <h3 className="text-[10px] text-left">Nama Wisata <br /> Nama UMKM</h3>
                                    <div className="text-[10px] flex items-center">
                                        <p>Lokasi</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col">
                            <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3">
                                <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86]">
                                <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dd88cf46762619249b0e2180c4a80d615f89e28e4c3028d8a65dc4e6d39112c?apiKey=59541bf2346a4f44991d05930261be7f&"
                                    alt="Wisata 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 "
                                />
                                <div className="relative flex mt-[80%] justify-between space-x-8">
                                    <h3 className="text-[10px] text-left">Nama Wisata <br /> Nama UMKM</h3>
                                    <div className="text-[10px] flex items-center">
                                        <p>Lokasi</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col">
                            <div className="flex flex-col grow justify-center font-bold text-center text-white max-md:mt-3">
                                <div className="flex overflow-hidden relative flex-col gap-0 justify-between items-end px-5 pt-20 pb-5 w-full aspect-[0.86] rounded-xl">
                                <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ace4c1f57e42be82c053aac8e04ef7987a16d8a24fbe84d0a3e9a21957044149?apiKey=59541bf2346a4f44991d05930261be7f&"
                                    alt="Wisata 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0"
                                />
                                <div className="relative flex mt-[80%] justify-between space-x-8">
                                    <h3 className="text-[10px] text-left">Nama Wisata <br /> Nama UMKM</h3>
                                    <div className="text-[10px] flex items-center">
                                        <p>Lokasi</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    </div>
                    <div className="flex gap-5 mt-7 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <h2 className="flex-auto my-auto text-xl font-bold text-center text-black">Statistik Wisata</h2>
                        </div>
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/46937bf5dfba81cd0a33985c696b83bd0c284df21555ca11a42fef23d7049384?apiKey=59541bf2346a4f44991d05930261be7f&"
                        alt="Statistics Visualization"
                        className="self-center mt-4 w-full aspect-[1.85] max-w-[710px] max-md:max-w-full"
                        />
                </section>
            </div>
        </MidContainer>
    )
}