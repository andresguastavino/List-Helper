import React, { Component } from 'react';

/* Classes */
import ThemesManager from './classes/ThemesManager';

/* Components */
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

/* Stylesheets */
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            themesManager: new ThemesManager(),
            statusUpdates: 0,
        }

        this.setTheme = this.setTheme.bind(this);
    }

    setTheme(themeIndex, customTheme) {
        let { themesManager } = this.state;

        if(themeIndex === 2) {
            themesManager.setCustomTheme(customTheme);
        }

        themesManager.setCurrentTheme(themeIndex);
        this.setState((state) => ({
            statusUpdates: state.statusUpdates + 1
        }));
        /*
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

        document.cookie = 'currentThemeIndex=' + theme + '; Path=/; Expires=Thu, 01 Jan 2022 00:00:01 GMT;';

        if(theme === 2) {
            document.cookie = 
            'customTheme=' + 
                mainColor + ',' + 
                secondaryColor + ',' + 
                borderColor + ',' + 
                textColor + 
                '; Path=/; Expires=Thu, 01 Jan 2022 00:00:01 GMT;';
        }*/
    }

    render() {
        const { themesManager } = this.state;
        const currentTheme = themesManager.getCurrentTheme();

        const style = {
            backgroundColor: currentTheme.secondaryColor
        }

        if(window.screen.width < 720 || window.innerWidth < 720) {
            console.log('window screen width: ' + window.screen.width);
            console.log('window innerWidth: ' + window.innerWidth);
            return (
                <div className="app" style={style}>
                    <h1>Sorry, we don't have support for this screen resolution yet. Try on a device with a width resolution greater than 720px.</h1>
                </div>
            );
        }

        return (
            <div className="app" style={style}>
                <Header setTheme={this.setTheme} themesManager={themesManager} />
                <Main themesManager={themesManager} />
                <Footer themesManager={themesManager} />
            </div>
        );
    }

}
