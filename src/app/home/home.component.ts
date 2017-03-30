import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    authData;

    redirect() {
        this.router.navigate([{ outlets: { primary: 'user' } }]);
    }
    getAuthData() {
        return new Promise((resolve) => {
            this.accounts.authDatas$
                .subscribe(data => resolve(data));
        });
    }

    constructor(private accounts: AccountService, private router: Router) {
        this.getAuthData()
            .then(res => console.log(res));
    }
}


