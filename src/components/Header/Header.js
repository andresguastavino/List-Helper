import React, { Component } from 'react';

/* Stylesheets */
import './Header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            theme: 0,
            mainColor: '#000',
            secondaryColor: '#000',
            borderColor: '#000',
            textColor: '#000',
            showCustomThemeModal: false,
            showThemesManager: false,
        }

        this.setTheme = this.setTheme.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.onMouseAction = this.onMouseAction.bind(this);
        this.showThemesManager = this.showThemesManager.bind(this);
        this.renderThemesManagerButton = this.renderThemesManagerButton.bind(this);
    }

    componentDidMount() {
        const { themesManager } = this.props;
        const customTheme = themesManager.getCustomTheme();
        const currentThemeIndex = themesManager.getCurrentThemeIndex();

        this.setState({
            theme: currentThemeIndex,
            mainColor: customTheme.mainColor,
            secondaryColor: customTheme.secondaryColor,
            borderColor: customTheme.borderColor,
            textColor: customTheme.textColor,
            showCustomThemeModal: currentThemeIndex === 2,
        });
    }
   
    setTheme(themeIndex) {
        let customTheme;
        let showCustomThemeModal = true;

        if(themeIndex === 2) {
            let inputs = document.querySelectorAll('input[type="color"]');
            customTheme = {
                mainColor: inputs[0].value,
                secondaryColor: inputs[1].value,
                borderColor: inputs[2].value,
                textColor: inputs[3].value
            };
        } else {
            showCustomThemeModal = false;
        }

        this.setState({showCustomThemeModal});
        this.props.setTheme(themeIndex, customTheme);
    }

    changeColor(input) {
        let value = document.querySelector('#' + input).value;
        let span = document.querySelector('#sp-' + input);
        span.style.backgroundColor = value;
        
        switch(input) {
            case 'main-color':
                this.setState({mainColor: value});
                break;
            case 'secondary-color':
                this.setState({secondaryColor: value});
                break;
            case 'border-color':
                this.setState({borderColor: value});
                break;
            default:
                this.setState({textColor: value});
                break;
        }
    }

    onMouseAction(className, type) {
        const { themesManager } = this.props;
        const currentTheme = themesManager.getCurrentTheme();
        
        let div = document.querySelector('.' + className);

        if(type === 'enter') {
            div.style.backgroundColor = currentTheme.textColor;
            div.style.color = currentTheme.mainColor;
        } else {
            div.style.backgroundColor = currentTheme.mainColor;
            div.style.color = currentTheme.textColor;
        }

    }

    showThemesManager() {        
        this.setState((state) => ({
            showThemesManager: !state.showThemesManager,
        }));
    }

    renderThemesManagerButton() {
        const { themesManager } = this.props;
        const currentTheme = themesManager.getCurrentTheme();

        const { showThemesManager } = this.state;

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        }

        return (
            <div className="themes-manager-container" onClick={this.showThemesManager} style={style}>
                <div className="themes-manager-button" style={style}>{showThemesManager ? '↑' : '↓' }</div>
            </div>
        )
    }

    render() {   
        const { themesManager } = this.props;
        const currentTheme = themesManager.getCurrentTheme();
        const currentThemeIndex = themesManager.getCurrentThemeIndex();

        const { mainColor, secondaryColor, borderColor, textColor, showCustomThemeModal, showThemesManager } = this.state; 

        const inputBorderColor = currentTheme.borderColor;

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        }

        const verticalSeparatorStyle = {
            backgroundColor: currentTheme.borderColor
        }

        let onMobile = window.screen.width < 920;

        if(!onMobile || (onMobile && showThemesManager)) {
            return(
                <div className="header" style={style}>
                    <div className="text-holder" style={style}>
                        <h1>List Helper</h1>
                    </div>
                    { onMobile ? this.renderThemesManagerButton() : ''}
                    { !onMobile ? <div className="vertical-separator" style={verticalSeparatorStyle}/> : '' }
                    { !onMobile ? <div className="vertical-separator" style={verticalSeparatorStyle}/> : '' }
                    <div className="theme-group-holder" style={style}>
                        <div className="input-group-title">
                            <p>Theme</p>
                        </div>
                        <div className="input-group">
                            <input type="radio" name="theme" id="light" value="0" checked={currentThemeIndex === 0} onClick={() => this.setTheme(0)} onChange={() => {}}/>
                            <label htmlFor="light">Light</label>
                        </div>
                        <div className="input-group">
                            <input type="radio" name="theme" id="dark" value="1" checked={currentThemeIndex === 1}  onClick={() => this.setTheme(1)} onChange={() => {}}/>
                            <label htmlFor="dark">Dark</label>
                        </div>
                        <div className="input-group">
                            <input type="radio" name="theme" id="custom" value="2" checked={currentThemeIndex === 2} onClick={() => this.setState({showCustomThemeModal: true})} onChange={() => {}}/>
                            <label htmlFor="custom">Custom</label>
                        </div>
                    </div>
                    { showCustomThemeModal ? <div className="vertical-separator" style={verticalSeparatorStyle} /> : '' }
                    { showCustomThemeModal ? <div className="vertical-separator" style={verticalSeparatorStyle} /> : '' }
                    { showCustomThemeModal ?
                        <div className="custom-theme-modal" style={style}>
                            <div className="color-input-group">
                                <label htmlFor="main-color">
                                    <span className="color-input" id="sp-main-color" style={{backgroundColor: mainColor, borderColor: inputBorderColor}} />
                                </label>
                                <input type="color" id="main-color" value={mainColor} onChange={() => this.changeColor('main-color')} />
                                <label htmlFor="main-color">Main</label>
                            </div>
                            <div className="color-input-group">
                                <label htmlFor="secondary-color">
                                    <span className="color-input" id="sp-secondary-color" style={{backgroundColor: secondaryColor, borderColor: inputBorderColor}} />
                                </label>
                                <input type="color" id="secondary-color" value={secondaryColor} onChange={() => this.changeColor('secondary-color')} />
                                <label htmlFor="secondary-color">Secondary</label>
                            </div>
                            <div className="color-input-group">
                                <label htmlFor="border-color">
                                    <span className="color-input" id="sp-border-color" style={{backgroundColor: borderColor, borderColor: inputBorderColor}} />
                                </label>
                                <input type="color" id="border-color" value={borderColor} onChange={() => this.changeColor('border-color')} />
                                <label htmlFor="border-color">Border</label>
                            </div>
                            <div className="color-input-group">
                                <label htmlFor="text-color">
                                    <span className="color-input" id="sp-text-color" style={{backgroundColor: textColor, borderColor: inputBorderColor}} />
                                </label>
                                <input type="color" id="text-color" value={textColor} onChange={() => this.changeColor('text-color')} />
                                <label htmlFor="text-color">Text</label>
                            </div>
                            <div className="color-input-group">
                                <button type="button" className="apply-button" style={style} onClick={() => this.setTheme(2)} onMouseEnter={() => this.onMouseAction('apply-button', 'enter')} onMouseLeave={() => this.onMouseAction('apply-button', 'leave')} >Apply</button>
                            </div>
                        </div> : ''
                    }
                </div>
            );
        } else if(onMobile && !showThemesManager) {
            return(
                <div className="header" style={style} >
                    <div className="text-holder">
                        <h1>List Helper</h1>
                    </div>
                    { onMobile ? this.renderThemesManagerButton() : ''}
                </div>
            );
        }
    }
}
