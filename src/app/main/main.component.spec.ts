import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { MainComponent } from './main.component';

import { TD_LAYOUT_PROVIDERS } from '@covalent/core';

describe('Component: Main', () => {
  let builder: TestComponentBuilder;
  class Mock {}

  beforeEachProviders(() => [
    MainComponent,
    TD_LAYOUT_PROVIDERS,
    {provide: Router, useClass: Mock},
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([MainComponent],
      (component: MainComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MainTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(MainComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'qs-test',
  template: `
    <qs-main></qs-main>
  `,
  directives: [MainComponent],
})
class MainTestControllerComponent {
}
