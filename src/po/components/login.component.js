class LoginComponent {
  constructor() {
    super('div[data-test="login-container"]');
  }

  get LoginBtn() {
    return this.rootEl.$('input[data-test="login-button"]');
  }

  /**
   *
   * @param name {'username' | 'password' }
   * @returns {*}
   */
  input(name) {
    const selectors = {
      username: '[data-test="username"]',
      password: '[data-test="password"]',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = LoginComponent;
