import * as React from "react";

const Card = ({ imageSrc, title, content, buttonText }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <article className="flex flex-col grow justify-center w-full font-bold bg-white rounded-lg max-md:mt-8">
      <div className="flex flex-col px-3.5 pt-7 pb-3 bg-white rounded-lg">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="w-full aspect-[1.27]"
        />
        <header className="mt-3.5 text-2xl leading-7 text-emerald-500">{title}</header>
        <p className="mt-2.5 mr-6 text-base leading-6 text-neutral-600 max-md:mr-2.5">
          {content}
        </p>
      </div>
    </article>
  </div>
);

function MyComponent() {
  const cardsData = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a06c082c59fa60cb89d1afc189f506c61747fda1b891f13806b07d8a93dcc62b?apiKey=7efa433487f5452dbfc26a66cc5d9d42&",
      title: "Discovery Ancol",
      content:
        "Welcome to Discovery Ancol, a luxurious 4-star hotel located in the vibrant city of Jakarta, Indonesia. With its prime location and impeccable service, this hotel offers a truly unforgettable experience for both business and leisure travelers.",
      
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e88c2b10df00940b9703fe6948dbdf0b320700f55022d77b7a218b4940da2d7?apiKey=7efa433487f5452dbfc26a66cc5d9d42&",
      title: "Putri Duyung Ancol",
      content:
        "Welcome to Putri Duyung Ancol, a charming 3-star hotel nestled in the vibrant city of Jakarta, Indonesia. With its convenient location just 10 kilometers from the city center, this hotel offers a peaceful retreat away from the hustle and bustle.",
      
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9a8e9ed19639765a9cd996f92dd331d18c45e66ebe167e914fb666cbec9618d?apiKey=7efa433487f5452dbfc26a66cc5d9d42&",
      title: "Mercure Convention Center Ancol Jakarta",
      content:
        "Welcome to Mercure Convention Center Ancol Jakarta, a 4-star hotel located in the vibrant city of Jakarta, Indonesia. With its prime location, luxurious amenities, and excellent service, this hotel offers a perfect blend of comfort travelers.",
      
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/77c57af02ca4afa08b58fd425ec432b78d8871d0328198caf620995746e936ba?apiKey=7efa433487f5452dbfc26a66cc5d9d42&",
      title: "BI Executive Hotel",
      content:
        "BI Executive Hotel is a hotel near null airport and is the right choice to stay overnight while waiting for the next flight schedule. Get a comfortable place to rest in the middle of your temporary stopover, For those of you who want pocket-friendly prices.",
      
    }
  ];

  return (
    <section className="flex flex-col bg-green-200">

      <main className="flex flex-col items-start px-7 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="ml-3.5 text-6xl font-semibold text-black max-md:max-w-full max-md:text-4xl">
          Atlantis Water Adventures Ancol
        </h1>
        <h2 className="mt-11 ml-3.5 text-2xl font-medium text-black max-md:mt-10 max-md:max-w-full">
          Penginapan disekitar Atlantis Water Adventures Ancol
        </h2>
        <section className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        </section>
      </main>

    </section>
  );
}

export default MyComponent;