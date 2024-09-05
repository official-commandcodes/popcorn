import { useEffect, useState } from "react";
const API_KEY = "d0a7a658";

function Navbar() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      async function getMovies() {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=1`);
        const data = await response.json();
        console.log("==== NEW RESULT ====");
        console.log(data);
      }
      getMovies();
    }
  }, [search]);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <nav className="bg-[#6741d9] flex justify-between items-center p-4 rounded-md">
      <h2 className="text-xl text-white font-semibold">🌽 &nbsp; usePopcorn</h2>

      <input type="text" placeholder="Search movies..." onChange={handleChange} className="text-[#dee2e6] bg-[#7950f2] py-2 px-3 outline-none rounded-md w-[300px] placeholder:text-[1.1rem] text--[1.1rem] focus:shadow-xl transition-shadow duration-300" />

      <p className="text-[#dee2e6] text-[0.9rem]">Found 0 results</p>
    </nav>
  );
}

export default Navbar;
