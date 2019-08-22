import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentMediaModule } from '@covalent/core/media';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CovalentHttpModule } from '@covalent/http';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentDialogsModule } from '@covalent/core/dialogs';

import { VantageSystemModule } from '@td-vantage/ui-platform/system';
import { VantageUserFeedbackModule } from '@td-vantage/ui-platform/utilities';

import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './dashboard.component';

describe('Dashboard Component', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let comp: DashboardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatToolbarModule,
        TranslateModule.forRoot(),
        CovalentMediaModule,
        CovalentHttpModule.forRoot(),
        CovalentLoadingModule,
        CovalentDialogsModule,
        VantageUserFeedbackModule,
        VantageSystemModule,
      ],
      declarations: [DashboardComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        comp = fixture.componentInstance;
      });
  }));

  it('checks if component was instantiated', async(() => {
    fixture.detectChanges();
    expect(comp).toBeTruthy();
  }));
});
