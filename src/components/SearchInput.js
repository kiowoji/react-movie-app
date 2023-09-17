import React, { useState } from "react";
import axios from "axios";

function SearchInput({ onSearchResults }) {
    const [searchTerm, setSearchTerm] = useState("");
    const apiKey = "0e1a1bcd1bcdca4ea625afb133fa2c74";

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );

      onSearchResults(response.data.results);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <>
      <input
        placeholder="Enter title..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn-main" onClick={handleSearch}>
        Search
      </button>
    </>
  );
}

export default SearchInput;
