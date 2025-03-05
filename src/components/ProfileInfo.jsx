import React from "react";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div>
      <div className="">
        <p className="text-sm font-medium">John</p>
        <button className="" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
