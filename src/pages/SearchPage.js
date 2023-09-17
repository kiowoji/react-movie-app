import React, { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import SearchInput from "../components/SearchInput";
import Card from "../components/Card"; 
import Footer from "../layouts/Footer";

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <Sidebar />
      <div className="content">
        <Header />
        <div className="container">
          <SearchInput onSearchResults={handleSearchResults} />
          {searchResults.length > 0 && (
            <div className="movie-list-container">
              <h2 className="title">Search Results</h2>
              <div className="movie-list-wrap">
                {searchResults.map((movie) => (
                  <Card key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          )}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default SearchPage;
