import { $, browser } from '@wdio/globals';

describe('Login form', () => {
  beforeEach(async () => {
    await browser.url('https://www.saucedemo.com/');
  });

  it('should NOT login with empty username and a message "Username is required" should be visible', async () => {
    await expect($('div[data-test="login-container"]')).toBeDisplayed();
    const username = $('[data-test="username"]');
    const password = $('[data-test="password"]');
    const loginBtn = $('input[data-test="login-button"]');

    await username.setValue('user');
    await password.setValue('secret');

    await password.clearValue();
    await username.clearValue();

    //await browser.keys([Key.Tab]);

    // console.log('AAAAAA', await username.getValue());
    await browser.pause(10000);
    await expect(username).toHaveText('');
    await expect(password).toHaveText('');

    await loginBtn.click();
    await expect($('.error-message-container')).toBeDisplayed();
    await expect($('.error-message-container')).toHaveText('Epic sadface: Username is required');
  });

  it('should NOT login with empty password and a message "Password is required" should be visible', async () => {
    await expect($('div[data-test="login-container"]')).toBeDisplayed();
    const username = $('[data-test="username"]');
    const password = $('[data-test="password"]');
    const loginBtn = $('input[data-test="login-button"]');

    await username.setValue('standard_user');
    await password.setValue('');

    await password.clearValue();
    await expect(password).toHaveText('');

    await loginBtn.click();
    await expect($('.error-message-container')).toBeDisplayed();
    await expect($('.error-message-container')).toHaveText('Epic sadface: Password is required');
  });

  it('should login by passing correct Username and Password', async () => {
    await expect($('div[data-test="login-container"]')).toBeDisplayed();
    const username = $('[data-test="username"]');
    const password = $('[data-test="password"]');

    await username.setValue('standard_user');
    await password.setValue('secret_sauce');
    await $('input[data-test="login-button"]').click();
    await expect(browser).toHaveTitle('Swag Labs');
    await expect($('#inventory_container')).toBeDisplayed();
  });
});
