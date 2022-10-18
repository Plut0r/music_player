import React, { useEffect } from "react";

const data = [
  {
    id: 1,
    src: "/images/card1.png",
    alt: "card1",
    title: "Life in a bubble",
    artist: "The van",
  },
  {
    id: 2,
    src: "/images/card2.png",
    alt: "card2",
    title: "Mountain",
    artist: "Krisx",
  },
  {
    id: 3,
    src: "/images/card3.png",
    alt: "card3",
    title: "Limits",
    artist: "John Dillion",
  },
  {
    id: 4,
    src: "/images/card4.png",
    alt: "card4",
    title: "Everything’s black",
    artist: "Ameed",
  },
  {
    id: 5,
    src: "/images/card5.png",
    alt: "card5",
    title: "Cancelled",
    artist: "Enimen",
  },
  {
    id: 6,
    src: "/images/card6.png",
    alt: "card6",
    title: "Nomad",
    artist: "Makrol eli",
  },
  {
    id: 7,
    src: "/images/card7.png",
    alt: "card7",
    title: "Blind",
    artist: "Wiz zee",
  },
];

function NewReleases(props) {

  return (
    <div className="mt-7">
      <h4 className="text-2xl font-bold text-light">{props.topic}</h4>
      <div className="w-full overflow-auto bar">
        <div className="flex items-center gap-4 md:gap-8 lg:gap-10 mt-3 w-fit bar">
          {props.data.map((item) => (
            <div
              className="flex flex-col shrink-0 gap-1 w-fit bar cursor-pointer"
              key={item.id}
              onClick={() => props.handleClick(item.tid)}
            >
              <img className="w-[153px] h-[153px] rounded-3xl" src={item.image} alt={item.alt} />
              <h4 className="text-xs font-normal text-white">{item.title}</h4>
              <p className="text-xs font-normal text-white/50">{item.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewReleases;
