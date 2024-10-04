import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Components/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../Components/Dashboard/Dashboard";
import VideosUplod from "../Components/VideosUplod/VideosUplod";
import Quizzes from "../Components/Quizzes/Quizzes";
import Game from "../Game/Game";
import SignUp from "../Components/SignUp/SignUp";
import AdminDashboard from "../Components/AdminDashboard/AdminDashboard";
import NotPage from "../Components/NotPage/NotPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotPage />} />
      <Route
        path="/user/profile/me"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/video"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <VideosUplod />
          </ProtectedRoute>
        }
      />
      <Route
        path="/quizzes"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <Quizzes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/game"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <Game />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routing;
