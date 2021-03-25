import React, { Component } from 'react';

/* Components */
import Lista from './../Lista/Lista';

/* Stylesheets */
import './Listas.css';

export default class Listas extends Component {
    constructor(props) {
        super(props);

        this.listLists = this.listLists.bind(this);
        this.onMouseAction = this.onMouseAction.bind(this);
    }

    listLists() {
        const { themesManager, listsManager } = this.props;
        let lists = listsManager.getLists();
        let listsAux = [];

        if(lists.length !== 0) {
            for(let i = 0; i < lists.length; i++) {
                let list = lists[i];

                listsAux.push(
                    <Lista  
                        key={i} 
                        index={i}
                        name={list.name} 
                        listsManager={listsManager}
                        themesManager={themesManager}
                    />
                );
            }
        }

        if(listsAux.length !== 0) {
            return listsAux;
        } else {
            return (
                <div className="no-lists">
                    <p>There are no lists to show</p>
                </div>
            );
        }
    }

    onMouseAction(className, type) {
        const { themesManager } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        let div = document.querySelector('.' + className);

        if(type === 'enter') {
            div.style.backgroundColor = currentTheme.textColor;
            div.style.color = currentTheme.mainColor;
        } else {
            div.style.backgroundColor = currentTheme.mainColor;
            div.style.color = currentTheme.textColor;
        }
    }

    render() {
        const { themesManager, newList } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        }

        return(
            <div className="listas" style={style}>
                <div className="listas-header" style={style}>
                    <p>Lists</p>
                </div>
                <div className="listado-listas">
                    {this.listLists()}
                </div>
                <div className="nueva-lista" 
                    style={style} 
                    onClick={newList}
                    onMouseEnter={() => this.onMouseAction('nueva-lista', 'enter')}
                    onMouseLeave={() => this.onMouseAction('nueva-lista', 'leave')}
                >
                    <p>(+) New List</p>
                </div>  
            </div>
        );
    }
}