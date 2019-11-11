import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentDialogsModule } from '@covalent/core/dialogs';

import { CovalentHttpModule, ITdHttpInterceptor } from '@covalent/http';
import { CovalentBaseEchartsModule } from '@covalent/echarts';

import { VantageUserModule } from '@td-vantage/ui-platform/user';
import { VantageSystemModule } from '@td-vantage/ui-platform/system';
import { VantageAuthenticationModule, VantageAuthenticationInterceptor } from '@td-vantage/ui-platform/auth';
import { VantageUserFeedbackModule } from '@td-vantage/ui-platform/utilities';

import { AppComponent } from './app.component';
import { appRoutes, appRoutingProviders } from './app.routes';

import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import {
  getSelectedLanguage,
  getSelectedLocale,
  createTranslateLoader,
  SUPPORTED_LANGS,
} from '@shared/utils/translate';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const httpInterceptorProviders: Type<ITdHttpInterceptor>[] = [VantageAuthenticationInterceptor];

@NgModule({
  declarations: [AppComponent, MainComponent, DashboardComponent], // directives, components, and pipes owned by this NgModule
  imports: [
    appRoutes,
    /** Angular Modules */
    HttpClientModule,
    HttpClientXsrfModule.withOptions(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    /** Vantege UI Platform */
    VantageAuthenticationModule,
    VantageUserModule,
    VantageSystemModule,
    VantageUserFeedbackModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentBaseEchartsModule,
    TranslateModule.forRoot(),
    CovalentHttpModule.forRoot({
      interceptors: [
        {
          interceptor: VantageAuthenticationInterceptor,
          paths: ['**'],
        },
      ],
    }),
  ], // modules needed to run this module
  providers: [appRoutingProviders, httpInterceptorProviders], // additional providers needed for this module
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translateService: TranslateService) {
    // set the default language
    translateService.setDefaultLang('en');
    translateService.addLangs(SUPPORTED_LANGS);

    // Get selected language and load it
    const selectedLanguage: string = getSelectedLanguage(translateService);

    // using require here so can avoid making an http request ajax to get the language files
    // this prevents the language keys from flashing on the screen for a second before the actual
    // language files are loaded

    /* tslint:disable-next-line */
    const data: any = require('../../assets/i18n/' + selectedLanguage + '.json');
    translateService.setTranslation(selectedLanguage, data, false);
    translateService.use(selectedLanguage);
  }
}
