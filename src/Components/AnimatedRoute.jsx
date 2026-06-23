import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import PageTransition from "./PageTransition";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Students from "../pages/Students";
import StudentProfile from "../pages/StudentProfile";
import StudentDashborad from "../pages/StudentDashborad";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Student_EditProfile from "../pages/Student_EditProfile";
import Blogs from "../pages/Blogs";
import Gallery from "../pages/Gallery";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import About from "../pages/About";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/students"
          element={
            <PageTransition>
              <Students />
            </PageTransition>
          }
        />
        <Route
          path="/students/:id"
          element={
            <PageTransition>
              <StudentProfile />
            </PageTransition>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PageTransition>
              <StudentDashborad />
            </PageTransition>
          }
        />
        <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />
        <Route
          path="/register"
          element={
            <PageTransition>
              <Register />
            </PageTransition>
          }
        />
        <Route
          path="/students/:id/std_edit"
          element={
            <PageTransition>
              <Student_EditProfile />
            </PageTransition>
          }
        />
        <Route
          path="/blogs"
          element={
            <PageTransition>
              <Blogs />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition>
              <Gallery />
            </PageTransition>
          }
        />
        <Route
          path="/features"
          element={
            <PageTransition>
              <Features />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
