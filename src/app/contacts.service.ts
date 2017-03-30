import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {
    contacts = {
        resultSet: [
            {
                'email': 'letnow@naver.com',
                'pwd': 'qwer'
            }
        ]
    };
    msg = `hello`;
    constructor() { }

}
