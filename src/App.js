import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routing";

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-lightBackground text-darkText min-h-screen dark:bg-darkBackground  dark:text-lightText black ">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};
