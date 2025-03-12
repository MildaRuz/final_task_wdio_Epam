# 🚀 My first test automation project with WebDriverIO

## 🎯 Features

- ✅ **Cross-browser testing** (Chrome, Firefox)
- ✅ **Page Object Model (POM)** implementation
- ✅ **Assertions & Validation**
- ✅ **Configurable test execution**
- ✅ **Logging & Reporting**

## 🛠️ Technologies Used

- **[WebDriverIO](https://webdriver.io/)** - Test automation framework
- **Mocha** - Test runner
- **Chai** - Assertions library
- **Node.js** - JavaScript runtime
- **Allure Reports** (optional) - Test reporting

---

## 📌 Task description

Launch URL: https://www.saucedemo.com/

UC-1 Test Login form with empty credentials:

Type any credentials into "Username" and "Password" fields.

Clear the inputs.

Hit the "Login" button.

Check the error messages: "Username is required".

UC-2 Test Login form with credentials by passing Username:

Type any credentials in username.

Enter password.

Clear the "Password" input.

Hit the "Login" button.

Check the error messages: "Password is required".

UC-3 Test Login form with credentials by passing Username & Password:

Type credentials in username which are under Accepted username are sections.

Enter password as secret sauce.

Click on Login and validate the title “Swag Labs” in the dashboard.

Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.

Please, add task description as README.md into your solution!

To perform the task use the various of additional options:

Test Automation tool: WebDriverIO;

Browsers: 1) Chrome; 2) Firefox;

Locators : CSS;

Patterns: Page Object;

Assertions: Use from the selected framework;

[Optional] Loggers: Use from the selected framework.

---

## 📥 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```sh
   git clone https://github.com/MildaRuz/final_task_wdio_Epam.git
   cd final_task_wdio_Epam
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

## 🚀 Running the Application & Tests

### Run WebDriverIO Tests

Run all tests using the configured browser:

```sh
npm test
```

### Generate & View Reports

To generate Allure test report after running the tests run:

```sh
npm run allure-report
```

---

Happy Testing! 🚀
