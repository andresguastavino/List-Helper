import React, { Component } from 'react';
import Item from './../Item/Item';
import './Items.css'

export default class Items extends Component {
    constructor(props) {
        super(props);

        this.getItems = this.getItems.bind(this);
        this.exportAsJson = this.exportAsJson.bind(this);
        this.onMouseAction = this.onMouseAction.bind(this);
        this.onEditItems = this.onEditItems.bind(this);
    }

    getItems() {
        const { themesManager, list, updateItemValue } = this.props;

        if(list !== undefined && list.items !== undefined) {
            let items = [];

            for(let item of list.items) {
                items.push(<Item key={item.key} name={item.name} value={item.value} type={list.type} themesManager={themesManager} updateItemValue={updateItemValue} />);
            }
    
            return items;
        }
    }

    exportAsJson() {
        let { list } = this.props;
        console.log(list);
        let items = [];
        for(let listItem of list.items) {
            let { name, value } = listItem;
            let item = {
                "name": name,
                "value": value
            };
            items.push(item);
        }
        list.items = items;
        let listAsJSON = JSON.stringify(list);
        let textArea = document.createElement('textarea');
        textArea.value = listAsJSON;
        document.body.append(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('List coppied to clipboard as JSON');
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

    onEditItems() {
        alert('feature not ready yet!');
    }

    render() {
        const { themesManager, list } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        }


        return(
            <div className="items" style={style}>
                <div className="items-header" style={style}>
                    <div className="items-title">
                        <p>{list.name + ' > Items / ' + list.type}</p>
                    </div>
                    <div className="items-buttons">
                        <div className="edit-items-button" style={style} onClick={this.onEditItems} onMouseEnter={() => this.onMouseAction('edit-items-button', 'enter')} onMouseLeave={() => this.onMouseAction('edit-items-button', 'leave')} >
                            <p>Edit list items</p>
                        </div>
                        <div className="export-json-button" style={style} onClick={this.exportAsJson} onMouseEnter={() => this.onMouseAction('export-json-button', 'enter')} onMouseLeave={() => this.onMouseAction('export-json-button', 'leave')} >
                            <p>Export list as JSON</p>
                        </div>
                    </div>
                </div>
                <div className="items-list">
                    {this.getItems()}
                </div>
            </div>
        );
    }
}