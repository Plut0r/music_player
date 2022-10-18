import React from "react";
import { Navigate, Link } from "react-router-dom";

const data = [
  {
    id: 1,
    src: "/images/chart1.png",
    title: "Golden age of 80s",
    artist: "Sean swadder",
    time: "2:34:45",
  },
  {
    id: 2,
    src: "/images/chart2.png",
    title: "Reggae “n” blues",
    artist: "Dj YK mule",
    time: "1:02:42",
  },
  {
    id: 3,
    src: "/images/chart3.png",
    title: "Tomorrow’s tunes",
    artist: "Obi Datti",
    time: "2:01:25",
  },
];

function Charts() {

  return (
    <div className="lg:ml-4 flex flex-col gap-2 md:w-full lg:w-[40%] mt-8 lg:mt-0">
      <h3 className="text-light text-2xl font-bold">Top charts</h3>
      <div className="flex flex-col gap-2 overflow-x-auto w-full bar">
        <div className="flex md:flex-col items-start md:items-center shrink-0 gap-5 md:gap-2 w-fit md:w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-darkAlt rounded-[20px] md:h-24 w-72 md:w-full h-[203px] flex md:items-center px-5 pt-5 md:pt-0"
            >
              <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-start md:items-center">
                <div>
                  <img className="" src={item.src} alt="" />
                </div>
                <div className="text-white font-normal flex flex-col gap-1 md:ml-4">
                  <Link to="/chart" className="text-base">{item.title}</Link>
                  <p className="text-xs text-white/50">{item.artist}</p>
                  <p className="text-xs mt-5 md:mt-0">{item.time}</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center ml-auto cursor-pointer">
                <img src="/images/chartheart.png" alt="heart" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Charts;
