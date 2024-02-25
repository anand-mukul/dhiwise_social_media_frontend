import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Settings = React.lazy(() => import("pages/Settings"));
const MyProfile = React.lazy(() => import("pages/MyProfile"));
const SinglePhoto = React.lazy(() => import("pages/SinglePhoto"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/singlephoto" element={<SinglePhoto />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
