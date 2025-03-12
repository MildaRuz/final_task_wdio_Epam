const LoginComponent = require('../po/components/login.component');
const LoginPage = require('./../po/pages/login.page');

const loginPage = new LoginPage();
const loginComponent = new LoginComponent();

describe('Login form', () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it('should NOT login with empty username and show "Username is required" error message', async () => {
    await expect(loginComponent.loginContainer).toBeDisplayed();
    await loginComponent.fillInInputs('user', 'secret');
    await loginComponent.clearUsername();
    await loginComponent.clearPassword();
    await expect(loginComponent.usernameInput).toHaveText('');
    await expect(loginComponent.passwordInput).toHaveText('');
    await loginComponent.loginButton.click();
    await expect(loginComponent.errorMessage).toBeDisplayed();
    await expect(loginComponent.errorMessage).toHaveText('Epic sadface: Username is required');
  });

  it('should NOT login with empty password and show "Password is required" error message', async () => {
    await expect(loginComponent.loginContainer).toBeDisplayed();
    await loginComponent.fillInInputs('standard_user', 'pass');
    await loginComponent.clearPassword();
    await loginComponent.loginButton.click();
    await expect(loginComponent.passwordInput).toHaveText('');
    await expect(loginComponent.errorMessage).toBeDisplayed();
    await expect(loginComponent.errorMessage).toHaveText('Epic sadface: Password is required');
  });

  it('should login with valid credentials', async () => {
    await expect(loginComponent.loginContainer).toBeDisplayed();
    await loginComponent.fillInInputs('standard_user', 'secret_sauce');
    await loginComponent.loginButton.click();
    await expect(loginComponent.dashboardTitle).toHaveTitle('Swag Labs');
    await expect(loginComponent.products).toBeDisplayed();
  });
});
