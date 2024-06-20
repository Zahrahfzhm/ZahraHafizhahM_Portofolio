"use client"

import Image from "next/image";
import AsideSmallContainer from "@/components/Container/DashboardAdmin/asideSmallContainer";

export default function SmallContent(){
    const handleClick = () => {

    };
    return(
        <AsideSmallContainer>
            <button
            className="flex flex-col gap-justify-center text-center whitespace-nowrap max-w-[273px]"
            onClick={handleClick}
            >
            <div className="flex gap-16 px-8 py-3 rounded-xl">
                <div className="shrink-0 gap-0 aspect-square fill-white w-[55px] ">
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/615a7be668fbfec1dfb974588e1241fa2c2de12f9db1cf429da65608115ee2e7?apiKey=2b13a1e2364a4d3f8744de572dd64729&"
                    alt="Profile Picture"
                    width={55}
                    height={55}
                />
                </div>
                <div className="flex flex-col flex-1 my-auto">
                <div className="text-left">
                    <div className="gap-0 text-sm font-bold text-black">Nama</div>
                    <div className="gap-0 mt-3 text-sm text-slate-800">Jabatan</div>
                </div>
                </div>
            </div>
            </button>
        </AsideSmallContainer>
    )
}