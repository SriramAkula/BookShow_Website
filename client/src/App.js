import { Routes, Route } from "react-router";
import React from "react";

import Pages from "./pages";
import Layout from "./layouts";
import MovieDetails from "./pages/details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.Home />} />
        <Route path="/:id" element={<Pages.MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
