import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
    template: `
    <div (click)="redirect()">
        {{account}}
    </div>
    `
})
export class HomeComponent {
    account = this.contacts.contacts.resultSet[0].email;
    redirect() {
        this.router.navigate([{ outlets: { primary: 'user'}}]);
    }
    constructor(private contacts: ContactsService, private router: Router) { }
}


