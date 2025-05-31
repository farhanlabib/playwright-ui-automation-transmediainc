const {expect} = require("@playwright/test")

class boardsPage{
    constructor(page){
        this.page = page
        this.createBoardCard = page.getByTestId("create-board")
        this.inputBoardName = page.getByTestId("new-board-input")
        this.createBoardBtn = page.getByTestId("new-board-create")
        this.boardTitle = page.getByTestId("board-title")
    }

    //Create Board
    async createNewBoard(boardName){
        await this.page.goto('/')
        await this.page.waitForLoadState('networkidle')
        await this.createBoardCard.click()
        await this.inputBoardName.fill(boardName)
        await this.createBoardBtn.click()
    }

    //Validate Board Creation
    async validateBoardCreated(boardName) {
        try {
            await expect(this.boardTitle).toHaveValue(boardName);
            console.log(`"${boardName}" was successfully created.`);
        } catch (error) {
            console.error(`Failed to validate board creation for "${boardName}".`);
            throw error;
        }
    }
}

module.exports = boardsPage