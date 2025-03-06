import React from "react";
import ProfileInfo from "./ProfileInfo";
import { useNavigate } from "react-router-dom";

const Navbar = ({ userInfo }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <ProfileInfo userInfo={userInfo} onLogout={handleLogout} />
    </div>
  );
};

export default Navbar;
