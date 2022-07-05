import { LightningElement } from 'lwc';

export default class ParentCustomEvent extends LightningElement {
    handleCustomEvent(event){
        const msg = event.detail.message;
        alert('Handle custom event');
        alert('Message:'+msg);
    }
}