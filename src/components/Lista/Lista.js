import React, { Component } from 'react';

/* Stylesheets */
import './Lista.css';

export default class Lista extends Component {

    constructor(props) {
        super(props);

        this.selectList = this.selectList.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.onMouseAction = this.onMouseAction.bind(this);
        this.buildClassName = this.buildClassName.bind(this);
    }

    selectList() {
        const { listsManager, index} = this.props;
        listsManager.setCurrentListIndex(index);
    }

    deleteList() {
        const { listsManager, index } = this.props;
        listsManager.deleteList(index);
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
        const { name } = this.props;
        let className;

        if(isCalledFromRender) {
            className = name.replace(' ', '');
        } else {
            className = '.' + name.replace(' ', '');
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
                    onClick={this.selectList}
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