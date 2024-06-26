import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopPodcasts } from "../redux/slices/podcastsSlice";
import "../style/pod_card.css";

const PodCard = () => {
  const dispatch = useDispatch();
  const { topPodcasts, status, error } = useSelector((state) => state.podcasts);
  console.log(topPodcasts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTopPodcasts);
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error : {error}</div>;
  }

  return (
    <>
      {topPodcasts?.map((pod) => {
        return (
          <>
            <div className="card_container" key={pod.id}>
              <div className="image_container">
                <div className="card_image">
                  <img
                    src={pod["im:image"][0].label}
                    alt={pod["im:artist"].label}
                  />
                </div>
              </div>
              <div className="card_layout">
                <div className="card_body">
                  <div className="pod_title">
                    <h4>{pod.title.label}</h4>
                  </div>
                  <div className="artist_name">
                    <p>Author: {pod["im:artist"].label}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PodCard;
