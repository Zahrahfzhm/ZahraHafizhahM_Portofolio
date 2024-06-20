import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <nav className="shadow-md">
            <div className="flex items-center justify-between mt-0 text-lg bg-white h-[70px]">
                <div className="ml-5 p-2">
                    <Link href="http://localhost:3000/Wisatawan" legacyBehavior>
                        <a>
                            <Image className="px-4 py-2" src="/logo_landscape.png" alt="Logo" width={200} height={120} />
                        </a>
                    </Link>
                </div>
                <div className="space-x-20 mr-5 p-2">
                    <Link href="http://localhost:3000/Wisatawan/ContactUS" legacyBehavior>
                        <a className="hover:bg-[#1EC28B] hover:shadow-md hover:text-white text-black px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out">
                            Contact Us
                        </a>
                    </Link>
                    <Link href="http://localhost:3000/Wisatawan/AboutUS" legacyBehavior>
                        <a className="hover:bg-[#1EC28B] hover:shadow-md hover:text-white text-black px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out">
                            About Us
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
