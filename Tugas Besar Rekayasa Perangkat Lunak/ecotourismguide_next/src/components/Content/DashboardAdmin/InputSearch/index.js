import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";


export default function InputSearch() {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if(event.key === "Enter" || event.type === "click" ){
            event.preventDefault()
            const keyword = searchRef.current.value
            alert("search")
        }
    }

    return(
        <div className="flex gap-0 px-2 py-1 rounded-xl bg-zinc-50 bg-opacity-90 shadow-md">
        <div className="flex items-center">
            <button className="p-1.5 text-lg font-medium" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
            <input 
            type="text" 
            placeholder="Search..." 
            className="outline-none bg-zinc-50 border-none text-lg focus:text-black" 
            ref={searchRef}
            onKeyDown={handleSearch}
            />
        </div>
        </div>
    )
}