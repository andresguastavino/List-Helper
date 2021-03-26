import React, { Component } from 'react';

/* Stylesheets */
import './ErrorDisplay.css';

export default class ErrorDisplay extends Component {

    render() {
        const { themesManager, cookiesNotAccepted } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        }

        let pFontSize;
        if(cookiesNotAccepted) {
            pFontSize = {
                fontSize: '100px'
            } 
        } else {
            pFontSize = {
                fontSize: '40px'
            } 
        }

        return (
            <div className="cookies-not-accepted" style={style} >
                <p>Oops!</p>
                <p>¯\_(ツ)_/¯</p>
                <p style={pFontSize} >
                    { cookiesNotAccepted ? 
                    'You did not accept the use of cookies' :
                    'Sorry, we don\'t have support for this screen resolution yet. Try on a device with a width resolution equal or greater than 920px' }
                </p>
            </div>
        );
    }

}