import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import './Assignments.css'; 

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/assignments/list');
        setAssignments(response.data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  const handleViewDetails = (assignment) => {
    setSelectedAssignment(assignment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAssignment(null);
  };

  return (
    <div className="assignment-list-container">
      <h2>Available Assignments</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <h3>{assignment.title}</h3>
            <p>Description: {assignment.description}</p>
            <p>Deadline: {assignment.deadline}</p>
            <button onClick={() => handleViewDetails(assignment)}>View Details</button>
          </li>
        ))}
      </ul>
      {selectedAssignment && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          assignment={selectedAssignment}
        />
      )}
    </div>
  );
};

export default AssignmentList;
