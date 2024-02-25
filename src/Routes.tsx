import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Gallery = React.lazy(() => import("pages/Gallery"));
const UserProfile = React.lazy(() => import("pages/UserProfile"));
const MyFriends = React.lazy(() => import("pages/MyFriends"));
const GroupMessage = React.lazy(() => import("pages/GroupMessage"));
const VideoChat = React.lazy(() => import("pages/VideoChat"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/videochat" element={<VideoChat />} />
          <Route path="/groupmessage" element={<GroupMessage />} />
          <Route path="/myfriends" element={<MyFriends />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
