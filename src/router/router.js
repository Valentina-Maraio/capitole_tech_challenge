import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PodDetails from "../pages/PodDetails";
import EpisodeDetails from "../pages/EpisodeDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/podcasts/:podcastId',
    element: <PodDetails/>
  },
  {
    path: '/podcasts/:podcastId/episode/:episodeId',
    element: <EpisodeDetails/>
  }
]);
