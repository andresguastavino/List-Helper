import React, { Component } from 'react';
import './Lista.css';

export default class Lista extends Component {

    constructor(props) {
        super(props);

        this.deleteList = this.deleteList.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onMouseAction = this.onMouseAction.bind(this);
        this.buildClassName = this.buildClassName.bind(this);
    }

    onClick() {
        this.props.onClickList(this.props.name);
    }

    deleteList() {
        this.props.deleteList(this.props.name);
    }

    onMouseAction(type, index) {
        const { themesManager } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        let className = this.buildClassName(false);
        let div = document.querySelectorAll(className)[index];

        if(type === 'enter') {
            div.style.backgroundColor = currentTheme.textColor;
            div.style.color = currentTheme.mainColor;
        } else {
            div.style.backgroundColor = currentTheme.mainColor;
            div.style.color = currentTheme.textColor;
        }
    }

    buildClassName(isCalledFromRender) {
        let listName = this.props.name;
        let className;
        if(isCalledFromRender) {
            className = listName.replace(' ', '');
        } else {
            className = '.' + listName.replace(' ', '');
        }
        while(className.indexOf(' ') !== -1) {
            className = className.replace(' ', '');
        }
        return className.toLowerCase();
    }

    render() {
        const { themesManager, name } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        };
        
        let className = this.buildClassName(true);

        return(
            <div className="lista" style={style}>
                <div className={"button " + className} 
                    style={style} 
                    onClick={this.onClick}
                    onMouseEnter={() => this.onMouseAction('enter', 0)}
                    onMouseLeave={() => this.onMouseAction('leave', 0)}
                >
                    <p unselectable="on">{name}</p>
                </div>
                <div className={"button " + className} 
                    style={style} 
                    onClick={this.deleteList}
                    onMouseEnter={() => this.onMouseAction('enter', 1)}
                    onMouseLeave={() => this.onMouseAction('leave', 1)}
                >
                    <p>(-)</p>
                </div>
            </div>
        );
    }

}