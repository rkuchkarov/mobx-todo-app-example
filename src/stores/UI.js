import { observable, action } from 'mobx';

class UIStore {
    @observable isModalOpen = false;

    @action openModal = () => {
        this.isModalOpen = true;
    }

    @action closeModal = () => {
        this.isModalOpen = false;
    }
}

export default new UIStore();