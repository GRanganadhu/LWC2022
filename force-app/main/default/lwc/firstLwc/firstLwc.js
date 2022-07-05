import { LightningElement,api } from 'lwc';

export default class FirstLwc extends LightningElement {
    @api message = 'LWC component';

    handleClick(){
        const cus = new CustomEvent('sample', {detail:{message:this.message}});
        this.dispatchEvent(cus);
    }

    @api publicMethod(msg){
        alert(msg);
        
    }
    constructor(){
        super();
        console.log('child constructor');
    }
    connectedCallback(){
        console.log('child connectedCallback');
    }
    renderedCallback(){
        console.log('child renderedCallback');
    }
    disconnectedCallback(){
        console.log('child disconnectedCallback');
    }
}
