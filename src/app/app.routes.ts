import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { UsersComponent } from './users/users.component';
import { LogsComponent } from './logs/logs.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [{
      component: DashboardComponent,
      path: '',
    },
    {path: 'dashboard-product', component: DashboardProductComponent},
    {path: 'item/:id', component: DetailComponent},
    {path: 'logs', component: LogsComponent},
    {path: 'form', component: FormComponent},
    {path: 'users', component: UsersComponent},
  ]},
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes);
