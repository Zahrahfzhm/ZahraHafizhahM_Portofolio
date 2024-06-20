"use client"

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Gear, HouseSimple, IdentificationBadge, SignOut, TrayArrowUp } from "@phosphor-icons/react";


export default function Sidebar() {
    const router = useRouter();

    const handleClickVerifikasi = (event) => {
        event.preventDefault()
        router.push('/DinasPariwisata/Verifikasi');
    };

    const handleClickDashboard = (event) => {
        event.preventDefault()
        router.push('/DinasPariwisata/Dashboard');
    };

    const handleClickUpload = (event) => {
        event.preventDefault()
        router.push('/DinasPariwisata/Upload');
    };

    return (
        <div className="flex h-screen w-[240px]">
            <div className="bg-white-800 text-black flex flex-col items-center ">
                <div className="p-3">
                    <Image src="/logo_potrait.png" alt="Logo"  width={120} height={120}/>
                </div>
                <div className="mt-0 flex flex-col p-8 ">
                    <button className="text-left w-[208px] h-[60px] text-md bg-white hover:bg-[#1EC28B] hover:shadow-md hover:text-white shadow-md text-black px-7 py-2 rounded-lg transition-colors duration-300 ease-in-ou "
                        onClick={handleClickDashboard}>
                        <div className="flex items-center space-x-2">
                            <HouseSimple size={20} />
                            <span>Dashboard</span>
                        </div>
                    </button>
                    <button
                        className="text-left w-[208px] h-[60px] text-md bg-white hover:bg-[#1EC28B] hover:shadow-md hover:text-white shadow-md text-black px-7 py-2 rounded-lg transition-colors duration-300 ease-in-out mt-6"
                        onClick={handleClickVerifikasi}
                    >
                        <div className="flex items-center space-x-2">
                            <IdentificationBadge size={20} />
                            <span>Verifikasi UMKM</span>
                        </div>
                    </button>
                    <button 
                        className="text-left w-[208px] h-[60px] text-md bg-white hover:bg-[#1EC28B] hover:shadow-md hover:text-white shadow-md text-black px-7 py-2 rounded-lg transition-colors duration-300 ease-in-out mt-6"
                        onClick={handleClickUpload}
                    >
                        <div className="flex items-center space-x-2">
                            <TrayArrowUp size={20} />
                            <span>Upload Konten</span>
                        </div>
                    </button>
                    <button className="text-left w-[208px] h-[60px] text-md bg-white hover:bg-[#1EC28B] hover:shadow-md hover:text-white shadow-md text-black px-7 py-2 rounded-lg transition-colors duration-300 ease-in-out mt-6">
                        <div className="flex items-center space-x-2">
                            <Gear size={20} />
                            <span>Pengaturan</span>
                        </div>
                    </button>
                    <button className="text-left w-[208px] h-[60px] text-md bg-white hover:bg-[#EB5757] hover:shadow-md hover:text-white shadow-md text-black px-8 py-2 rounded-lg transition-colors duration-300 ease-in-out mt-6">
                        <div className="flex items-center space-x-2">
                            <SignOut size={20} />
                            <span>Keluar</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
