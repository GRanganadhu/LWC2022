import { LightningElement, api } from 'lwc';

export default class ChildCustomEvent extends LightningElement {
    @api message;
    handleClick(){
        const cus = new CustomEvent('sample',{detail:{message:this.message}});
        this.dispatchEvent(cus);
    }
}