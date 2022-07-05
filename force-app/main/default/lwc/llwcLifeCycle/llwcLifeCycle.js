import { LightningElement } from 'lwc';

export default class LlwcLifeCycle extends LightningElement {
    constructor(){
        super();
        console.log('parent constructor');
    }
    connectedCallback(){
        console.log('parent connectedCallback');
    }
    renderedCallback(){
        console.log('parent renderedCallback');
    }
    disconnectedCallback(){
        console.log('parent disconnectedCallback');
    }
}