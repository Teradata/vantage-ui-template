import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FlexLayoutModule, } from '@angular/flex-layout';
import {
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule,
} from '@covalent/core';
import {
  MatButtonModule, MdCardModule, MatIconModule,
  MatListModule, MdMenuModule, MdTooltipModule,
  MdSlideToggleModule, MdInputModule, MdCheckboxModule,
  MatToolbarModule, MdSnackBarModule, MatSidenavModule,
  MdTabsModule, MdSelectModule, MATERIAL_COMPATIBILITY_MODE,
} from '@angular/material';
import { NgxChartsModule, } from '@swimlane/ngx-charts';

const FLEX_LAYOUT_MODULES: any[] = [
  FlexLayoutModule,
];

const ANGULAR_MODULES: any[] = [
  FormsModule, ReactiveFormsModule,
];

const MATERIAL_MODULES: any[] = [
  MatButtonModule, MdCardModule, MatIconModule,
  MatListModule, MdMenuModule, MdTooltipModule,
  MdSlideToggleModule, MdInputModule, MdCheckboxModule,
  MatToolbarModule, MdSnackBarModule, MatSidenavModule,
  MdTabsModule, MdSelectModule,
];

const COVALENT_MODULES: any[] = [
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule,
];

const CHART_MODULES: any[] = [
  NgxChartsModule,
];

@NgModule({
  imports: [
    CommonModule,
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,
    CHART_MODULES,
    FLEX_LAYOUT_MODULES,
  ],
  declarations: [

  ],
  exports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,
    CHART_MODULES,
    FLEX_LAYOUT_MODULES,
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
  ],
})
export class SharedModule { }
