import React from 'react';

const Cardwisata = ({ imageSrc, title, description,link }) => (
    <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow px-3.5 pt-3.5 pb-6 w-full bg-green-200 rounded-2xl shadow-2xl max-md:mt-10 max-md:max-w-full">
            <img loading="lazy" src={imageSrc} alt={title} className="w-full aspect-[1.14] max-md:max-w-full" />
            <h2 className="mt-5 ml-3 text-2xl font-bold text-black max-md:ml-2.5">{title}</h2>
            <p className="mt-2.5 ml-3 text-sm leading-7 text-zinc-800 max-md:ml-2.5">{description}</p>
            <a href={link}>
            <button className="justify-center self-start px-8 py-5 mt-4 ml-3 text-lg font-bold leading-6 text-white whitespace-nowrap bg-cyan-900 rounded-lg max-md:px-5 max-md:ml-2.5" tabindex="0">
                Explore
            </button>
            </a>
        </div>
    </article>
);

export default Cardwisata;
