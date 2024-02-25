import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "/pages/NotFound";
const Settings = React.lazy(() => import("/pages/Settings"));
const MyProfile = React.lazy(() => import("/pages/MyProfile"));
const SinglePhoto = React.lazy(() => import("/pages/SinglePhoto"));
const Gallery = React.lazy(() => import("/pages/Gallery"));
const UserProfile = React.lazy(() => import("/pages/UserProfile"));
const MyFriends = React.lazy(() => import("/pages/MyFriends"));
const GroupMessage = React.lazy(() => import("/pages/GroupMessage"));
const VideoChat = React.lazy(() => import("/pages/Videochat"));
const DirectMessage = React.lazy(() => import("/pages/DirectMessage"));
const Messages = React.lazy(() => import("/pages/Messages"));
const Notifications = React.lazy(() => import("/pages/Notifications"));
const SearchResults = React.lazy(() => import("/pages/SearchResults"));
const SingleEvent = React.lazy(() => import("/pages/SingleEvent"));
const Events = React.lazy(() => import("/pages/Events"));
const VideoFullScreen = React.lazy(() => import("/pages/VideoFullScreen"));
const SingleVideo = React.lazy(() => import("/pages/SingleVideo"));
const SinglePost = React.lazy(() => import("/pages/SinglePost"));
const SingleStory = React.lazy(() => import("/pages/SingleStory"));
const Stories = React.lazy(() => import("/pages/Stories"));
const Home1 = React.lazy(() => import("/pages/Home1"));
const PasswordRecovery = React.lazy(() => import("/pages/PasswordRecovery"));
const Signup = React.lazy(() => import("/pages/Signup"));
const Login = React.lazy(() => import("/pages/Login"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback ={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/passwordrecovery" element={<PasswordRecovery />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/singlestory" element={<SingleStory />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/singlevideo" element={<SingleVideo />} />
          <Route path="/videofullscreen" element={<VideoFullScreen />} />
          <Route path="/events" element={<Events />} />
          <Route path="/singleevent" element={<SingleEvent />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/directmessage" element={<DirectMessage />} />
          <Route path="/videochat" element={<VideoChat />} />
          <Route path="/groupmessage" element={<GroupMessage />} />
          <Route path="/myfriends" element={<MyFriends />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/singlephoto" element={<SinglePhoto />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
