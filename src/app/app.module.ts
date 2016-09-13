import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CovalentCoreModule, TD_LOADING_ENTRY_COMPONENTS } from '@covalent/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { appRoutes, appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    UsersComponent,
    DetailComponent,
    LoginComponent,
    DashboardComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ], // additional providers needed for this module
  entryComponents: [ TD_LOADING_ENTRY_COMPONENTS ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
