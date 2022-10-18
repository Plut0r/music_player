import React from "react";

function Hero() {
  return (
    <div className="bg-hero text-white md:w-full lg:w-[60%] h-[350px] rounded-[40px] hero pl-10 flex flex-col justify-between py-10">
      <h2 className="text-xs font-normal">Currated playlist</h2>
      <div>
        <h3 className="text-4xl font-bold">R & B Hits</h3>
        <p className="text-xs font-normal">
          All mine, Lie again, Petty call me everyday, <br /> Out of time, No love, Bad
          habit, <br /> and so much more
        </p>
          </div>
          <div className="flex items-center gap-2">
              <img src="/images/heroimg.png" alt="" />
              <div className="flex items-center gap-2">
                  <img src="/images/Heart.png" alt="heart" />
                  <span className="text-xs font-normal">33k Likes</span>
              </div>
          </div>
      </div>
  );
}

export default Hero;
