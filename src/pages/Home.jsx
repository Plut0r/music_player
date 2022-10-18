import React, { useState, useEffect, useRef } from "react";
import Main from "../components/Main/Main";
import Play from "../components/Play/Play";
import MobileNav from "../components/Sidebar/MobileNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { music } from "../data/data";

function Home() {
  const [nav, setNav] = useState(false);
  const [song] = useState(music);
  const audioEl = useRef(null);
  const [isPlaying, setIsplaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
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

  const repeateOnce = () => {
    let temp = currentSongIndex;
    setCurrentSongIndex(temp);
  }

  const handleClick = (item) => {
    setCurrentSongIndex(item - 1);
    setIsplaying(true);
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row relative overflow-x-hidden">
        <Sidebar />
        <MobileNav setNav={setNav} nav={nav} />
        <Main setNav={setNav} handleClick={handleClick} />
      </div>
      <Play
        song={song}
        currentSongIndex={currentSongIndex}
        audioEl={audioEl}
        skipSong={skipSong}
        setIsplaying={setIsplaying}
        isPlaying={isPlaying}
        shuffle={shuffle}
        repeate={repeateOnce}
      />
    </div>
  );
}

export default Home;
