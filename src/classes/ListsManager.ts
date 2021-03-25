import CookiesManager from './CookiesManager';

export default class ListsManager {

    lists: any[] = [];
    currentListIndex: number = -1;
    stateUpdater: Function = () => {};

    constructor() {
        this.setLists(true);
    }

    getLists() : any[] {
        let lists = this.lists;

        for(let i = 0; i < lists.length; i++) {
            for(let j = i + 1; j < lists.length; j++) {
                for(let k = 0; k < lists[i].name.length; k++) {
                    if(k < lists[j].name.length) {
                        if(lists[j].name[k] < lists[i].name[k]) {
                            let listAux = lists[j];
                            lists[j] = lists[i];
                            lists[i] = listAux;
                            break;
                        }
                    } else {
                        break;
                    }
                }
                
            }
        }

        return lists;
    }

    getCurrentList() : any {
        return this.lists[this.currentListIndex];
    }

    getCurrentListIndex() : number {
        return this.currentListIndex;
    }

    setLists(init : boolean) : void {
        this.lists = CookiesManager.getLists(init);
    }

    setCurrentListIndex(index : number) : void {
        if(this.currentListIndex !== -1 && this.getCurrentList().type.toLowerCase() !== 'daily')  {
            CookiesManager.saveList(this.getCurrentList());
            this.setLists(false);
        }

        this.currentListIndex = index;
        this.stateUpdater();
    }

    setStateUpdater(stateUpdater : Function) : void {
        this.stateUpdater = stateUpdater;
    }

    createList(list : any, override ?: boolean) : number {
        if(override === undefined) {
            override = false;
        }

        let lists = this.lists;
        let alreadyExists = false;

        for(let i = 0; i < lists.length; i++) {
            if(lists[i].name === list.name) {
                alreadyExists = true;
            }
        }

        if(alreadyExists) {
            if(!override) {
                return -1;
            }
        }

        CookiesManager.saveList(list);
        this.setLists(false);

        lists = this.lists;
        for(let i = 0; i < lists.length; i++) {
            if(lists[i].name === list.name) {
                this.currentListIndex = i;
            }
        }

        this.stateUpdater();
        return 0;
    }
    
    saveCurrentList() : void {
        if(this.currentListIndex !== -1 && this.getCurrentList().type.toLowerCase() !== 'daily') {
            CookiesManager.saveList(this.getCurrentList());
            this.setLists(false);
        }
    }

    updateItemValue(itemName : string, itemNewValue : string | number) : void {
        let currentList = this.getCurrentList();

        for(let i = 0; i < currentList.items.length; i++) {
            if(currentList.items[i].name === itemName) {
                currentList.items[i].value = itemNewValue;
            }
        }

        CookiesManager.saveList(currentList);
        this.stateUpdater();
    }

    deleteList(index : number) : void {
        let currentList = this.lists[this.currentListIndex];
        let listToDelete = this.lists[index];
        if(this.currentListIndex !== -1) {
            if(currentList.name === listToDelete.name) {
                this.currentListIndex = -1;
            }
        }

        CookiesManager.deleteList(listToDelete);
        this.setLists(false);
        this.stateUpdater();
    }

}