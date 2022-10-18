import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MobileNav from "../components/Sidebar/MobileNav";
import Play from "../components/Play/Play";
import Main from "../components/CollectionMain/Main";
import { music } from "../data/data";

function Collection() {
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

  return (
    <div>
      <div className="flex flex-col lg:flex-row relative overflow-x-hidden pb-10 md:pb-0">
        <Sidebar />
        <MobileNav setNav={setNav} nav={nav} />
        <Main setNav={setNav} />
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

export default Collection;
