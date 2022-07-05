import { LightningElement, api } from 'lwc';

export default class ChildPublicMethod extends LightningElement {
    value =100;
    @api publicMethod(){
        this.value = 200;
    }

    @api message = 'message from child';

    @api paramsWithPublicMethod(msg){
        this.message = msg;
    }
}