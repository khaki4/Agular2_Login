import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent }
];

export const Routing =  RouterModule.forRoot(routes);
