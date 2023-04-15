import React from "react";
import "./Home.css";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-page");
  };

  const handleClick1 = () => {
    navigate("/covid-page");
  };

  return (
    <div className="home-page-container">
      <h1 className="home-page-title">Welcome to My React App!</h1>
      <p className="home-page-description">
        This is a welcome page for my React application.
      </p>
      <button className="button" onClick={handleClick}>
        Go to Contact Page
      </button>
      <button className="button" onClick={handleClick1}>
        Go to Covid Page
      </button>
    </div>
  );
};

export default Home;
