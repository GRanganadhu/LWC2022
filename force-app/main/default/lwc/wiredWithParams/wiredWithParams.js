import { LightningElement, wire, track } from 'lwc';
import getParam from '@salesforce/apex/AccountController.searchAccount';
export default class WiredWithParams extends LightningElement {

    str;
    result;
    error;

    handleChange(event){
        this.str = event.target.value;
    }
    @wire(getParam,{str:'$str'}) account({data, error}){
        if(data){
            this.result = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.data = undefined;
        }
    }
}