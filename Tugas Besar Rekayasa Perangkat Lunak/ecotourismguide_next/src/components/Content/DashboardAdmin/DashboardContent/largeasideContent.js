"use client"

import Image from "next/image";
import AsideLargeContainer from "@/components/Container/DashboardAdmin/asideLargeContainer";

export default function LargeContent(handleClick1, handleClick2, handleClick3, handleClick4, handleClick5, handleClick6, handleClick7){
    const handleClick = () => {

    };
    return(
        <AsideLargeContainer>
            <div class="flex flex-col px-5 py-4 w-full rounded-xl">
            <h2 class="text-xl font-bold text-stone-900">Data yang perlu diverifikasi</h2>
            <article class="mt-6 w-full text-center ">
            <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick1}>
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/da4140a1cde539818458283fa6d40d49e680665ed1cbaec28fe7163deca00ba9?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                    alt="Nama Wisata"
                    width={84}
                    height={84}
                />
                <div class="flex flex-col my-auto text-left">
                <strong className="text-md">Nama Wisata</strong>
                <div class="mt-5 text-md">Nama UMKM</div>
                </div>
            </button>
            </article>
            <article class="mt-6 w-full text-center ">
            <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick1}>
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d653ae069d9cf151f1d01767e68b75eeab5be7e492eee8885d30561bb2034f56?apiKey=59541bf2346a4f44991d05930261be7f&"
                    alt="Nama Wisata"
                    width={84}
                    height={84}
                />
                <div class="flex flex-col my-auto text-left">
                <strong className="text-md">Nama Wisata</strong>
                <div class="mt-5 text-md">Nama UMKM</div>
                </div>
            </button>
            </article>
            <article class="mt-6 w-full text-center ">
            <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick1}>
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/45e229172f71f64c3257ab55b5851d509bc8259c042ebd75ec7f78ba496062a7?apiKey=59541bf2346a4f44991d05930261be7f"
                    alt="Nama Wisata"
                    width={84}
                    height={84}
                />
                <div class="flex flex-col my-auto text-left">
                <strong className="text-md">Nama Wisata</strong>
                <div class="mt-5 text-md">Nama UMKM</div>
                </div>
            </button>
            </article>
            <article class="mt-6 w-full text-center ">
            <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick1}>
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5578c0a3a4f77f838b5a15d923036be723298ce1d5b1c1abfd9842d85aa0e69?apiKey=59541bf2346a4f44991d05930261be7f&"
                    alt="Nama Wisata"
                    width={84}
                    height={84}
                />
                <div class="flex flex-col my-auto text-left">
                <strong className="text-md">Nama Wisata</strong>
                <div class="mt-5 text-md">Nama UMKM</div>
                </div>
            </button>
            </article>
            <article class="mt-6 w-full text-center ">
            <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick1}>
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc79aa73aa87191668c07254cb564dddc71a37ae8422636eb6675ae6acea0e71?apiKey=59541bf2346a4f44991d05930261be7f& "
                    alt="Nama Wisata"
                    width={84}
                    height={84}
                />
                <div class="flex flex-col my-auto text-left">
                <strong className="text-md">Nama Wisata</strong>
                <div class="mt-5 text-md">Nama UMKM</div>
                </div>
            </button>
            </article>
            <article class="mt-6 w-full text-center ">
            <button class="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md" onClick={handleClick1}>
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/15cfac5fb4ae1ebc84018cd3bdb5aa70801edff75b074103e04c8d3e4a0829aa?apiKey=59541bf2346a4f44991d05930261be7f&"
                    alt="Nama Wisata"
                    width={84}
                    height={84}
                />
                <div class="flex flex-col my-auto text-left">
                <strong className="text-md">Nama Wisata</strong>
                <div class="mt-5 text-md">Nama UMKM</div>
                </div>
            </button>
            
            </article>
        </div>
    </AsideLargeContainer>
    )
}