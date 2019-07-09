import { CovalentHttpModule } from '@covalent/http';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { DashboardComponent } from './dashboard.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { VantageSystemModule } from '@td-vantage/ui-platform/system';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CovalentMediaModule } from '@covalent/core/media';
import { VantageErrorService } from '@td-vantage/ui-platform/utilities';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(' test case for Dashboard Component ', () => {

    let fixture: ComponentFixture<DashboardComponent>;
    let comp: DashboardComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ TranslateModule.forRoot(), CovalentMediaModule, CovalentHttpModule.forRoot(), CovalentLoadingModule, VantageSystemModule, 
                MatDialogModule, CovalentDialogsModule, NoopAnimationsModule],
            declarations: [ DashboardComponent ],
            providers: [ ChangeDetectorRef,
                VantageErrorService,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(DashboardComponent);
            comp = fixture.componentInstance;
        });
    }));

    it('Register component', async(() => {
        fixture.detectChanges();
        expect(comp).toBeTruthy();
    }));

});
