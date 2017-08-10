import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersFormComponent } from './form/form.component';

const routes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'add', component: UsersFormComponent },
    { path: ':id/edit', component: UsersFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
export const routedComponents = [UsersComponent, UsersFormComponent];
