import React from "react";

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div>
      <div className="">
        <p className="text-sm font-medium">{userInfo?.fullName}</p>
        <button className="" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
