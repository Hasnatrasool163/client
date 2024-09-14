import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';  

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreAssignments = () => {
    navigate('/assignments');
  };

  return (
    <div className="home-container">
      <h1>Welcome to UniHelp</h1>
      <p>Your platform to help each other with assignments and coursework!</p>
      <button className="explore-button" onClick={handleExploreAssignments}>
        Explore Assignments
      </button>
    </div>
  );
};

export default HomePage;
