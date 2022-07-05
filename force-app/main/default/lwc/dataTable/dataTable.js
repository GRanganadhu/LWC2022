import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
export default class DataTable extends LightningElement {
    results;
    error;
    column = [
        {label:'Name',fieldName:'Name', type:'text', editable:'true', sortable:'false'}
    ];
    @wire(getAllAccounts) accounts({data, error}){
        if(data){
            this.results = data;
        }else if(error){
            this.error = error;
        }
    }
}