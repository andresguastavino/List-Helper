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
        let className = this.buildClassName(false);
        let themeProps = this.props.themeProps;
        let div = document.querySelectorAll(className)[index];

        if(type === 'enter') {
            div.style.backgroundColor = themeProps.textColor;
            div.style.color = themeProps.mainColor;
        } else {
            div.style.backgroundColor = themeProps.mainColor;
            div.style.color = themeProps.textColor;
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
        const { themeProps, name } = this.props;

        const listaStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }
        
        const buttonStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }

        let className = this.buildClassName(true);

        return(
            <div className="lista" style={listaStyle}>
                <div className={"button " + className} 
                    style={buttonStyle} 
                    onClick={this.onClick}
                    onMouseEnter={() => this.onMouseAction('enter', 0)}
                    onMouseLeave={() => this.onMouseAction('leave', 0)}
                >
                    <p unselectable="on">{name}</p>
                </div>
                <div className={"button " + className} 
                    style={buttonStyle} 
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