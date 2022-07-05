import { LightningElement } from 'lwc';

export default class ParentPublicProperty extends LightningElement {
    contact = [
        {
            Id: 1,
            Name: 'Ranganath'
        },
        {
            Id: 2,
            Name: 'Hitesh'
        },
        {
            Id: 3,
            Name: 'Kundan'
        }
    ];
}
