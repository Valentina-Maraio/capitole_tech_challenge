import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopPodcasts } from "../redux/slices/podcastsSlice";

const PodContent = () => {
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
      <div className="">
        <h2>Raw podcasts list from the API call </h2>
        {topPodcasts?.map((pod) => {
          return (
            <ul key={pod.id}>
              <li>
                <img src={pod['im:image'][0].label} alt={pod['im:artist'].label} />
                <h1>ARTIST: {pod['im:artist'].label}</h1>
                <h2>TITLE: {pod.title.label}</h2>
                <p>ID: {pod.id.attributes['im:id']}</p>
                <p>DESCRIPTION: {pod.summary.label}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default PodContent;
