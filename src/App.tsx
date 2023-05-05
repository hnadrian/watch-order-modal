import React, { useState } from "react";
import WatchOrderModal from "./components/WatchOrderModal/WatchOrderModal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import './App.css';

function App() {
  // State for status of modal
  const [isModalOpen, setIsModalOpen] = useState(false);
   
   const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Button variant="contained" style={{ backgroundColor:"#1A3A32" }} onClick={openModal}>
          Open Order
        </Button>
      </Box>
      <WatchOrderModal open={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
