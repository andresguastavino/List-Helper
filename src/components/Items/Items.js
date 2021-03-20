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
        let list = this.props.list;
        let themeProps = this.props.themeProps;
        let updateItemValue = this.props.updateItemValue;

        if(list !== undefined && list.items !== undefined) {
            let items = [];

            for(let item of list.items) {
                items.push(<Item key={item.key} name={item.name} value={item.value} type={list.type} themeProps={themeProps} updateItemValue={updateItemValue} />);
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

    onMouseAction(type, className) {
        let { themeProps } = this.props;
        let div = document.querySelector('.' + className);
        if(type === 'enter') {
            div.style.backgroundColor = themeProps.textColor;
            div.style.color = themeProps.mainColor;
        } else {
            div.style.backgroundColor = themeProps.mainColor;
            div.style.color = themeProps.textColor;
        }
    }

    onEditItems() {
        alert('feature not ready yet!');
    }

    render() {
        const { themeProps, list } = this.props;

        const itemsStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }

        const itemsHeaderStyle = {
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }

        const editItemsButtonStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }

        const exportJSONButtonStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }


        return(
            <div className="items" style={itemsStyle}>
                <div className="items-header" style={itemsHeaderStyle}>
                    <div className="items-title">
                        <p>{list.name + ' > Items / ' + list.type}</p>
                    </div>
                    <div className="items-buttons">
                        <div className="edit-items-button" style={editItemsButtonStyle} onClick={this.onEditItems} onMouseEnter={() => this.onMouseAction('enter', 'edit-items-button')} onMouseLeave={() => this.onMouseAction('leave', 'edit-items-button')} >
                            <p>Edit list items</p>
                        </div>
                        <div className="export-json-button" style={exportJSONButtonStyle} onClick={this.exportAsJson} onMouseEnter={() => this.onMouseAction('enter', 'export-json-button')} onMouseLeave={() => this.onMouseAction('leave', 'export-json-button')} >
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