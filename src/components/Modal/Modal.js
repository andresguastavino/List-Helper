import React, { Component } from 'react';

/* Classes */
import ModalManager from './../../classes/ModalManager';

/* Stylesheets */
import './Modal.css';

export default class Modal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalManager: ModalManager.getInstance(),
            title: '',
            message: '',
            show: false,
            hasAccept: false,
        }

        this.renderModal = this.renderModal.bind(this);
        this.cancel = this.cancel.bind(this);
        this.accept = this.accept.bind(this);
        this.onMouseAction = this.onMouseAction.bind(this);
    }

    componentDidMount() {
        const { modalManager } = this.state;
        modalManager.setModalRenderer(this.renderModal);
        this.setState({modalManager: modalManager});
    }

    renderModal() {
        const { modalManager } = this.state;
        this.setState({
            title: modalManager.getTitle(),
            message: modalManager.getMessage(),
            show: true,
            hasAccept: modalManager.hasAccept()
        });
    }   

    cancel() {
        const { modalManager } = this.state;
        modalManager.accept(false);
        this.setState({show : false});
    }

    accept() {
        const { modalManager } = this.state;
        modalManager.accept(true);
        this.setState({show : false});
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

    render() {
        const { themesManager } = this.props;
        const currentTheme = themesManager.getCurrentTheme();
        
        const { title, message, show, hasAccept } = this.state;  

        const style = {
            backgroundColor: currentTheme.mainColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor
        }

        if(show) {
            return (
                <div className="modal">
                    <div className="modal-inner" style={style} >
                        <div className="modal-header" style={style} >
                            <h2>{title}</h2>
                        </div>
                        <div className="modal-body" style={style} >
                            <p>{message}</p>
                        </div>
                        <div className="modal-footer" style={style} >
                            <div className="modal-close" style={style} onClick={this.cancel} onMouseEnter={() => this.onMouseAction('modal-close', 'enter')} onMouseLeave={() => this.onMouseAction('modal-close', 'leave')}>
                                { hasAccept ? 'Cancel' : 'Close' }
                            </div>
                            { hasAccept ? 
                                <div className="modal-accept" style={style} onClick={this.accept} onMouseEnter={() => this.onMouseAction('modal-accept', 'enter')} onMouseLeave={() => this.onMouseAction('modal-accept', 'leave')}>
                                    Accept
                                </div>
                             : '' 
                            }
                        </div>
                    </div>
                </div>
            );
        } else {
            return '';
        }
    }

}