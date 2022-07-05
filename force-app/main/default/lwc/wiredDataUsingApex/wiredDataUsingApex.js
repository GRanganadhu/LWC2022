import { LightningElement, wire, api } from 'lwc';
import getAllAccount from '@salesforce/apex/AccountController.getAllAccounts';

export default class WiredDataUsingApex extends LightningElement {
    results;
    error;
    @wire(getAllAccount) accounts;

    @wire(getAllAccount) account({data, error}){
        if(data){
            this.results =data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.data = undefined;
        }
    }
}