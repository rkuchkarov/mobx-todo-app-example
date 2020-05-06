import React from 'react';
import Modal from 'react-modal';
import Input from './Input';

const ModalTask = ({ isOpen, onClose, onAdd }) => (
    <div>
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <div>
                <div onClick={onClose}>close</div>
                <Input onAdd={onAdd}/>
            </div>
        </Modal>
    </div>
);

export default ModalTask;