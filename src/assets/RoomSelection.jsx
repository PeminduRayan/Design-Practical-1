import React, { useState } from "react";
import Modal from "react-modal";

const RoomSelection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numRooms, setNumRooms] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(2);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const incrementRooms = () => {
    setNumRooms(numRooms + 1);
  };

  const incrementChildren = () => {
    setNumChildren(numChildren + 1);
  };

  return (
    <div className="flex flex-row items-center">
      <div className="flex items-center">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/user--v1.png"
          alt="user--v1"
          className="mr-2"
        />
        <span onClick={openModal}>1 Room, {numAdults} Adult, {numChildren} Children</span>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Select Rooms and Guests</h2>
        <div>
          <p>Rooms: {numRooms}</p>
          <button onClick={incrementRooms}>+</button>
        </div>
        <div>
          <p>Adults: {numAdults}</p>
          {/* Add logic to decrement adults if needed */}
        </div>
        <div>
          <p>Children: {numChildren}</p>
          <button onClick={incrementChildren}>+</button>
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default RoomSelection;
