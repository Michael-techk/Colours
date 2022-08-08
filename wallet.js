class Wallet {
    constructor(money) {
        let _money = money;
        //tworzymy funkcje wewnątrz konstruktora zwracającą zmienną _money
        this.getMoneyInWallet = () => _money;

        //Sprawdzanie czy użytkownik może przystąpić do gry
        this.checkAvaibility = value => {
        if(_money >= value) return true;
         return false;
        }

        //Zmienianie stanu konta
        this.walletChange = (bid, type = "+") => 
        {
            if(typeof bid === "number" && !isNaN(bid))
           {
            if(type === "+"){
                return _money += bid;
            }else if(type === '-'){   
                return _money -= bid;
            }else {
            throw new Error("Nieprawidłowe działanie")
            }

           } else {
               console.log(typeof bid)
               throw new Error("Nieprawidłowa liczba")
           }
        }
    }
}

