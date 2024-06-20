export default function ContactUS() {
    return (
        <div className="flex justify-center mt-44 min-h-screen bg-white px-10">
                <div className="flex max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src="\logo_potrait.png"
                            className="w-80 h-auto"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex flex-col max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                            <div className="text-5xl font-bold text-black max-md:max-w-full max-md:text-4xl mt-10">
                                Contact us
                            </div>
                            <div className="justify-between mt-14 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow font-bold max-md:mt-7">
                                            <div className="text-2xl text-emerald-500">Visit us</div>
                                            <div className="mt-4 text-lg text-black">
                                            Jl. Telekomunikasi. 1, Telkom University, Jawa Barat 40257
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col text-lg font-bold text-black max-md:mt-7">
                                            <div className="text-2xl text-emerald-500">Contact</div>
                                            <div className="mt-4">avies@ecotourism.com</div>
                                            <div className="mt-2">(+62)82122619046</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
