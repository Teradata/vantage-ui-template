import { provideRouter, RouterConfig, Route } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: RouterConfig = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [{
      component: HomeComponent,
      path: '',
    },
    {path: 'users', component: UsersComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'item/:id', component: DetailComponent},
  ]},
];

export const APP_ROUTER_PROVIDERS: Route[] = [
  provideRouter(routes),
];
