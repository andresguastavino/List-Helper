import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            states: [],
            colors: [],
            currentState: 0,
            quantity: 0,
        }

        this.changeState = this.changeState.bind(this);
        this.increase = this.increase.bind(this);
        this.setStatesAndColors = this.setStatesAndColors.bind(this);
    }

    componentDidMount() {
        this.setStatesAndColors();
    }

    setStatesAndColors() {
        let { type, value } = this.props;
        let states = [];
        let colors = [];
        let currentState = 0;
        let quantity = 0;

        switch(type.toLowerCase()) {
            case 'daily':
                states = ['Ausent', 'Here', 'Spoke'];
                colors = ['#a43333', '#201e25', '#33b033'];
                break;
            case 'dual-state':
                states = ['Pending', 'Done'];
                colors = ['#201e25', '#33b033'];
                break;
            case 'triple-state':
                states = ['Pending', 'In progress', 'Done'];
                colors = ['#201e25', '#29477a', '#33b033'];
                break;
            default:
                colors = ['#d4942a'];
                break;
        }
        
        if(type.toLowerCase() === 'daily') {
            switch(value) {
                case 'Ausent':
                    currentState = 0;
                    break;
                case 'Here':
                    currentState = 1;
                    break;
                case 'Spoke':
                    currentState = 2;
                    break;
                default:
                    currentState = -1;
                    break;
            }
        } else if(type.toLowerCase() === 'dual-state' || type.toLowerCase() === 'triple-state') {
            switch(value) {
                case 'Pending':
                    currentState = 0;
                    break;
                case 'In progress':
                    currentState = 1;
                    break;
                case 'Done':
                    currentState = type.toLowerCase() === 'dual-state' ? 1 : 2;
                    break;
                default:
                    currentState = -1;
                    break;
            }
        } else {
            quantity = value;
        }

        this.setState({
            states,
            colors,
            currentState,
            quantity
        });
    }

    changeState() {
        let { states, currentState } = this.state;
        let { name, type } = this.props;
        currentState = currentState + 1 >= states.length ? 0 : currentState + 1;
        this.setState({currentState: currentState});
        this.props.updateItemValue(name, states[currentState], type);
    }

    increase(increment) {
        let { quantity } = this.state;
        let { name, type } = this.props;
        this.setState({quantity: quantity + increment});
        this.props.updateItemValue(name, quantity, type);
    }

    render() {
        const { name, type, themeProps } = this.props;
        const { states, colors, currentState, quantity } = this.state;

        const itemStyle = {
            borderColor: themeProps.borderColor,
            backgroundColor: colors[currentState]
        }

        const itemNombreStyle = {
            borderColor: themeProps.borderColor
        }

        const increaseStyle = {
            borderColor: themeProps.borderColor
        }

        const itemInfoStyle = {
            borderColor: themeProps.borderColor
        }

        if(type.toLowerCase() !== 'quantities') {
            return(
                <div className="item" style={itemStyle} onClick={this.changeState} >
                    <div className="item-nombre" style={itemNombreStyle}>
                        <p unselectable="on">{name}</p>
                    </div>
                    <div className="item-state">
                        <p unselectable="on">
                            { states[currentState] }
                        </p>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="item-quantity" style={itemStyle} >
                    <div className="decrease" style={increaseStyle} onClick={() => this.increase(-100)}>{'<<<'}</div>
                    <div className="decrease middle-decrease" style={increaseStyle} onClick={() => this.increase(-10)}>{'<<'}</div>
                    <div className="decrease" style={increaseStyle} onClick={() => this.increase(-1)}>{'<'}</div>
                    <div className="item-info" style={itemInfoStyle}>
                        <div className="item-nombre" style={itemNombreStyle}>
                            <p unselectable="on">{quantity}</p>
                        </div>
                        <div className="item-state">
                            <p unselectable="on">
                                {name}
                            </p>
                        </div>
                    </div>
                    <div className="increase" style={increaseStyle} onClick={() => this.increase(1)}>{'>'}</div>
                    <div className="increase middle-increase" style={increaseStyle} onClick={() => this.increase(10)}>{'>>'}</div>
                    <div className="increase" style={increaseStyle} onClick={() => this.increase(100)}>{'>>>'}</div> 
                </div>
            );
        }
    }
}