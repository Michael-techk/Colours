class Result {
    static checkResult (result, bid) { //static czyli metoda statyczna dostępna tylko z poziomu klasy np. Result.checkResult(arg)
        if(result) return bid * 3;
        else return 0;
    }

    //sprawdza czy gra jest wygrana czy nie
    static checkWhoWins (draw) {
        if(draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[2] !== draw[0])
            return true;
        else return false;
    }
}