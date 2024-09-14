import React from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, assignment }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{assignment.title}</h2>
        <p><strong>Description:</strong> {assignment.description}</p>
        <p><strong>Deadline:</strong> {assignment.deadline}</p>
        <a href={assignment.file_link} target="_blank" rel="noopener noreferrer">View File</a>
      </div>
    </div>
  );
};

export default Modal;
