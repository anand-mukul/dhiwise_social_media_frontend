import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Stories = React.lazy(() => import("pages/Stories"));
const Home1 = React.lazy(() => import("pages/Home1"));
const PasswordRecovery = React.lazy(() => import("pages/PasswordRecovery"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/passwordrecovery" element={<PasswordRecovery />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
