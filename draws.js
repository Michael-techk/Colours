class Draws {
    constructor () {
        this.options = ["green", "red", "blue"]
        let _result = this.drawColor();
        this.getDrawResult = () => _result;
    }

    drawColor (){
        let colors = [];
        for(let i = 0; i < this.options.length; i++){
            let indexColor = Math.floor(Math.random() * this.options.length)
            const newColor = this.options[indexColor];
            colors.push(newColor);
        }
        return colors;
    }
}
