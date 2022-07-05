import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const field = ['Account.Name'];
export default class GetRecords extends LightningElement {
   @api recordId;
    @wire(getRecord, {recordId: '$recordId', fields:field}) account({data, error}){
        if(data){
            const name = data.fields.Name.value;
            console.log('Name:', name);
       }else if(error){
        console.error(error);
       }
    }

}