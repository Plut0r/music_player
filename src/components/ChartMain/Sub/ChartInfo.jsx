import React from "react";

const data = [
  {
    id: 1,
    src: "/images/card1.png",
    title: "Let me love you",
    artist: "Krisx",
    type: "Single",
    time: "4:17",
  },
  {
    id: 2,
    src: "/images/card2.png",
    title: "Watin man go do",
    type: "African giant",
    artist: "Burna",
    time: "2:30",
  },
  {
    id: 3,
    src: "/images/card3.png",
    title: "Stand strong",
    type: "Single",
    artist: "Davido",
    time: "2:02",
  },
  {
    id: 4,
    src: "/images/card4.png",
    title: "Closa",
    artist: "Ybee",
    type: "Obi datti",
    time: "3:23",
  },
  {
    id: 5,
    src: "/images/card5.png",
    title: "Let me love you",
    artist: "Krisx",
    type: "Single",
    time: "4:17",
  },
];

function ChartInfo() {
  return (
    <div className="flex flex-col gap-3 mt-9 pr-7 md:pr-0">
      {data.map((item) => (
        <div key={item.id} className="flex items-center justify-between bg-info/40 rounded-2xl py-3 px-4">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10" src={item.src} alt="" />
            <img
              className="hidden md:block"
              src="/images/heartc.png"
              alt="heart"
            />
          </div>
          <p className="hidden md:block font-normal text-xs text-white">
            <span>{item.title}</span> ~ <span>{item.artist}</span>
          </p>
          <p className="hidden md:block font-normal text-xs text-white">
            {item.type}
          </p>
          <p className="hidden md:block font-normal text-xs text-white">{item.time}</p>
          <img className="hidden md:block" src="/images/more-vertical.png" alt="more" />
          <div className="flex flex-col gap-2 ml-5 md:hidden">
            <p className="font-normal text-xs text-white">
              <span>{item.title}</span> ~ <span>{item.artist}</span>
            </p>
            <p className="font-normal text-xs text-white">{item.type}</p>
          </div>
          <div className="flex flex-col-reverse gap-2 ml-auto md:hidden">
            <p className="font-normal text-xs text-white">{item.time}</p>
            <img src="/images/more-vertical.png" alt="more" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChartInfo;
