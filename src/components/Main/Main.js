import React, { Component } from 'react';

/* Classes */
import ListsManager from './../../classes/ListsManager';

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
            showNewListComponent: false,
            stateUpdates: 0,
        }
    
        this.stateUpdater = this.stateUpdater.bind(this);
        this.newList = this.newList.bind(this);
        this.cancelNewList = this.cancelNewList.bind(this);
    }

    componentDidMount() {
        const { listsManager } = this.state;
        listsManager.setStateUpdater(this.stateUpdater);
        this.setState({listsManager : listsManager});
    }

    stateUpdater() {
        this.setState((state) => ({
            showNewListComponent: false,
            stateUpdates: state.stateUpdates + 1
        }));
    }

    newList() {
        const { listsManager } = this.state; 
        listsManager.saveCurrentList();
        this.setState({showNewListComponent: true});
    }
      
    cancelNewList() {
        this.setState({showNewListComponent: false});
    }

    render() {
        const { themesManager } = this.props;
        
        const { listsManager, showNewListComponent } = this.state;

        let currentList = {};
        if(listsManager.getCurrentListIndex() !== -1) {
            currentList = listsManager.getCurrentList();
        }

        return(
            <div className="main" >
                <Listas 
                    newList={this.newList}
                    listsManager={listsManager}
                    themesManager={themesManager}
                />
                {
                    !showNewListComponent ? 
                        (currentList.name !== undefined ?
                            <Items 
                                listsManager={listsManager} 
                                themesManager={themesManager} 
                            /> 
                            : 
                            '') 
                        :
                        <NewLista 
                            cancelNewList={this.cancelNewList} 
                            listsManager={listsManager}
                            themesManager={themesManager}
                        /> 
                }
          </div>
        );
    }

}