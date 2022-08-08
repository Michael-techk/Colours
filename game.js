class Game {
    constructor (money) {
        //portfel i statystyki
        this.stats = new Statistics();
        this.wallet = new Wallet(money);
        let _money = money

        //wszystkie zmienne potrzebne do gry
        document.getElementById('start').addEventListener('click', this.startGame.bind(this)), //nasłuchiwanie zaczyna grę
        this.spanWallet = document.querySelector('.panel span.wallet'),
        this.boards = [...document.querySelectorAll('.game .color')],
        this.inputBid = document.getElementById('bid'),
        this.spanResult = document.querySelector('.result')
        this.spanGames = document.querySelector('.number')
        this.spanWins = document.querySelector('.win')
        this.spanLossses = document.querySelector('.loss')

        //metoda odpowiadająca za render przed i po grze aktualizująca informacje o przechowywanych zmiennych
        this.render()

    }

    render (colors = ["gray", "gray", "gray"], money = this.wallet.getMoneyInWallet(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {

        this.boards.forEach((board,i) => {
            board.style.backgroundColor = colors[i]
        })

        //domyślne wartości
        this.spanWallet.textContent = money;
        if(result){
            result = `Wygrałeś ${wonMoney}!!`
        } else if(!result && result !== ""){
            result = `Przegrałeś ${bid}!!`
        } 

        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLossses.textContent = stats[2];

        this.inputBid.value = "";
    }

    startGame () {
        if(this.inputBid.value < 1) return alert("Za mała kwota");
        const bid = Math.floor(this.inputBid.value)

        if(!this.wallet.checkAvaibility(bid))
        return alert('Masz za mało środków, lub podana została nieprawidłowa wartość');

        let money = this.wallet.walletChange(bid, '-')

        this.draw = new Draws();
        const newColors = this.draw.getDrawResult();
        const win = Result.checkWhoWins(newColors)
        const wonMoney = Result.checkResult(win, bid)
        const moneyLeft = this.wallet.walletChange(wonMoney)

        this.stats.addGame(win, bid);
        const changedStats = this.stats.changeStats();

        this.render(newColors, moneyLeft , win, changedStats, bid, wonMoney)
    }
}
