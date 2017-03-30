import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    accountName: string;
    getUserInfo() {
        return this.accountService.getCurrentUserInfo();
    }
    constructor(private accountService: AccountService) { }

    ngOnInit() {
        this.accountName = this.getUserInfo() && this.getUserInfo().email || 'Guest';
    }

}
