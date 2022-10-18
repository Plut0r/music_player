import React, {useState} from "react";

function Play(props) {
  //  const [value, setValue] = useState(80);
  return (
    <div className="w-full h-20 play fixed left-0 right-0 bottom-0 flex items-center justify-between py-10 pl-5 lg:pl-20 pr-10">
      <audio src={props.song[props.currentSongIndex].audio} ref={props.audioEl} />
      <div className="h-[49px] w-48 flex gap-3">
        <div className="rounded-xl">
          <img className="w-[49px] h-[49px] rounded-xl object-cover" src={props.song[props.currentSongIndex].image} alt="user" />
        </div>
        <div className="text-white flex flex-col mt-2">
          <h4 className="text-sm font-bold">{props.song[props.currentSongIndex].title}</h4>
          <p className="text-white/50 font-bold text-xs">{props.song[props.currentSongIndex].artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 lg:hidden">
        <img onClick={() => props.setIsplaying(!props.isPlaying)} src="/images/play.png" alt="play" />
        <img onClick={() => props.skipSong(true)} src="/images/next.png" alt="next" />
      </div>
      <div className="hidden lg:flex flex-col items-center">
        <div className="flex items-center gap-5 cursor-pointer">
          <div onClick={props.shuffle}><img src="/images/shuffle.png" alt="" /></div>
          <div onClick={() => props.skipSong(false)}><img src="/images/previous.png" alt="" /></div>
          <div onClick={() => props.setIsplaying(!props.isPlaying)}><img src="/images/play.png" alt="" /></div>
          <div onClick={() => props.skipSong(true)}><img src="/images/next.png" alt="" /></div>
          <div onClick={props.repeate}><img src="/images/repeate-one.png" alt="" /></div>
        </div>
        <div className="slider-container">
          <img className="" src="/images/slider.png" alt="" />
          {/* <input className="slider" type="range" min="1" max="100" defaultValue="50" step="1" style={{background: `linear-gradient(90deg, #FACD66 ${Math.floor(
            value
          )}%, rgba(255, 255, 255, 0.04) ${Math.floor(value)}%)`,}} /> */}
        </div>
      </div>
      <div className="hidden lg:flex gap-1 items-center">
        <img src="/images/volume-high.png" alt="volume" />
        <img src="/images/volume.png" alt="volume" />
      </div>
    </div>
  );
}

export default Play;
