import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

    render() {
        const { themeProps } = this.props;

        const footerStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
        }

        const aStyle = {
            color: themeProps.textColor
        }

        return(
            <div className="footer" style={footerStyle}>
                <div className="bug-report">
                    <a style={aStyle} href="mailto:list.helper.bug.report@gmail.com">Report bug</a>
                </div>
                <div className="contact">
                    <a style={aStyle} href="mailto:list.helper.dev.contact@gmail.com">Contact</a>
                </div>
            </div>
        );
    }


}