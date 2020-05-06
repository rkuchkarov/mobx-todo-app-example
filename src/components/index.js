import React from 'react';
import { observer, inject } from 'mobx-react';
import List from './List';
import Modal from './Modal';

const MainWrapper = ({ listStore, uiStore }) => {
    return (
        <div>
            <List items={listStore.items} onDelete={listStore.deleteItem} />
            <Modal 
                isOpen={uiStore.isModalOpen} 
                onClose={uiStore.closeModal} 
                onAdd={listStore.addItem} 
            />
            <button onClick={uiStore.openModal}>Add new</button>
        </div>
)};

export default inject('listStore', 'uiStore')(observer(MainWrapper));