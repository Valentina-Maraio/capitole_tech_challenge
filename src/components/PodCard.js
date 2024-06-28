import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopPodcasts } from "../redux/slices/podcastsSlice";
import { setSelectedPodcast } from "../redux/slices/selectedPodcastSlice";
import { setFilterCount } from "../redux/slices/podcastsSlice";
import "../style/pod_card.css";
import { Link } from "react-router-dom";

const PodCard = () => {
  const dispatch = useDispatch();
  const { topPodcasts, status, error } = useSelector((state) => state.podcasts);
  const searchQuery = useSelector((state) => state.search.query);
  console.log(topPodcasts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTopPodcasts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      localStorage.setItem("topPodcasts", JSON.stringify(topPodcasts));
    }
  }, [status, topPodcasts]);

  useEffect(() => {
    const filteredPodcasts = topPodcasts.filter((pod) =>
      pod.title.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    dispatch(setFilterCount(filteredPodcasts.length));
  }, [searchQuery, topPodcasts, dispatch]);

  if (status === "failed") {
    return <div>Error : {error}</div>;
  }

  const handleCardClick = (podcast, podcastId) => {
    dispatch(setSelectedPodcast(podcast, podcastId));
  };

  const filteredPodcasts = topPodcasts?.filter((pod) =>
    pod.title.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="card_grid">
        {filteredPodcasts?.map((pod) =>  {
          const podcastName = pod.title.label.split(" - ")[0];
          const shorterName = podcastName.split(" with ")[0];
          return (
            <>
              <Link
                to={`/podcasts/${pod.id.attributes["im:id"]}`}
                key={pod.id.attributes["im:id"]}
                className="link-text"
                onClick={() => handleCardClick(pod)}
              >
                <div
                  className="card_container"
                  key={pod.id.attributes["im:id"]}
                >
                  <div className="image_container">
                    <div className="card_image">
                      <img
                        src={pod["im:image"][1].label}
                        alt={pod["im:artist"].label}
                        className="podcast_image"
                      />
                    </div>
                  </div>
                  <div className="card_layout">
                    <div className="card_body">
                      <div className="pod_title">
                        <h2>{shorterName}</h2>
                      </div>
                      <div className="artist_name">
                        <h4>Author: {pod["im:artist"].label}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}{" "}
      </div>
    </>
  );
};

export default PodCard;
