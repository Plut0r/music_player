import React, { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    src: "/images/Home.png",
    title: "Home",
    active: true,
    to: "/",
  },
  {
    id: 2,
    src: "/images/playlist.png",
    title: "My collections",
    active: false,
    to: "/collection",
  },
  {
    id: 3,
    src: "/images/radio.png",
    title: "Radio",
    active: false,
  },
  {
    id: 4,
    src: "/images/videos.png",
    title: "Music videos",
    active: false,
  },
  {
    id: 5,
    src: "/images/profile.png",
    title: "Profile",
    active: false,
  },
  {
    id: 6,
    src: "/images/Logout.png",
    title: "Log out",
    active: false,
  },
];

function MobileNav(props) {
  
  return (
    <div className="ml-8 flex lg:hidden items-center justify-between mt-4 pr-10">
      <div className="flex items-center gap-6">
        <a href="#" onClick={() => props.setNav(true)}>
          <img src="/images/hamburger.png" alt="hamburger" />
        </a>
        <a>
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </div>
      <div>
        <a>
          <img src="/images/search (1).png" alt="search-icon" />
        </a>
      </div>
      {props.nav && <div className="fixed left-0 top-0 w-[80%] h-screen bg-darkAlt z-10 lg:hidden flex flex-col gap-10 pl-5 pt-20 transition-all ease-linear duration-100">
        {data.map((item) => (
          <Link key={item.id} to={item.to}>
            <div className="flex items-center gap-3">
              <img className="" src={item.src} alt={item.title} />
              <p
                className={`${item.active ? "text-white" : "text-light/25"
                  } font-bold text-lg`}
              >
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      }
    </div>
  );
}

export default MobileNav;
