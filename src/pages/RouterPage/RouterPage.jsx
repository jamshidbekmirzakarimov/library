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
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Layout />} >
        <Route path="admin/dashboard" element={<Dashboard/>} />
        <Route path="admin/books" element={<Books/>} />
        <Route path="admin/students" element={<Students/>}/>
        <Route path="admin/group" element={<Group/>}/>
        <Route path="admin/settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default RouterPage;
