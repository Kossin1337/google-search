import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Results } from "./Results";

// render={() => <Navigate to="/search" replace />}

export const Routing = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Results />} />
        {/* <Route
          path={["/search", "/images", "/news", "/videos"]}
          element={<Results />}
        /> */}
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};
