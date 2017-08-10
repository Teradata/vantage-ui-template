import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';
import { TdMediaService } from '@covalent/core';
import { DashboardProductComponent } from './dashboard-product.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: DashboardProduct', () => {

  const noop: () => void = () => {
    // noop method
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [
        DashboardProductComponent,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TdMediaService, useValue: {
            registerQuery: noop,
            query: noop,
            broadcast: noop,
            createComponent: noop,
            createReplaceComponent: noop,
            register: noop,
            resolve: noop,
          },
        },
      ],
    })
    .compileComponents();
  }));

  it('should create the component', (done: any) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(DashboardProductComponent);
    const testComponent: DashboardProductComponent = fixture.debugElement.componentInstance;
    const element: HTMLElement = fixture.nativeElement;

    testComponent.ngAfterViewInit();
    fixture.detectChanges();
    expect(element.querySelector('td-layout-manage-list')).toBeTruthy();
    fixture.whenStable().then(() => {
      expect(element.querySelector('a[ng-reflect-router-link="/product"]')).toBeTruthy();
      expect(element.querySelector('a[ng-reflect-router-link="stats"]')).toBeTruthy();
      expect(element.querySelector('a[ng-reflect-router-link="features"]')).toBeTruthy();
      done();
    });
  });
});
