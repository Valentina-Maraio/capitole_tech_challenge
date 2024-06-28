import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/slices/searchSlice";
import '../style/searchbar.css'

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-container">
      <button className="pod_counter">100</button>
      {"  "}
      <input
        type="text"
        placeholder="Filter podcasts..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
