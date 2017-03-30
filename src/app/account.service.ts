import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

interface AccountModel {
    email: string;
    pwd: number;
}

@Injectable()
export class AccountService {
    private accountList;
    private dataURI = 'assets/authData.json';
    private currentUserInfo: AccountModel;

    getAccoutList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.dataURI)
                .subscribe(res => {
                    this.accountList = res.json();
                    resolve(this.accountList);
                });
        });
    }

    getCurrentUserInfo() {
        return this.currentUserInfo;
    }

    setCurrentUserInfo(userInfo) {
        this.currentUserInfo = userInfo;
    }

    constructor(private http: Http) { }
}
