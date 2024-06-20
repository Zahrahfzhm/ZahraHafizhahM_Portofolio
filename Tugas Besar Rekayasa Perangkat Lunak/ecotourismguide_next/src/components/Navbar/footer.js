import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#2B2945] text-white py-8 px-4 relative bottom-0 w-full">
            <div className="flex justify-center mb-8">
                <div className="w-1/4">
                    <img src="/logo_landscape_white.png" alt="ECO-TOURISM GUIDE" className="w-auto h-20 mb-4" />
                    <p className="mt-4 mr-6">Menyediakan informasi tentang destinasi pariwisata yang ramah lingkungan dan berkualitas, serta kegiatan wisata yang mendukung pelestarian alam dan keberlanjutan ekonomi lokal.</p>
                </div>
                <div className="w-1/8 mr-20">
                    <h2 className="text-lg font-semibold mb-1 h-8">Company</h2>
                    <ul>
                        <li><a href="http://localhost:3000/Wisatawan/AboutUS" className="hover:text-gray-300">About us</a></li>
                        <li><a href="http://localhost:3000/Wisatawan/ContactUS" className="hover:text-gray-300">Contact us</a></li>
                        <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-300">Search</a></li>
                    </ul>
                </div>
                <div className="w-1/8 mr-20">
                    <h2 className="text-lg font-semibold mb-1 h-8">Support</h2>
                    <img src="/kamenkraft.svg" alt="Kemenkrat" className="w-auto h-[120px] mb-1" />
                </div>
                <div className="w-1/8 mr-15">
                    <h2 className="text-lg font-semibold mb-1 h-8">Social Media</h2>
                    <div className="flex space-x-4">
                        <FaFacebookF className="text-2xl hover:text-gray-300 cursor-pointer" />
                        <FaInstagram className="text-2xl hover:text-gray-300 cursor-pointer" />
                        <FaTwitter className="text-2xl hover:text-gray-300 cursor-pointer" />
                        <FaLinkedinIn className="text-2xl hover:text-gray-300 cursor-pointer" />
                    </div>
                </div>
            </div>
            <hr className="border-gray-600 my-8" />
            <p className="text-center">&copy; 2024 EcoTourismGuide. All rights reserved</p>
        </footer>
    );
}