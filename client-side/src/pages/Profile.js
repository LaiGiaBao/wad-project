import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Profile() {
  let { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/auth/basic-info/${id}`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);
  return (
    <div className="profile-page-container">
      <div className="basic-info">Username: {user.username}</div>
      <div className="fullname">Fullname: {user.fullname}</div>
      <div className="email">Email:{user.email}</div>
      <div className="create-date">Create date: {user.createdAt}</div>
    </div>
  );
}

export default Profile;
