import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateRecord extends LightningElement {
    name;
    nameHandler(event){
        this.name = event.target.value;
    }
    handleClick(){
        const fields = {'Name':this.name};
        const input = {apiName:'Account', fields};
        createRecord(input).then(res=>{
            //alert('Id:'+res.id);
            const cus = new ShowToastEvent({
                title  : 'Record Created',
                message : res.id,
                variant : 'success'
            });
            this.dispatchEvent(cus);
        }).catch(error=>{
            alert('Error'+error.body.message);
        });

    }
}