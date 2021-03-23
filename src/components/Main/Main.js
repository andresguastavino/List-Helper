import React, { Component } from 'react';

/* Classes */
import ListsManager from './../../classes/ListsManager';
import CookiesManager from './../../classes/CookiesManager';

/* Components */
import Items from './../Items/Items';
import Listas from './../Listas/Listas'; 
import NewLista from './../NewLista/NewLista';

/* Stylesheets */
import './Main.css';

export default class Main extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            listsManager: new ListsManager(),
            lists: [],
            currentList: {},
            showNewListComponent: false,
            key: 0,
        }
    
        this.onClickList = this.onClickList.bind(this);
        this.newList = this.newList.bind(this);
        this.cancelNewList = this.cancelNewList.bind(this);
        this.createList = this.createList.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.setLists = this.setLists.bind(this);
        this.updateCookies = this.updateCookies.bind(this);
        this.updateItemValue = this.updateItemValue.bind(this);
    }
    
    componentDidMount() {
        //this.setLists();
    }

    setLists() {
        let cookies = document.cookie;
        let key = 0;

        if(cookies !== '') {
            let lists = [];

            for(let cookie of cookies.split(';')) {
                let listName = cookie.split('=')[0].trim();

                if(listName !== 'themeProps' && listName !== 'customThemeProps') {
                    let listInfo = cookie.split('=')[1].split(',');
                    let type = listInfo[0];
                    listInfo.shift();
                    let items = listInfo;

                    let listItems = [];
                    for(let item of items) {
                        let listItem;
                        if(type.toLowerCase() === 'daily') {
                            listItem = {
                                "name": item.split(':')[0].trim(),
                                "value": 'Ausent',
                                "key": key
                            }
                        } else {
                            listItem = {
                                "name": item.split(':')[0].trim(),
                                "value": item.split(':')[1].trim(),
                                "key": key
                            }
                        }
                        key++;
                        listItems.push(listItem);
                    }
                    items = listItems;

                    lists.push({
                        "name": listName,
                        "type": type, 
                        "items": items
                    });
                }
            }
            
            this.setState({
                lists,
                key
            });
        } 
    }

    newList() {
        this.updateCookies(this.state.currentList);
        this.setState({showNewListComponent: true});
    }
      
    cancelNewList() {
        this.setState({showNewListComponent: false});
    }
    
    createList(newList, override) {
        let { lists, key } = this.state;

        for(let item of newList.items) {
            item.key = key++;
        }

        if(override) {
            for(let list of lists) {
                if(list.name === newList.name) {
                    list.type = newList.type;
                    list.items = newList.items;
                }
            }
        } else {
            lists.push(newList);

        }

        this.setState((state) => {
            return {
                lists: lists,
                currentList: newList,
                showNewListComponent: false,
                key: key
            }
        });

        this.updateCookies(newList);
    }

    updateCookies(list) {
        if(list !== undefined && list.name !== undefined) {
            let cookie = list.name + '=' + list.type + ',';

            for(let i = 0; i < list.items.length; i++) {
                let item = list.items[i];

                if(list.type.toLowerCase() === 'daily') {
                    cookie += item.name;
                } else {
                    cookie += item.name + ':' + item.value;
                }

                if(i !== list.items.length - 1) {
                    cookie += ',';
                } else {
                    cookie += ';';
                }
            }

            cookie += 'Path=/;Expires=Thu, 01 Jan ' + (new Date().getFullYear() + 1) + ' 00:00:00 GMT;';

            document.cookie = cookie;
        }
    }

    updateItemValue(itemName, newValue, listType) {
        let { lists, currentList } = this.state;

        for(let list of lists) {
            if(list.name === currentList.name) {
                for(let item of list.items) {
                    if(item.name === itemName) {
                        item.value = newValue;
                    }
                }
            }
        }

        this.setState({
            lists,
            currentList
        });

        if(listType.toLowerCase() !== 'daily') {
            this.updateCookies(currentList);
        }
    }
    
    onClickList(listName) {
        this.setState({currentList: {}});
        let currentList = {};

        if(this.state.currentList !== undefined
            && this.state.currentList.name !== undefined
            && this.state.currentList.type.toLowerCase() !== 'daily'
        ) {
            this.updateCookies(this.state.currentList);
        }
    
        for(let list of this.state.lists) {
            if(list.name === listName) {
                currentList = list;
            }
        }
    
        this.setState({
            currentList: currentList,
            showNewListComponent: false
        });
    }
    
    deleteList(listName) {
        let lists = this.state.lists;
        let currentList = this.state.currentList;

        if(currentList !== undefined 
            && listName === currentList.name
        ) {
            this.setState({currentList: {}});
        }

        let listIndex;
        for(let list of lists) {
            if(list.name === listName) {
                listIndex = lists.indexOf(list);
            }
        }
        
        let list = lists[listIndex];
        document.cookie = list.name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        lists.splice(listIndex, 1)
        this.setState({lists: lists});
    }

    render() {
        const { themesManager } = this.props;
        const { lists, currentList, showNewListComponent, listsManager} = this.state;

        return(
          <div className="main" >
            <Listas listsManager={listsManager}
                onClickList={this.onClickList} 
                newList={this.newList}
                deleteList={this.deleteList}
                themesManager={themesManager}
            />
            { 
                !showNewListComponent ? 
                    (currentList.name !== undefined ? 
                        <Items list={currentList} themesManager={themesManager} updateItemValue={this.updateItemValue} /> 
                        : 
                        '') 
                    :
                    <NewLista 
                        cancelNewList={this.cancelNewList} 
                        createList={this.createList}  
                        themesManager={themesManager}
                    /> 
            }
          </div>
        );
    }

}