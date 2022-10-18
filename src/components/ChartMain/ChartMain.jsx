import React, { useEffect } from "react";
import Search from "../Main/Search/Search";
import ChartHero from "./Sub/ChartHero";
import ChartInfo from "./Sub/ChartInfo";

function ChartMain(props) {
 return (
    <div
      onClick={() => props.setNav(false)}
      className="ml-8 lg:ml-20 pr-10 relative overflow-x-hidden transition-all ease-linear duration-100 w-full pb-10"
    >
      <Search />
      <ChartHero />
      <ChartInfo />
    </div>
  );
}

export default ChartMain;
