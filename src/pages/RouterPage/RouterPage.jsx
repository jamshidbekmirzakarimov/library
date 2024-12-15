import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Layout from "../../components/Layout/Layout";
import Books from "../Books/Books";
import Students from "../Students/Students";
import Group from "../Group/Group";
import Settings from "../Settings/Settings";

const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="students" element={<Students />} />
          <Route path="group" element={<Group />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterPage;
