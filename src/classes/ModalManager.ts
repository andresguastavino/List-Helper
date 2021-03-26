export default class ModalManager {

    private static instance : ModalManager = new ModalManager();
    private title : string = '';
    private message : string = '';
    private modalHasAccept : boolean = false;
    private renderModal : Function = () => {};
    private callbackAccept : Function = () => {};

    private constructor() {}

    static getInstance() : ModalManager {
        return this.instance;
    }

    setModalInfo(title : string, message : string, modalHasAccept : boolean, callbackAccept ?: Function) : void {
        this.title = title;
        this.message = message;
        this.modalHasAccept = modalHasAccept;
        this.callbackAccept = callbackAccept !== undefined ? callbackAccept : () => {};
        this.renderModal();
    }

    setModalRenderer(renderModal : Function) : void {
        this.renderModal = renderModal;
    }

    override() : void {
        this.callbackAccept();
    }

    getTitle() : string {
        return this.title;
    }

    getMessage() : string {
        return this.message;
    }

    hasAccept() : boolean { 
        return this.modalHasAccept;
    }

}