import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MdSnackBarModule, MdIconModule, MdListModule, MdTooltipModule, MdCardModule, MdButtonModule,
         MdToolbarModule, MdInputModule, MdSlideToggleModule, MdMenuModule, MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

import { CovalentLoadingModule, CovalentDialogsModule, CovalentMediaModule, CovalentLayoutModule,
         CovalentSearchModule, CovalentCommonModule } from '@covalent/core';

import { UsersComponent } from './users.component';
import { UsersFormComponent } from './form/form.component';

import { userRoutes } from './users.routes';

import { UserService, IUser, USER_PROVIDER, USERS_API } from './services/user.service';

export { UsersComponent, UsersFormComponent, UserService, IUser, USER_PROVIDER, USERS_API };

@NgModule({
  declarations: [
    UsersComponent,
    UsersFormComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    // angular modules
    CommonModule,
    FormsModule,
    RouterModule,
    // material modules
    MdSnackBarModule,
    MdIconModule,
    MdListModule,
    MdTooltipModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdSlideToggleModule,
    MdMenuModule,
    // covalent modules
    CovalentLoadingModule,
    CovalentDialogsModule,
    CovalentMediaModule,
    CovalentLayoutModule,
    CovalentSearchModule,
    CovalentCommonModule,
    // extra
    userRoutes,
  ], // modules needed to run this module
  providers: [
    { provide: USERS_API, useValue: ''},
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
    USER_PROVIDER,
  ],
})
export class UsersModule {}
