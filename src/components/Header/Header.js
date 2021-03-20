import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showCustomThemeModal: false,
            theme: 0,
            mainColor: '#000',
            secondaryColor: '#000',
            borderColor: '#000',
            textColor: '#000'
        }

        this.changeTheme = this.changeTheme.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    componentDidMount() {
        let theme, mainColor, secondaryColor, borderColor, textColor;
        let customMainColor, customSecondaryColor, customBorderColor, customTextColor;
        let cookies = document.cookie;
        if(cookies !== '') {
            for(let cookie of cookies.split(';')) {
                let nombreLista = cookie.split('=')[0].trim();
                let items = cookie.split('=')[1].split(',');
                if(nombreLista === 'themeProps') {
                    theme = items[0];
                    mainColor = items[1];
                    secondaryColor = items[2];
                    borderColor = items[3];
                    textColor = items[4];   
                } else if(nombreLista === 'customThemeProps') {
                    customMainColor = items[0];
                    customSecondaryColor = items[1];
                    customBorderColor = items[2];
                    customTextColor = items[3];
                }
            }
        } 

        let showCustomThemeModal = false;
        if(theme === undefined) {
            theme = 0;
        } else if(parseInt(theme) === 2) {
            showCustomThemeModal = true;
        }

        this.setState({
            showCustomThemeModal
        });

        this.setState({
            theme: theme,
            showCustomThemeModal: showCustomThemeModal,
            mainColor: customMainColor !== undefined ? customMainColor : '#000',
            secondaryColor: customSecondaryColor !== undefined ? customSecondaryColor: '#000',
            borderColor: customBorderColor !== undefined ? customBorderColor : '#fff',
            textColor: customTextColor !== undefined ? customTextColor : '#fff'
        });

        let themeProps = {
            theme: theme,
            mainColor: mainColor,
            secondaryColor: secondaryColor,
            borderColor: borderColor,
            textColor: textColor
        }

        this.props.setTheme(themeProps);

        for(let input of document.querySelectorAll('input[type="radio"]')) {
            if(input.value === theme) {
                input.checked = true;
            }
        }
    }
   
    changeTheme(theme) {
        let themeProps = {};
        let showCustomThemeModal = true;

        if(theme === 0) {
            themeProps = {
                theme: theme,
                mainColor: '#fff',
                secondaryColor: '#fff',
                borderColor: '#000',
                textColor: '#000',
            }
            showCustomThemeModal = false;
        } else if(theme === 1) {
            themeProps = {
                theme: theme,
                mainColor: '#000',
                secondaryColor: '#201e25',
                borderColor: '#383434',
                textColor: '#fff',
            }
            showCustomThemeModal = false;
        } else {
            let colorInputs = document.querySelectorAll('input[type="color"]');
            themeProps = {
                theme: theme,
                mainColor: colorInputs[0].value,
                secondaryColor: colorInputs[1].value,
                borderColor: colorInputs[2].value,
                textColor: colorInputs[3].value,
            }
        }

        this.props.setTheme(themeProps);
        this.setState({
            themeProps,
            showCustomThemeModal
        });
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

    onMouseEnter(className) {
        let themeProps = this.props.themeProps;
        let div = document.querySelector('.' + className);
        div.style.backgroundColor = themeProps.textColor;
        div.style.color = themeProps.mainColor;
    }

    onMouseLeave(className) {
        let themeProps = this.props.themeProps;
        let div = document.querySelector('.' + className);
        div.style.backgroundColor = themeProps.mainColor;
        div.style.color = themeProps.textColor;
    }

    render() {   
        const { themeProps } = this.props;
        const { mainColor, secondaryColor, borderColor, textColor, showCustomThemeModal } = this.state; 
        let intputColorBorder = themeProps.borderColor;

        const headerStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }

        const verticalSeparatorStyle = {
            backgroundColor: themeProps.borderColor
        }

        const applyButtonStyle = {
            backgroundColor: themeProps.mainColor,
            borderColor: themeProps.borderColor,
            color: themeProps.textColor
        }

        return(
            <div className="header" style={headerStyle} >
                <div className="text-holder">
                    <h1>List Helper</h1>
                </div>
                <div className="vertical-separator" style={verticalSeparatorStyle} />
                <div className="vertical-separator" style={verticalSeparatorStyle} />
                <div className="theme-group-holder">
                    <div className="input-group-title">
                        <p>Theme</p>
                    </div>
                    <div className="input-group">
                        <input type="radio" name="theme" id="light" value="0" onClick={() => this.changeTheme(0)}/>
                        <label htmlFor="light">Light</label>
                    </div>
                    <div className="input-group">
                        <input type="radio" name="theme" id="dark" value="1" onClick={() => this.changeTheme(1)}/>
                        <label htmlFor="dark">Dark</label>
                    </div>
                    <div className="input-group">
                        <input type="radio" name="theme" id="custom" value="2" onClick={() => this.setState({showCustomThemeModal: true})}/>
                        <label htmlFor="custom">Custom</label>
                    </div>
                </div>
                { showCustomThemeModal ? <div className="vertical-separator" style={verticalSeparatorStyle} /> : '' }
                { showCustomThemeModal ? <div className="vertical-separator" style={verticalSeparatorStyle} /> : '' }
                { showCustomThemeModal ?
                    <div className="custom-theme-modal">
                        <div className="color-input-group">
                            <label htmlFor="main-color">
                                <span className="color-input" id="sp-main-color" style={{backgroundColor: mainColor, borderColor: intputColorBorder}} />
                            </label>
                            <input type="color" id="main-color" value={mainColor} onChange={() => this.changeColor('main-color')} />
                            <label htmlFor="main-color">Main</label>
                        </div>
                        <div className="color-input-group">
                            <label htmlFor="secondary-color">
                                <span className="color-input" id="sp-secondary-color" style={{backgroundColor: secondaryColor, borderColor: intputColorBorder}} />
                            </label>
                            <input type="color" id="secondary-color" value={secondaryColor} onChange={() => this.changeColor('secondary-color')} />
                            <label htmlFor="secondary-color">Secondary</label>
                        </div>
                        <div className="color-input-group">
                            <label htmlFor="border-color">
                                <span className="color-input" id="sp-border-color" style={{backgroundColor: borderColor, borderColor: intputColorBorder}} />
                            </label>
                            <input type="color" id="border-color" value={borderColor} onChange={() => this.changeColor('border-color')} />
                            <label htmlFor="border-color">Border</label>
                        </div>
                        <div className="color-input-group">
                            <label htmlFor="text-color">
                                <span className="color-input" id="sp-text-color" style={{backgroundColor: textColor, borderColor: intputColorBorder}} />
                            </label>
                            <input type="color" id="text-color" value={textColor} onChange={() => this.changeColor('text-color')} />
                            <label htmlFor="text-color">Text</label>
                        </div>
                        <div className="color-input-group">
                            <button type="button" className="apply-button" style={applyButtonStyle} onClick={() => this.changeTheme(2)} onMouseEnter={() => this.onMouseEnter('apply-button')} onMouseLeave={() => this.onMouseLeave('apply-button')} >Apply</button>
                        </div>
                    </div> : ''
                }
            </div>
        );
    }
}
