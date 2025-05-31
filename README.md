# 🎯 Playwright UI Automation – TransMedia Inc

This project contains end-to-end UI automation tests built using **Playwright** for TransMedia Inc's assigments. It includes board and list functionalities such as creating boards, adding lists, deleting lists, and verifying actions using assertions.

---

## 🚀 Tech Stack

- [Playwright](https://playwright.dev/)
- JavaScript (Node.js)
- Allure Reporter
- Page Object Model (POM)
- Environment-based configurations

---

## 📁 Folder Structure

```
├── tests/              # Test specs
├── pageObjects/        # Page Object Model classes
├── testData/           # Centralized test data
├── env/                # .env files for each environment
├── playwright.config.js
├── package.json
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/farhanlabib/playwright-ui-automation-transmediainc.git
   cd playwright-ui-automation-transmediainc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright**
   *(Automatically handled via `postinstall` script, but you can also run this manually)*
   ```bash
   npx playwright install
   ```

4. **Set up environment config**
   ```bash
   cp env/.env.local
   ```

---

## 🌐 Environment Configuration

All environment base URLs are managed using `.env` files inside the `/env` folder.

| Env     | File              | Base URL example                 |
|---------|-------------------|----------------------------------|
| Local   | `env/.env.local`  | `http://localhost:3000`          |
| Staging | `env/.env.stage`  | //                               |
| Prod    | `env/.env.prod`   | //                               |

You can switch environments using the `ENV` variable:
```bash
ENV=stage npx playwright test
```

---

## 🧪 Running Tests

### Run all tests (default: local)
```bash
npm test
```

### Run tests in specific environment
```bash
npm run test:local
npm run test:stage
npm run test:prod
```
---

## 📊 Generate and View Allure Report

1. Run tests and collect Allure results:
   ```bash
   npm run test
   ```

2. Generate and open the Allure report:
   ```bash
   npm run report
   ```

---

## 📜 Available Scripts

```json
"scripts": {
  "test": "npx playwright test",
  "test:local": "ENV=local npx playwright test",
  "test:stage": "ENV=stage npx playwright test",
  "test:prod": "ENV=prod npx playwright test",
  "report": "npx allure generate allure-results --clean -o allure-report && npx allure open allure-report",
  "postinstall": "npx playwright install"
}
```

---

## Test Coverage

- Create a new board
- Add multiple lists to a board
- Verify list creation
- Delete a specific list
- All actions covered using POM

---

## 📦 Dependencies

- `@playwright/test`
- `dotenv`
- `allure-playwright`

---

## 👤 Author

**Md. Farhan Labib**  
Senior SQA Engineer  
🔗 [farhanlabib.com](https://farhanlabib.com)

---
