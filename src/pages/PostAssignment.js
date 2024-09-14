import React, { useState } from 'react';
import axios from 'axios';
import './PostAssignment.css'; 

const PostAssignment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/assignments/post', {
        title,
        description,
        deadline,
      });
      console.log('Assignment posted!')
      setMessage('Assignment posted successfully!');
      setTitle('');
      setDescription('');
      setDeadline('');
    } catch (error) {
      console.error('Error posting assignment:', error);
      setMessage('Error posting assignment. Please try again.');
    }
  };

  return (
    <div className="post-assignment-container">
      <h2>Post a New Assignment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Assignment Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <button type="submit">Post Assignment</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PostAssignment;
