import React from "react";
import Search from "../Main/Search/Search";
import Buttons from "./Sub/Buttons";
import List from "./Sub/List";

function Main(props) {
  return (
    <div
      className="ml-8 lg:ml-20 pr-10 relative overflow-x-hidden transition-all ease-linear duration-100"
      onClick={() => props.setNav(false)}
    >
      <Search />
      <Buttons />
      <List />
    </div>
  );
}

export default Main;
