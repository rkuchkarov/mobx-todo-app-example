import { observable, action } from 'mobx';

class ListStore {
    @observable items = [
        { title: 'loh' }, 
        { title: 'pidr' }
    ];

    @action setItems(payload) {
        this.items = payload;
    };
    
    @action.bound addItem(title) {
        let items = [...this.items];
        items.push({ title });
        this.setItems(items);
    };

    @action.bound deleteItem(index) {
        let items = [...this.items];
        items.splice(index, 1);
        this.setItems(items);
    };
}

export default new ListStore();