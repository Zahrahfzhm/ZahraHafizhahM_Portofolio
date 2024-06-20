"use client";

import React, { useState } from 'react';
import MidContainer from "@/components/Container/DashboardAdmin/midContainer";
import { useRouter } from 'next/navigation';

export default function MainContent() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const router = useRouter();

    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleSaveAndRedirect = async () => {
        if (!file || !title || !caption) return;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('caption', caption);

        const response = await fetch('/api/v1/uploadKonten', {
            method: 'POST',
            body: formData
        });
        
        const { url } = await response.json();

        await fetch(url, {
            method: 'PUT',
            body: file,
        });

    };

    return (
        <MidContainer>
            <section className="flex flex-col px-7 py-10 w-full rounded-xl max-md:pl-5 max-md:max-w-full">
                <h2 className="self-start ml-5 text-xl font-bold text-center max-md:ml-2.5">Upload Konten</h2>
                <div className="flex flex-col justify-center self-center mt-3.5 w-full max-md:max-w-full">
                    <div className="flex flex-col px-9 pt-2.5 pb-8 rounded-3xl max-md:px-5 max-md:max-w-full">
                        <h3 className="text-base font-bold max-md:max-w-full">Judul Konten</h3>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Tulis Judul disini..."
                            className="items-start px-4 pt-3.5 pb-14 mt-2 text-xs bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center self-center mt-4 w-full max-md:max-w-full">
                    <div className="flex flex-col px-9 pt-5 pb-11 rounded-3xl max-md:px-5 max-md:max-w-full">
                        <h3 className="text-base font-bold max-md:max-w-full">Upload Video/Gambar</h3>
                        <div className="flex flex-col justify-center pt-6 pb-2.5 mt-2.5 bg-white rounded-xl border border-dashed border-black border-opacity-30 max-md:max-w-full">
                            <div className="flex flex-col self-center max-w-full w-[225px]">
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e6beb5578ac8f3f5d7a7f31cfcc6199cd78cca675637a8c7367a42d450e60a?apiKey=2b13a1e2364a4d3f8744de572dd64729&" alt="" className="self-center w-12 aspect-square" />
                                <p className="mt-6 text-sm">Select a file or drag and drop here</p>
                                <p className="mt-3 text-xs text-black text-opacity-40">
                                    {file?.name ? file.name : 'PNG, JPG, JPEG'}
                                </p>
                                <label className="justify-center self-center px-4 py-3 mt-6 text-xs uppercase bg-white rounded-md border border-solid border-zinc-300 cursor-pointer">
                                    <span>Select file</span>
                                    <input type="file" className="hidden" accept=".png, .jpg, .jpeg" onChange={handleFileChange} />
                                </label>
                            </div>
                            <p className="text-xs max-md:max-w-full ml-3">Upload hanya foto</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center self-center mt-3.5 w-full max-md:max-w-full">
                    <div className="flex flex-col justify-center max-md:max-w-full">
                        <div className="flex flex-col px-9 pt-5 pb-9 rounded-3xl max-md:px-5 max-md:max-w-full">
                            <h3 className="text-base font-bold max-md:max-w-full">Upload Caption<br /></h3>
                            <textarea
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                                placeholder="Tulis caption disini..."
                                className="items-start px-3 pt-3.5 pb-40 mt-3 text-xs bg-white rounded-xl max-md:pr-5 max-md:pb-10 max-md:max-w-full"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <button
                    className="justify-center self-end px-12 py-3.5 mt-7 mr-8 text-base font-medium text-center text-white whitespace-nowrap rounded-xl bg-neutral-900 max-md:px-5 max-md:mr-2.5"
                    onClick={handleSaveAndRedirect}
                >
                    Simpan
                </button>
            </section>
        </MidContainer>
    );
}
