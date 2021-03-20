import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            theme: 0,
            mainColor: '',
            secondaryColor: '',
            borderColor: '',
            textColor: '',
        }

        this.setTheme = this.setTheme.bind(this);
    }

    setTheme(themeProps) {
        let theme, mainColor, secondaryColor, borderColor, textColor;

        if(themeProps === undefined) {
            theme = 0;
            mainColor = '#000';
            secondaryColor = '#fff';
            borderColor = '#383434';
            textColor = '#fff';
        } else {
            theme = themeProps.theme;
            mainColor = themeProps.mainColor;
            secondaryColor = themeProps.secondaryColor;
            borderColor = themeProps.borderColor;
            textColor = themeProps.textColor;
        }

        this.setState({
            theme: theme,
            mainColor: mainColor,
            secondaryColor: secondaryColor,
            borderColor: borderColor,
            textColor: textColor
        });

        document.cookie = 
            'themeProps=' + 
                theme + ',' +
                mainColor + ',' + 
                secondaryColor + ',' + 
                borderColor + ',' + 
                textColor + 
                '; Path=/; Expires=Thu, 01 Jan 2022 00:00:01 GMT;';

        if(theme === 2) {
            document.cookie = 
            'customThemeProps=' + 
                mainColor + ',' + 
                secondaryColor + ',' + 
                borderColor + ',' + 
                textColor + 
                '; Path=/; Expires=Thu, 01 Jan 2022 00:00:01 GMT;';
        }
    }

    render() {
        const { theme, mainColor, secondaryColor, borderColor, textColor } = this.state;

        const appStyle = {
            backgroundColor: secondaryColor
        }

        let themeProps = {
            theme: theme,
            mainColor: mainColor,
            secondaryColor: secondaryColor,
            borderColor: borderColor,
            textColor: textColor
        }

        if(window.screen.width < 720 || window.innerWidth < 720) {
            console.log('window screen width: ' + window.screen.width);
            console.log('window innerWidth: ' + window.innerWidth);
            return (
                <div className="app" style={appStyle}>
                    <h1>Sorry, we don't have support for this screen resolution yet. Try on a device with a width resolution greater than 720px.</h1>
                </div>
            );
        }

        return (
            <div className="app" style={appStyle}>
                <Header setTheme={this.setTheme} themeProps={themeProps} />
                <Main themeProps={themeProps} />
                <Footer themeProps={themeProps} />
            </div>
        );
    }

}
