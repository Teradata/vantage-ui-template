import { login, logout, ILoginCredentials, waitForAngular } from '@td-vantage/ui-platform/testing/cypress';
const LOGIN_FIXTURE: string = 'login';

describe('Example test', () => {
  before(() => {
    cy.fixture(LOGIN_FIXTURE).then((credentials: ILoginCredentials) => {
      login(credentials);
    });
  });

  it('Should verify app loads', () => {
    waitForAngular();
    cy.get('body').contains('TEST CONTENT');
  });

  after(() => {
    logout();
  });
});
