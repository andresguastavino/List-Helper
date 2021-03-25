import React, { Component } from 'react';

/* Stylesheets */
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

        this.setStatesAndColors = this.setStatesAndColors.bind(this);
        this.changeState = this.changeState.bind(this);
        this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        this.setStatesAndColors();
    }

    setStatesAndColors() {
        const { type, value } = this.props;
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
                default:
                    currentState = 2;
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
                default:
                    currentState = type.toLowerCase() === 'dual-state' ? 1 : 2;
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
        const { name, listsManager } = this.props;
        currentState = currentState + 1 >= states.length ? 0 : currentState + 1;
        this.setState({currentState: currentState});
        listsManager.updateItemValue(name, states[currentState]);
    }

    increase(increment) {
        let { quantity } = this.state;
        const { name, listsManager } = this.props;
        this.setState({quantity: quantity + increment});
        listsManager.updateItemValue(name, quantity);
    }

    render() {
        const { name, type, themesManager } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        const { states, colors, currentState, quantity } = this.state;

        const style = {
            borderColor: currentTheme.borderColor
        }

        const itemStyle = {
            borderColor: currentTheme.borderColor,
            backgroundColor: colors[currentState]
        }

        if(type.toLowerCase() !== 'quantities') {
            return(
                <div className="item" style={itemStyle} onClick={this.changeState} >
                    <div className="item-nombre" style={style}>
                        <p unselectable="on">{name}</p>
                    </div>
                    <div className="item-state">
                        <p unselectable="on">
                            {states[currentState]}
                        </p>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="item-quantity" style={itemStyle} >
                    <div className="decrease" style={style} onClick={() => this.increase(-100)}>{'<<<'}</div>
                    <div className="decrease middle-decrease" style={style} onClick={() => this.increase(-10)}>{'<<'}</div>
                    <div className="decrease" style={style} onClick={() => this.increase(-1)}>{'<'}</div>
                    <div className="item-info" style={style}>
                        <div className="item-nombre" style={style}>
                            <p unselectable="on">{quantity}</p>
                        </div>
                        <div className="item-state">
                            <p unselectable="on">
                                {name}
                            </p>
                        </div>
                    </div>
                    <div className="increase" style={style} onClick={() => this.increase(1)}>{'>'}</div>
                    <div className="increase middle-increase" style={style} onClick={() => this.increase(10)}>{'>>'}</div>
                    <div className="increase" style={style} onClick={() => this.increase(100)}>{'>>>'}</div> 
                </div>
            );
        }
    }
}