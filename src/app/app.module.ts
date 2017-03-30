import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import appRoutes from './app.routes';

import { ContactsService } from './contacts.service';
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
        appRoutes
    ],
    providers: [ContactsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
