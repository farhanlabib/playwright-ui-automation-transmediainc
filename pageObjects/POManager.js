const BoardsPage = require("./boardsPage")
const BoardDetailPage = require("./boardDetailPage")

class POMangaer{
    constructor(page){
        this.page = page;
        this.boardsPage = new BoardsPage(page);
        this.boardDetailPage = new BoardDetailPage(page)
    }

    async createNewBoard (boardName){
        return await this.boardsPage.createNewBoard(boardName)
    }

    async validateBoardCreated(boardName){
        return await this.boardsPage.validateBoardCreated(boardName)
    }

    async enterBoard(boardName){
        return await this.boardDetailPage.enterBoard(boardName)
    }

    async createList(listTitle){
        return await this.boardDetailPage.createList(listTitle)
    }

    async verifyListCreation(listTitle,listNumber){
        return await this.boardDetailPage.verifyListCreation(listTitle,listNumber)
    }

    async deleteList(listTitle){
        return await this.boardDetailPage.deleteList(listTitle)
    }
}

module.exports = POMangaer