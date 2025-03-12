class LoginComponent {
  get usernameInput() {
    return $('[data-test="username"]');
  }
  get passwordInput() {
    return $('[data-test="password"]');
  }
  get loginButton() {
    return $('input[data-test="login-button"]');
  }
  get errorMessage() {
    return $('.error-message-container');
  }
  get loginContainer() {
    return $('div[data-test="login-container"]');
  }
  get products() {
    return $('#inventory_container');
  }

  async fillInInputs(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }

  async clearUsername() {
    const selectAllKey = ((await browser.capabilities.platformName) || '').toLowerCase().includes('mac')
      ? 'Meta'
      : 'Control';

    await this.usernameInput.click();
    await browser.keys([selectAllKey, 'a']);
    await browser.keys('Backspace');

    await browser.execute((el) => (el.value = ''), await this.usernameInput);

    await browser.waitUntil(async () => (await this.usernameInput.getValue()).trim() === '', {
      timeout: 3000,
      timeoutMsg: 'Username input was not cleared in time',
    });

    await this.usernameInput.click();
    await browser.keys(['Tab']);
  }

  async clearPassword() {
    const selectAllKey = ((await browser.capabilities.platformName) || '').toLowerCase().includes('mac')
      ? 'Meta'
      : 'Control';

    await this.passwordInput.click();
    await browser.keys([selectAllKey, 'a']);
    await browser.keys('Backspace');

    await browser.execute((el) => (el.value = ''), await this.passwordInput);

    await browser.waitUntil(async () => (await this.passwordInput.getValue()).trim() === '', {
      timeout: 3000,
      timeoutMsg: 'Password input was not cleared in time',
    });

    await this.passwordInput.click();
    await browser.keys(['Tab']);
  }
}

module.exports = LoginComponent;
