import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdSnackBarModule, MdIconModule, MdListModule, MdTooltipModule, MdCardModule, MdButtonModule,
         MdToolbarModule, MdInputModule, MdSlideToggleModule, MdMenuModule } from '@angular/material';
import { CovalentLoadingModule, CovalentDialogsModule, CovalentMediaModule, CovalentLayoutModule,
         CovalentSearchModule, CovalentCommonModule } from '@covalent/core';

import { UsersRoutingModule, routedComponents } from './users-routing.module';
import { UserService, IUser, USER_PROVIDER, USERS_API } from './services/user.service';
export { UserService, IUser, USER_PROVIDER, USERS_API };

@NgModule({
  declarations: [
    routedComponents
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    UsersRoutingModule,
    // angular modules
    CommonModule,
    FormsModule,
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
  ], // modules needed to run this module
  providers: [
    { provide: USERS_API, useValue: ''},
    USER_PROVIDER,
  ],
})
export class UsersModule {}
