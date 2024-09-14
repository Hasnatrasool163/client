import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import AssignmentList from './pages/AssignmentList';
import PostAssignment from './pages/PostAssignment';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/assignments" element={<AssignmentList />} />
          <Route path="/post-assignment" element={<PostAssignment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
