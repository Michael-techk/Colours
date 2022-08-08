class Statistics {
    constructor () {
        this.gameStats = []
    }

    addGame (win, bid){
        let gameResult = {
            win, //to samo co win: win, czyli przypisanie jednej zmiennej do drugiej ale można tak zapisać jeśli 2 zmienne mają tą samą nazwę
            bid,
        }

        this.gameStats.push(gameResult);
    }

    changeStats () {
        let games = this.gameStats.length;
        //metoda dodająca do gameStats porażkę bądź zwycięstwo
        let losses = this.gameStats.filter(game => !game.win).length;
        let wins = this.gameStats.filter(game => game.win).length;
        //metoda alternatywna dodająca do gameStats porażkę bądź zwycięstwo
        // this.gameStats.forEach(game => {
        //     if(game.win) return wins++;
        //     return losses++;
        // })
        return [games, wins, losses];
    }

}
