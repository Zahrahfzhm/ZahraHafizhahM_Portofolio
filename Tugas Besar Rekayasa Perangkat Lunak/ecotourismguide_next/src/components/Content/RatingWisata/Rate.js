import { Star } from "@phosphor-icons/react/dist/ssr";

export default function RatingWisata(){
    return(
        <div className="mx-36">
            <p className="pt-10 text-xl font-bold">Rating Wisata</p>

            <div className="flex flex-col mt-6 px-4 py-2 bg-white rounded-lg shadow-md">
                <p className="text-base font-semibold text-balance">TelU Ocean View</p>
                <p className="mt-1 text-xs font-normal text-slate-500 text-pretty">Graha Merah Putih, The Telkom Hub, Jl. Gatot Subroto No.Kav. 52, RT.6/RW.1, Kuningan Bar., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12710</p>
                <p className="text-xs font-normal text-slate-500 text-pretty">Dikunjungi pada tanggal dd/mm/yy.</p>

                <div className="flex flex-row mt-6">
                    <Star size={46} className=""/>
                    <Star size={46} className=""/>
                    <Star size={46} className=""/>
                    <Star size={46} className=""/>
                    <Star size={46} className=""/>
                </div>
                
                <p className="mt-8 text-sm font-semibold text-balance">Berikan ulasanmu, apa yang bikin kamu puas?</p>    
                <textarea type="text" className="mt-1.5 px-4 py-2 w-1/2 h-36 border border-gray-400 rounded-lg text-xs text-top" style={{ lineHeight: '1' }} placeholder="Yuk, ceritain kepuasanmu tentang kualitas tempat wisata dan pelayanannya" />

                <p className="mt-6 text-sm font-semibold text-balance">Unggah pengalaman mengesankanmu</p>
                <div className="mt-6">
                    <input type="file" className="mt-2 text-sm" accept=".jpg, .png, .mp4"/>
                </div>
                    
                <div className="mt-12 mb-2">
                    <button className="bg-[#1EC28B] hover:bg-[#169b6b] text-white font-medium py-2 px-4 rounded-lg">
                        Kirim Ulasan
                    </button>
                </div>
            </div>
        </div>
    );
}