import { LightningElement } from 'lwc';
import  getAccounts from '@salesforce/apex/AccountController.searchAccount';
export default class ImparativeCall extends LightningElement {
    str;
    result;
    handleChange(event){
     this.str = event.target.value;
    }
    handleClick(){
        getAccounts({str: this.str}).then(res =>{
            this.result = res;
        }).catch(error =>{
            console.error(error);
        });
    }
}