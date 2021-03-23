import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

    render() {
        const { themesManager } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        }

        return(
            <div className="footer" style={style}>
                <div className="bug-report">
                    <a style={style} href="mailto:list.helper.bug.report@gmail.com">Report bug</a>
                </div>
                <div className="contact">
                    <a style={style} href="mailto:list.helper.dev.contact@gmail.com">Contact/Suggestions</a>
                </div>
            </div>
        );
    }


}