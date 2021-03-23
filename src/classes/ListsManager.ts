import CookiesManager from './CookiesManager';

export default class ListsManager {

    lists: Object[] = [];
    currentListIndex: number = 0;

    constructor() {
        this.lists = CookiesManager.getLists();
    }

    getLists() : Object[] {
        return this.lists;
    }

    getCurrentList() : Object {
        return this.lists[this.currentListIndex];
    }

}