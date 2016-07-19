import {
  beforeEach,
  addProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { AppComponent } from '../app/app.component';

beforeEach(() => {
  addProviders([
    AppComponent,
  ]);
});

describe('App: ', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));
});
