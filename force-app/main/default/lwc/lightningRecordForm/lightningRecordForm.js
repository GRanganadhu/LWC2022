import { LightningElement, api } from 'lwc';

export default class LightningRecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    handleSuccess(event){
        this.recordId = event.detail.Id;
    }
}