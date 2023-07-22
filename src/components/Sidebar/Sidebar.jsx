import React from "react";
import { Link } from "react-router-dom";

const images = [
  [
    {
      id: 1,
      src: "/images/Home.png",
      alt: "home-icon",
      to: "/",
    },
    {
      id: 2,
      src: "/images/playlist.png",
      alt: "playlist-icon",
      to: "/collection",
    },
    {
      id: 3,
      src: "/images/radio.png",
      alt: "radio-icon",
    },
    {
      id: 4,
      src: "/images/videos.png",
      alt: "videos-icon",
    },
  ],
  [
    {
      id: 5,
      src: "/images/profile.png",
      alt: "profile-icon",
    },
    {
      id: 6,
      src: "/images/Logout.png",
      alt: "logout-icon",
    },
  ],
];

function Sidebar() {
  return (
    <div className="hidden lg:flex w-20 h-screen flex-col items-center gap-7 pt-5 fixed z-10">
      <div>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="bg-darkAlt rounded-[32px] w-[52px] py-4 flex flex-col items-center gap-7">
        {images[0].map((image) => (
          <Link key={image.id} to={image.to}>
            <img src={image.src} alt={image.alt} />
          </Link>
        ))}
      </div>
      <div className="bg-darkAlt rounded-[32px] w-[52px] py-4 flex flex-col items-center gap-7">
        {images[1].map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
