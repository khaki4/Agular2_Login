import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AccountService {
    authDatas$ = new Subject();

    constructor(private http: Http) {
        http.get('assets/authData.json')
            .subscribe(res => {
                this.authDatas$.next(res.json());
            });
    }
}
