import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { Routing } from './app.routes';

import { AccountService } from './account.service';
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Routing
    ],
    providers: [AccountService],
    bootstrap: [AppComponent]
})
export class AppModule { }
