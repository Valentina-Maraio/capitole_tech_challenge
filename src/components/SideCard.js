import React from "react";
import { useSelector } from "react-redux";
import "../style/sidecard.css";

const SideCard = () => {
  const selectedPodcast = useSelector(
    (state) => state.selectedPodcast.selectedPodcast
  );

  if (!selectedPodcast) {
    return <div>No podcast selected</div>;
  }

  return (
    <>
      <div className="pod_container">
        <div className="pod_image">
          <img
            src={selectedPodcast["im:image"][1].label}
            alt={selectedPodcast["im:artist"].label}
          />
        </div>
        <div className="divider"></div>
        <div className="pod_info">
          <h3>{selectedPodcast.title.label}</h3>
        </div>
        <div className="divider"></div>
        <div className="pod_description">
          <h4>Description:</h4>
          <p>{selectedPodcast.summary.label}</p>
        </div>
      </div>
    </>
  );
};

export default SideCard;
