const { test, expect } = require("@playwright/test");
const POMangaer = require("../pageObjects/POManager");
const testData = require("../testData/boardData");

test.describe.serial("Board and List Operations", () => {
  test("Create board and verify", async ({ page }) => {
    const pom = new POMangaer(page);
    await pom.createNewBoard(testData.boardName);
    await pom.validateBoardCreated(testData.boardName);
  });

  test("Add two lists and verify", async ({ page }) => {
    const pom = new POMangaer(page);
    await pom.enterBoard(testData.boardName);

    for (const title of testData.listsToCreate) {
      const listNumber = await pom.createList(title);
      await pom.verifyListCreation(title, listNumber);
    }
  });

  test("Delete a list", async ({ page }) => {
    const pom = new POMangaer(page);
    await pom.enterBoard(testData.boardName);
    await pom.deleteList(testData.listToDelete);
  });
});
