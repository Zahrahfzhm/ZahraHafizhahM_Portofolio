import React from 'react';

const Cardconten = ({ imageSrc, title, description, likes, views, time, link }) => (
    <section className="grow p-10 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full min-h-[300px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <figure className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center items-center rounded-lg aspect-[0.67] w-[220px] max-md:mt-10">
                    <img loading="lazy" src={imageSrc} alt="" className="w-full aspect-[0.67] rounded-1xl" />
                </div>
            </figure>
            <section className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                <h2 className="flex flex-col text-base font-medium leading-6 text-emerald-500 max-md:mt-10">
                    <span className="text-xl font-semibold leading-7">
                        {title}
                    </span>
                    <p className="mt-4 leading-6 text-neutral-600">
                        {description}
                    </p>
                    <div className="flex gap-4 pr-9 mt-6 text-neutral-600 max-md:pr-5">
                        <div className="flex gap-2 whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bed703ff2d8893debe3a59d9f095f3722b0849718329a9908fb5c0e85e96430f?apiKey=59541bf2346a4f44991d05930261be7f&" alt="likes icon" className="shrink-0 w-6 aspect-square" />
                            <span>{likes}</span>
                        </div>
                        <div className="flex gap-2 whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/75101fd8255c0d2fb50aa7f60f686af5818026494d92b217cef272bcc9e3bb65?apiKey=59541bf2346a4f44991d05930261be7f&" alt="views icon" className="shrink-0 w-6 aspect-square" />
                            <span>{views}</span>
                        </div>
                        <div className="flex flex-1 gap-2">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9647e9d99b28de05c30db05f32bbf0131aeb5829b07994d1eca7c4be362da4e?apiKey=59541bf2346a4f44991d05930261be7f&" alt="time icon" className="shrink-0 w-6 aspect-square" />
                            <span className="flex-1">{time}</span>
                        </div>
                    </div>
                    <a href={link} className="mt-6 underline">
                        Read More...
                    </a>
                </h2>
            </section>
        </div>
    </section>
);

export default Cardconten;
