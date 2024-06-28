import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/slices/searchSlice";
import { setFilterCount } from "../redux/slices/podcastsSlice";
import '../style/searchbar.css'

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const filterCount = useSelector((state) => state.podcasts.filterCount); // Fetch filterCount from Redux state
  const topPodcasts = useSelector((state) => state.podcasts.topPodcasts); // Fetch topPodcasts from Redux state


  const handleInputChange = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  useEffect(() => {
    // Calculate filterCount whenever topPodcasts or query changes
    const filteredPodcasts = topPodcasts.filter((pod) =>
      pod.title.label.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setFilterCount(filteredPodcasts.length));
  }, [query, topPodcasts, dispatch]);

  return (
    <div className="search-container">
      <button className="pod_counter">{filterCount}</button>
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
