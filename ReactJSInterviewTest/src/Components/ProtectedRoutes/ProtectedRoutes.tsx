import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
const isAuthenticate=()=>{
  return true
}
const ProtectedRoutes: React.FC =()=>{
    return   isAuthenticate() ? <Outlet /> : <Navigate to="" />;

}

export default ProtectedRoutes