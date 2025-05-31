const {expect} = require("@playwright/test")

class boardDetailPage {
    constructor(page){
        this.page = page
        this.boardItem = page.getByTestId("board-item")
        this.listCard = page.getByTestId("list")
        this.createListBtn = page.getByTestId("create-list")
        this.titleInput = page.getByTestId("add-list-input")
        this.addListBtn = page.getByRole('button',{name:'Add list'})
        this.listName = page.getByTestId("list-name")
        this.listOptions = page.getByTestId("list-options")
        this.deleteBtn = page.getByTestId("delete-list")
    }

    //Naviagate To Board
    async enterBoard(boardName) {
        await this.page.goto('/')
        const board = this.boardItem.filter({ hasText: boardName })
        const count = await board.count();
    
        if (count === 0) {
            throw new Error(`No board found with name "${boardName}"`)
        }
    
        if (count > 1) {
            console.warn(`Multiple boards found with name "${boardName}". Clicking the first one.`)
        }
    
        await board.first().click()
    }

    //Create List
    async createList(listTitle) {
        await this.page.waitForLoadState('networkidle')
        const isCreateListVisible = await this.createListBtn.isVisible()

        if (isCreateListVisible){
            await this.createListBtn.click()
        }

        await this.titleInput.fill(listTitle)
        await this.addListBtn.click()

        const listCount = await this.listCard.count()

        return listCount;
    }

    //Verify List
    async verifyListCreation(listTitle, listNumber){
        await expect(this.listName.nth(listNumber)).toHaveValue(listTitle,{ timeout: 5000 })
        console.log(`"${listTitle}" is successfully created.`)
    }

    //Delete List
    async deleteList(listTitle) {
        await this.page.waitForLoadState('networkidle')
        const count = await this.listCard.count();
    
        for (let i = 0; i < count; i++) {
            const titleInput = this.listName.nth(i);
            const value = await titleInput.inputValue();
    
            if (value.trim() === listTitle) {
                await this.listOptions.nth(i).click();
                await this.deleteBtn.click();
                console.log(`"${listTitle}" deleted.`);
                return;
            }
        }
    
        throw new Error(`List "${listTitle}" not found.`);
    }
    
    
}

module.exports = boardDetailPage