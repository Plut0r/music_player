import React, {useState} from "react";
import { newReleases } from "../../data/data";
import { popular } from "../../data/data";
import Frame1 from "./Hero/Frame1";
import NewReleases from "./NewReleases/NewReleases";
import Search from "./Search/Search";

const data = [
  {
    id: 1,
    image: "/images/card1.png",
    alt: "card1",
    title: "Life in a bubble",
    artist: "The van",
  },
  {
    id: 2,
    image: "/images/card2.png",
    alt: "card2",
    title: "Mountain",
    artist: "Krisx",
  },
  {
    id: 3,
    image: "/images/card3.png",
    alt: "card3",
    title: "Limits",
    artist: "John Dillion",
  },
  {
    id: 4,
    image: "/images/card4.png",
    alt: "card4",
    title: "Everything’s black",
    artist: "Ameed",
  },
  {
    id: 5,
    image: "/images/card5.png",
    alt: "card5",
    title: "Cancelled",
    artist: "Enimen",
  },
  {
    id: 6,
    image: "/images/card6.png",
    alt: "card6",
    title: "Nomad",
    artist: "Makrol eli",
  },
  {
    id: 7,
    image: "/images/card7.png",
    alt: "card7",
    title: "Blind",
    artist: "Wiz zee",
  },
];

function Main(props) {

  return (
    <div className="ml-8 lg:ml-20 pr-10 relative overflow-x-hidden transition-all ease-linear duration-100 mb-32" onClick={() => props.setNav(false)}>
      <Search />
      <Frame1 />
      <NewReleases topic="New releases." data={newReleases} handleClick={props.handleClick} />
      <NewReleases topic="Popular in your area" data={popular} handleClick={props.handleClick} />
    </div>
  );
}

export default Main;
