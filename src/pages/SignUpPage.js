import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';  


const SignUpPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/signup', userData);
            console.log('User signed up successfully:', res.data);
    } catch (error) {
      console.error('Error during signup:', error.response?.data || error.message);
    }
  };


  return (
    <div className="auth-container">
            <h2>Signup</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default SignUpPage;
