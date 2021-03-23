import React, { Component } from 'react';
import NewItem from './../NewItem/NewItem';
import './NewLista.css';

export default class NewLista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemInputsAddRate: 5,
            itemInputs: [],
        }

        this.createLista = this.createLista.bind(this);
        this.createItemsInputs = this.createItemsInputs.bind(this);
        this.addItemInput = this.addItemInput.bind(this);
        this.onMouseAction = this.onMouseAction.bind(this);
        this.importFromJSON = this.importFromJSON.bind(this);
        this.overrideExistingList = this.overrideExistingList.bind(this);
    }

    componentDidMount() {
        this.createItemsInputs();
    }

    createLista() {
        let name = document.querySelector('#nombre').value.trim();
        if(name === undefined || name === '') {
            alert('Name can\'t be empty');
            return;
        }

        let firstChar = name.charAt(0);
        if(firstChar >= 0 && firstChar <= 9) {
            alert('The first character of the name can\'t be a number');
            return;
        }

        let type = document.querySelector('#type').value.trim();
        let initialState = '';
        if(type !== '') {
            if(type.toLowerCase() === 'daily') {
                initialState = 'Ausent';
            } else if(type.toLowerCase() === 'quantities') {
                initialState = 0;
            } else if(type.toLowerCase() === 'dual-state' || type.toLowerCase() === 'triple-state') {
                initialState = 'Pending';
            }
        } else {
            alert('You must select a list type');
            return; 
        }

        let itemInputs = document.querySelectorAll('.new-item input');
        let items = [];
        for(let itemInput of itemInputs) {
            if(itemInput.value !== '') {
                items.push({
                    "name": itemInput.value.trim(),
                    "value": initialState
                });
            }
        }

        if(items.length === 0) {
            alert('Can\'t create a list with no items');
            return;
        }

        let override = this.overrideExistingList(name);
        if(override !== undefined) {
            if(!override) {
                return;
            }
        } else {
            override = false;
        }

        let newList = {
            "name": name,
            "type": type,
            "items": items
        }

        this.props.createList(newList, override);
    }

    overrideExistingList(listName) {
        let override;
        let cookies = document.cookie;
        for(let cookie of cookies.split(';')) {
            let name = cookie.split('=')[0];
            if(name.trim() === listName) {
                override = window.confirm('There is already a list with the same name.\n' +
                    'Do you want to override it\'s type and items?');
            }
        }

        return override;
    }

    createItemsInputs() {
        let itemInputs = [];
        let itemInputsAddRate = this.state.itemInputsAddRate;

        for(let i = 1; i < itemInputsAddRate + 1; i++) {
            itemInputs.push(<NewItem key={i} />);
        }

        this.setState({itemInputs: itemInputs});
    }

    addItemInput() {
        let itemInputs = this.state.itemInputs;
        let itemInputsAddRate = this.state.itemInputsAddRate;
        let totalInputs = itemInputs.length;

        for(let i = 1; i < itemInputsAddRate + 1; i++) {
            itemInputs.push(<NewItem key={totalInputs + i} />);
        }

        this.setState({itemInputs: itemInputs});
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

    importFromJSON() {
        let textarea = document.querySelector('textarea#import-json');
        let listAsJSON = textarea.value;
        let newList;
        try {
            newList = JSON.parse(listAsJSON);
        } catch(error) {
            alert('An unexpected error ocurred\nError detail:\n"' + String(error) + '"');
            return;
        }
        
        let override = this.overrideExistingList(newList.name);
        if(override !== undefined) {
            if(!override) {
                return;
            }
        } else {
            override = false;
        }

        this.props.createList(newList, override);
    }

    render() {
        const { themesManager, cancelNewList } = this.props; 
        const currentTheme = themesManager.getCurrentTheme();

        const { itemInputs } = this.state;

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        }

        return(
            <div className="new-lista" style={style} >
                <div className="new-lista-header" style={style} >
                    <p>New List</p>
                </div>
                <div className="new-lista-form">
                    <div className="label-input">
                        <div className="label">
                            <label htmlFor="nombre">Name</label>
                        </div>
                        <div className="input">
                            <input type="text" id="nombre" name="nombre" />
                        </div>
                    </div>
                    <div className="label-input">
                        <div className="label">
                            <label htmlFor="type">Type</label>
                        </div>
                        <div className="input">
                            <select name="type" id="type">
                                <option value="">--- Select Type ---</option>
                                <option value="Daily">Daily (Ausent, Here, Spoke)</option>
                                <option value="Dual-State">Dual state list (Pending, Done)</option>
                                <option value="Triple-State">Triple state list (Pending, Current, Done)</option>
                                <option value="Quantities">Quantities (Item and quantity)</option>
                            </select>
                        </div>
                    </div>
                    <div className="label-input">
                        <div className="label">
                            <p>Items</p>
                        </div>
                        <div className="input">
                            {itemInputs}
                        </div>
                    </div>
                    <div className="label-input">
                        <div className="label"></div>
                        <div className="input">
                            <button style={style} className="button-add-inputs" onClick={this.addItemInput} onMouseEnter={() => this.onMouseAction('button-add-inputs', 'enter')} onMouseLeave={() => this.onMouseAction('button-add-inputs', 'leave')} >(+) Item</button>
                        </div>
                    </div>
                    <div className="buttons">
                        <button type="button" className="button-cancel" style={style} onClick={cancelNewList} onMouseEnter={() => this.onMouseAction('button-cancel', 'enter')} onMouseLeave={() => this.onMouseAction('button-cancel', 'leave')} >Cancel</button>
                        <button type="button" className="button-add" style={style} onClick={this.createLista} onMouseEnter={() => this.onMouseAction('button-add', 'enter')} onMouseLeave={() => this.onMouseAction('button-add', 'leave')} >Add new list</button>
                    </div>
                    <div className="horizontalSeparator" style={style} />
                    <div className="label-input">
                        <div className="label">
                            <label htmlFor="import-json">JSON</label>
                        </div>
                        <div className="input">
                            <textarea resizable="true" id="import-json" rows="5" cols="40" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button type="button" className="button-import" style={style} onClick={this.importFromJSON} onMouseEnter={() => this.onMouseAction('button-import', 'enter')} onMouseLeave={() => this.onMouseAction('button-import', 'leave')} >Import from JSON</button>
                    </div>
                </div>
            </div>
        );
    }

}