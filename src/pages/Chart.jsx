import React, { useState, useEffect, useRef } from "react";
import ChartMain from "../components/ChartMain/ChartMain";
import Play from "../components/Play/Play";
import MobileNav from "../components/Sidebar/MobileNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { music } from "../data/data";

function Chart() {
  const [nav, setNav] = useState(false);
  const [song] = useState(music);
  const audioEl = useRef(null);
  const [isPlaying, setIsplaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    if (!audioEl) return;
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > music.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = music.length - 1;
        }
        return temp;
      });
    }
  };

  const shuffle = () => {
    let temp = currentSongIndex;
    temp = Math.floor(Math.random() * music.length);
    setCurrentSongIndex(temp);
  }

  useEffect(() => {
    document.querySelector("body").classList.add("bg");
    return () => {
      document.querySelector("body").classList.remove("bg");
    };
  });

  return (
    <div>
      <div className="flex flex-col lg:flex-row relative overflow-x-hidden chartmain">
        <Sidebar />
        <MobileNav setNav={setNav} nav={nav} />
        <ChartMain setNav={setNav} />
      </div>
      <div className="hidden md:flex">
        <Play
          song={song}
          currentSongIndex={currentSongIndex}
          audioEl={audioEl}
          skipSong={skipSong}
          setIsplaying={setIsplaying}
          isPlaying={isPlaying}
          shuffle={shuffle}
        />
      </div>
    </div>
  );
}

export default Chart;
