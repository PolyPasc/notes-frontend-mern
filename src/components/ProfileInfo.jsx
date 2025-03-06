import React from "react";

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium">{userInfo?.fullName}</p>
        {localStorage.getItem("token") && (
          <button className="" onClick={onLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
