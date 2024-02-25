import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DirectMessage = React.lazy(() => import("pages/DirectMessage"));
const Messages = React.lazy(() => import("pages/Messages"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const SearchResults = React.lazy(() => import("pages/SearchResults"));
const SingleEvent = React.lazy(() => import("pages/SingleEvent"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/singleevent" element={<SingleEvent />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/directmessage" element={<DirectMessage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
