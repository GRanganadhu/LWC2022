import { LightningElement } from 'lwc';

export default class ParentPublicMethod extends LightningElement {
    handleClick(){
        this.template.querySelector('c-child-public-method').publicMethod();
    }

    handleMethod(){
        this.template.querySelector('c-child-public-method').paramsWithPublicMethod('Message from parent comp');
    }
}