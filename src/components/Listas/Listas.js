import React, { Component } from 'react';
import Lista from './../Lista/Lista';
import './Listas.css';

export default class Listas extends Component {
    constructor(props) {
        super(props);

        this.listLists = this.listLists.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    listLists() {
        let lists = [];

        if(this.props.lists.length !== 0) {
            for(let list of this.props.lists) {
                lists.push(
                    <Lista key={list.name} 
                        name={list.name} 
                        onClickList={this.props.onClickList} 
                        deleteList={this.props.deleteList} 
                        themeProps={this.props.themeProps} 
                    />
                );
            }
        }

        if(lists.length !== 0) {
            return lists;
        } else {
            return (
                <div className="no-lists">
                    <p>There are no lists to show</p>
                </div>
            );
        }
    }

    onMouseEnter() {
        let newListDiv = document.querySelector('.nueva-lista');
        const themeProps = this.props.themeProps;
        newListDiv.style.backgroundColor = themeProps.textColor;
        newListDiv.style.color = themeProps.mainColor;
    }

    onMouseLeave() {
        let newListDiv = document.querySelector('.nueva-lista');
        const themeProps = this.props.themeProps;
        newListDiv.style.backgroundColor = themeProps.mainColor;
        newListDiv.style.color = themeProps.textColor;
    }

    render() {
        const { themeProps } = this.props;

        const listasStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }

        const listasHeaderStyle = {
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }

        const nuevaListaStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }

        return(
            <div className="listas" style={listasStyle}>
                <div className="listas-header" style={listasHeaderStyle}>
                    <p>Lists</p>
                </div>
                <div className="listado-listas">
                    {this.listLists()}
                </div>
                <div className="nueva-lista" 
                    style={nuevaListaStyle} 
                    onClick={this.props.newList}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    <p>(+) New List</p>
                </div>  
            </div>
        );
    }
}