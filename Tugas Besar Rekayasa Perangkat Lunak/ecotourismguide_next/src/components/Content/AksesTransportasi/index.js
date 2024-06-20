"use client"
import { useRouter } from 'next/navigation';

export default function AksesTransportasi() {
    const router = useRouter();

    const handleBusClick = (event) => {
        event.preventDefault();
        router.push('');
    };

    const handleAirplaneClick = (event) => {
        event.preventDefault();
        router.push('');
    };

    const handleOnlineTransportClick = (event) => {
        event.preventDefault();
        router.push('');
    };

    const handleTrainClick = (event) => {
        event.preventDefault();
        router.push('');
    };

    return (
        
            <div className="flex flex-col items-center px-10 pt-4 pb-7 mt-24 max-w-full rounded-xl bg-gradient-to-b from-[#1679AB] to-[#B9F4E0] w-[300px] max-md:px-3 max-md:mt-5">
                <div className="text-xl font-bold text-white">Akses Transportasi</div>
                <div className="flex gap-3 justify-between mt-6 max-md:mt-5">
                    <div className="flex flex-col text-xs font-bold text-center whitespace-nowrap text-zinc-400">
                        <div className="flex flex-col justify-center">
                            <button onClick={handleBusClick}>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4452cce2216e05fbdbff5d36792001a160df2b47975421fad9c7dea2dc0f45?apiKey=2b13a1e2364a4d3f8744de572dd64729&" className="self-center aspect-[1.2] w-[40px]" />
                                <div className="mt-2 text-white">Bus</div>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center mt-8 max-md:mt-5">
                            <button onClick={handleAirplaneClick}>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f8b798ae111fff6d5c753c91a0722a62bc798134d1ae12380bc675cdd3f1df3?apiKey=2b13a1e2364a4d3f8744de572dd64729&" className="self-center aspect-[1.2] w-[40px]" />
                                <div className="mt-2 text-white">Airplane</div>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col self-start mt-1.5">
                        <div className="flex flex-col flex-wrap justify-center content-center">
                            <div className="flex gap-2 justify-center content-center">
                                <button onClick={handleOnlineTransportClick}>
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7557e2f16a848c296f8f7191f1bcc774b783dd2c706c875ddd61ccc557d5d3a?apiKey=2b13a1e2364a4d3f8744de572dd64729&" className="shrink-0 aspect-[1.27] w-[35px]" />
                                </button>
                                <button onClick={handleOnlineTransportClick}>
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca1f5729ca9130ce8daac1f997870bf6712eb142768576ec06747664962c7615?apiKey=2b13a1e2364a4d3f8744de572dd64729&" className="shrink-0 aspect-[1.27] w-[35px]" />
                                </button>
                            </div>
                            <div className="mt-2 text-xs font-bold text-center text-white">Online Transportation</div>
                        </div>
                        <div className="flex flex-col justify-center self-center mt-7 text-xs font-bold text-right whitespace-nowrap text-zinc-400 w-[35px] max-md:mt-5">
                            <button onClick={handleTrainClick}>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d7198a34e21d405aad888274be25a6bbfa3bd652dc0bf8103e827009ad9c664?apiKey=2b13a1e2364a4d3f8744de572dd64729&" className="self-center w-full aspect-[1.04]" />
                                <div className="mt-2 text-white">Train</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    
    );
}
