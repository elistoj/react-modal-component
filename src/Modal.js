import React, { memo } from 'react';

const Modal = memo(({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={handleContentClick}>
                <button className="modal-close" onClick={onClose} aria-label="Close Modal">×</button>
                {children}
            </div>
        </div>
    );
});

export default Modal;
