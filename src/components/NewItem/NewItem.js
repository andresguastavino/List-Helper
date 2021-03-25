import React, { Component } from 'react';

export default class NewItem extends Component {

    constructor(props) {
        super(props);

        this.state =  {
            stateUpdates: 0,
        }

        this.stateUpdater = this.stateUpdater.bind(this);
    }

    componentDidMount() {
        const { themesManager } = this.props;
        themesManager.addNewItemStateUpdater(this.stateUpdater);
    }

    stateUpdater() {
        this.setState((state) => ({stateUpdates: state.stateUpdates + 1}));
    }

    render() {
        const { themesManager } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        }

        return(
            <div className="new-item">
                <input type="text" style={style} />
            </div>
        );
    }
    
}