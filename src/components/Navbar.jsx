import React from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="px-8 py-4 flex flex-wrap sm:justify-beetween justify-center items-center border-b border-gray-200 dark:border-blue-800 ">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-700 text-lightText font-bold text-white-200 py-1 px-4 rounded-xl dark:bg-blue-700 dark:text-lightText">
            Incognito Search
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="px-4 py-1 bg-lightBackground text-darkText dark:bg-lightBackground dark:text-gray-900  border rounded-full hover:shadow-lg"
        >
          {darkTheme ? "💡 Light" : "🌙 Dark"}
        </button>
      </div>
      <Search />
    </div>
  );
};
