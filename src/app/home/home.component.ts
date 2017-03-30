import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { EmailValidatorService } from '../email-validator.service';


interface AccountModel {
    email: string;
    pwd: number;
}

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    accountName: string;

    goUserPage() {
        console.log('go users page');
        this.router.navigate([{ outlets: { primary: 'user' } }]);
    }
    validateAccount(accountData: AccountModel) {
        if (this.emailVal.isValidMailFormat(accountData.email)) {
            return accountData;
        } else {
            alert('Wrong Email');
        }
    }
    getUserInfo() {
        return this.accountService.getCurrentUserInfo();
    }
    onCickedLogin(emailValue, pwdValue) {
        const vlidatedAccount = this.validateAccount({
            email: emailValue,
            pwd: pwdValue * 1
        });

        if (!vlidatedAccount) {
            return;
        }
        console.log('clicked onCickedLogin');
        const decideAction = (currentUserInfo) => {
            if (currentUserInfo) {
                this.accountService.setCurrentUserInfo(currentUserInfo);
                this.goUserPage();
            } else {
                alert('Wrong Input');
            }
        };

        this.accountService.getAccoutList()
            .then((res) => {
                const dataList = <any>res;
                const currentUserInfo = dataList.resultSet.filter((item: AccountModel) => {
                    console.log('item', item);
                    console.log('vlidatedAccount', vlidatedAccount);
                    return (
                        item.email === vlidatedAccount.email
                        && item.pwd === vlidatedAccount.pwd
                    );
                });
                console.log('currentUserInfo :', currentUserInfo);
                return currentUserInfo[0];
            })
            .then(decideAction);
    }

    constructor(private accountService: AccountService, private router: Router, private emailVal: EmailValidatorService) {
        this.accountName = this.getUserInfo() && this.getUserInfo().email || 'Guest';
    }
}


