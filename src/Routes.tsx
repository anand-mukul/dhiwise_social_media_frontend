import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Events = React.lazy(() => import("pages/Events"));
const VideoFullScreen = React.lazy(() => import("pages/VideoFullScreen"));
const SingleVideo = React.lazy(() => import("pages/SingleVideo"));
const SinglePost = React.lazy(() => import("pages/SinglePost"));
const SingleStory = React.lazy(() => import("pages/SingleStory"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/singlestory" element={<SingleStory />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/singlevideo" element={<SingleVideo />} />
          <Route path="/videofullscreen" element={<VideoFullScreen />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
