// components/Modal.js
"use client"
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete this restaurant?</p>
        <div className="modal-actions">
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
