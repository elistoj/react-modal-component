# React Modal Component


A simple and accessible React modal component.

Installation
You can install the package using npm or yarn:


npm install react-modal-component-eli-ca

# or via yarn:
yarn add react-modal-component-eli-ca


Description

The React Modal component is designed to be simple and accessible. It allows you to create customizable modal windows that are easy to integrate into your React projects. The component handles opening and closing of the modal, as well as user interactions smoothly. With default styles and customization options, you can adapt it to your specific needs.

Usage

import React, { useState } from 'react';
import Modal from 'react-modal-component-eli-ca'; 

const CreateEmployee = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const saveEmployee = () => {
        // Logic to save employee data (e.g., localStorage)
        setIsModalOpen(true);  // Open the modal after saving
    };

    const closeModal = () => {
        setIsModalOpen(false);  // Close the modal when needed
    };

    return (
        <div className="container">
            <h2>Create Employee</h2>
            <form>
                {/* Simplified form fields */}
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" />

                <button type="button" onClick={saveEmployee}>Save</button>
            </form>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Employee Created</h2>
                <p>The new employee has been successfully created.</p>
            </Modal>
        </div>
    );
};

export default CreateEmployee;

Props

isOpen (boolean): Controls whether the modal is open or closed. Required.
onClose (function): Function to call when the modal needs to be closed. Triggered when the user clicks the overlay or the close button. Required.
children (node): The content to be displayed inside the modal. Required.


Styles



.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    max-width: 500px;
    width: 100%;
}

.modal-close {
    position: absolute;
    top: -30px;
    right: -15px;
    background: black;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.modal-close:hover {
    background: #444;
}


License
This project is licensed under the MIT License. See the LICENSE file for details.
