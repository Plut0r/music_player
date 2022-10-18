import React from "react";

function Search() {
  return (
    <div className="hidden lg:flex items-center h-20 gap-5 pl-4">
      <img src="/images/search.png" alt="search-icon" />
      <input
        className="text w-full border-none outline-none text-sm font-semibold text-white/25 placeholder:text-white/25"
        type="text"
        placeholder="Search artists"
      />
    </div>
  );
}

export default Search;
