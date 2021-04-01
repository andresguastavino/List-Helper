import React, { Component } from 'react';

/* Classes */
import ThemesManager from './classes/ThemesManager';
import CookiesManager from './classes/CookiesManager';
import ModalManager from './classes/ModalManager';

/* Components */
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';

/* Stylesheets */
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            themesManager: new ThemesManager(),
            stateUpdates: 0,
            cookiesAccepted: true,
        }

        this.setTheme = this.setTheme.bind(this);
        this.acceptCookies = this.acceptCookies.bind(this);
    }

    componentDidMount() {
        let cookiesAccepted = CookiesManager.cookiesAccepted();
        if(!cookiesAccepted) {
            ModalManager.getInstance().setModalInfo(
                'Hold it right there', 
                'This site only uses cookies to store data. Do you accept cookies into your heart?',
                true,
                () => {
                    CookiesManager.acceptCookies();
                    this.acceptCookies(true);
                },
                () => {
                    this.acceptCookies(false);
                },
            );
        }
    }

    acceptCookies(cookiesAccepted) {
        this.setState({cookiesAccepted: cookiesAccepted});
    }

    setTheme(themeIndex, customTheme) {
        let { themesManager } = this.state;

        if(themeIndex === 2) {
            themesManager.setCustomTheme(customTheme);
        }

        themesManager.setCurrentTheme(themeIndex);
        this.setState((state) => ({
            stateUpdates: state.stateUpdates + 1
        }));
    }

    render() {
        const { cookiesAccepted, themesManager } = this.state;
        const currentTheme = themesManager.getCurrentTheme();

        const style = {
            backgroundColor: currentTheme.secondaryColor
        }

        document.querySelector('body').style.backgroundColor = currentTheme.secondaryColor;

        let noSupportForCurrentResolution = window.screen.width < 920;

        if(!cookiesAccepted /*|| noSupportForCurrentResolution*/) {
            return (
                <div className="app" style={style}>
                    <ErrorDisplay themesManager={themesManager} cookiesNotAccepted={!cookiesAccepted} />
                </div>
            );
        } else {
            return (
                <div className="app" style={style}>
                    <Header setTheme={this.setTheme} themesManager={themesManager} />
                    <Main themesManager={themesManager} />
                    {/*
                    <Footer themesManager={themesManager} />
                    <Modal themesManager={themesManager} />*/}
                </div>
            );
        }
    }

}
