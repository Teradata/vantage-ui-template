import {
  beforeEach,
  addProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UsersComponent } from './users.component';

import { UsersService } from '../../services';

describe('Component: Users', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      UsersComponent,
      UsersService,
    ]);
  });
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([UsersComponent],
      (component: UsersComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UsersTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(UsersComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'qs-test',
  template: `
    <qs-users></qs-users>
  `,
  directives: [UsersComponent],
})
class UsersTestControllerComponent {
}
