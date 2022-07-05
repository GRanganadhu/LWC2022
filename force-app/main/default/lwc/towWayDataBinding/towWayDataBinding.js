import { LightningElement } from 'lwc';

export default class TowWayDataBinding extends LightningElement {
    message='Default message';
    handleChange(event){
        this.message = event.target.value;
    }
}