"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import AsideLargeContainer from "@/components/Container/DashboardAdmin/asideLargeContainer";

export default function LargeContent({ handleClick1 }) {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContents = async () => {
            try {
                const response = await fetch('/api/v1/getContent');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setContents(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContents();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const fetchContents = async () => {
                try {
                    const response = await fetch('/api/v1/getContent');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setContents(data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchContents();
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <AsideLargeContainer>
            <div className="flex flex-col px-5 py-4 w-full rounded-xl">
                <h2 className="text-xl font-bold text-stone-900">Daftar Konten</h2>
                {contents.map((content) => (
                    <article key={content.id} className="mt-6 w-full text-center">
                        <button
                            className="flex gap-3.5 py-2 pr-5 pl-2 bg-emerald-500 rounded-xl w-full shadow-md"
                            onClick={() => handleClick1(content.id)}
                        >
                            <Image
                                src={content.url}
                                alt={content.Judul}
                                width={84}
                                height={84}
                                className="rounded-lg"
                            />
                            <div className="flex flex-col my-auto justify-center items-center">
                                <strong className="text-xxl">{content.Judul}</strong>
                            </div>
                        </button>
                    </article>
                ))}
            </div>
        </AsideLargeContainer>
    );
}
