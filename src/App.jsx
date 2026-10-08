import { useEffect, useRef, useState } from "react";
// import { BASE_URL, fetchData } from "./API";
import UserCard from "./UserCard";
import api, { getUsers } from "./config";
import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <h2>My Headr</h2>
        <nav>
          <Link to="/"> صفحه اصلی </Link>
          <Link to="/about"> درباره ما </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
