import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useCreateCourse from "../hooks/userCreateCourse";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled(motion.div)`
  width: 40%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const ConfirmationModal = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { createCourse, loading } = useCreateCourse(); // Ensure useCreateCourse returns the correct values

  const onConfirm = async () => {
    console.log("file uploaded");
    try {
      const response = await createCourse(); // Ensure createCourse is defined and returns a response
      console.log(response, "response in ConfirmationModal");

      if (response?.status === 201) {
        setIsOpen(false);
        navigate("/mycourses");
      }
    } catch (error) {
      console.error("Error creating course:", error);
      // Optional: You can also show an error message to the user here
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial="initial"
          animate="isOpen"
          exit="exit"
          variants={modalVariant}
        >
          <ModalContainer>
            <CloseButton onClick={() => setIsOpen(false)}>✖</CloseButton>
            <h2>Confirmation</h2>
            <p>Are you sure you want to proceed with this action?</p>
            <div className="flex justify-center mt-4">
              <button
                className={`border p-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 ${
                  loading ? "bg-gray-500" : ""
                }`}
                onClick={onConfirm}
                disabled={loading}
              >
                Confirm
              </button>
              <button
                className="border p-2 px-4 rounded-md bg-red-600 text-white hover:bg-red-800 ml-2"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;
