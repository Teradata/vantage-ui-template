import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { CovalentCoreModule, TdLoadingService } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { DashboardComponent } from './dashboard.component';

describe('Component: Dashboard', () => {

  let noop: () => void = () => {
    // noop method
  };

  let generalResponses: Map<string, Response> = new Map<string, Response>();
  generalResponses.set('app/assets/icons/teradata.svg', new Response(new ResponseOptions({
    status: 200, body: '<svg></svg>',
  })));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule.forRoot(),
        CovalentHttpModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [
        DashboardComponent,
      ],
      providers: [
        MockBackend,
        { provide: XHRBackend, useExisting: MockBackend },
        { provide: TdLoadingService, useValue: {
            createReplaceComponent: noop,
            createOverlayComponent: noop,
            register: noop,
            resolve: noop,
          },
        },
      ],
    });
    TestBed.compileComponents();
  }));

  it('should create the component', async(inject([MockBackend], (mockBackend: MockBackend) => {
    let responses: Map<string, Response> = new Map<string, Response>(generalResponses);
    mockBackend.connections.subscribe((connection: any) => {
      connection.mockRespond(responses.get(connection.request.url));
    });
    responses.set('data/items.json', new Response(new ResponseOptions({
      status: 200, body: JSON.stringify([{
        item_id: 1,
        name: 'Suzy Cuningham',
        description: 'updated her account',
        icon: 'account_circle',
        created : '07/13/2016 11:05 AM',
      }, {
        item_id: 2,
        name: 'Bobby Daniels',
        description: 'made a deposit of $25.15',
        icon: 'account_balance_wallet',
        created : '07/01/2016 03:41 PM',
      }]),
    })));
    responses.set('data/users.json', new Response(new ResponseOptions({
      status: 200, body: JSON.stringify([{
        display_name : 'Suzy Cuningham',
        id : 'suzy.cuningham',
        email : 'suzy.cuningham@gmail.com',
        created : '10/01/2015 11:05 AM',
        last_access : '12/23/2015 11:05 AM',
        site_admin: true,
      }, {
        display_name : 'Bobby Daniels',
        id : 'bobbyD',
        email : 'bobbyD@outlook.com',
        created : '10/01/2015 11:05 AM',
        last_access : '12/23/2015 11:05 AM',
        site_admin: false,
      }]),
    })));

    let fixture: ComponentFixture<any> = TestBed.createComponent(DashboardComponent);
    let testComponent: DashboardComponent = fixture.debugElement.componentInstance;
    let element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.item-list')).toBeTruthy();
    expect(element.querySelector('.user-list')).toBeTruthy();
    testComponent.ngAfterViewInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.querySelectorAll('.item-list a[md-list-item]').length)
      .toBe(testComponent.items.length);
      expect(element.querySelectorAll('.user-list md-list-item').length)
      .toBe(testComponent.users.length);
    });
  })));
});
