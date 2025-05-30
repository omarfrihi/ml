import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div>
      <h1>Welcome to the Home Page 🎉</h1>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default Home;
