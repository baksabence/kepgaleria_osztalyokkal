import Jatekter from "../view/Jatekter.js"
import TTTModell from "../modell/TTTModel.js"

export default class TTTController{

    constructor(){
        this.taroloELEM = $(".kiskepek")
        this.TTTModell = new TTTModell()
        new Jatekter(this.TTTModell.getList(), this.taroloELEM)
        this.#esemenykezelo()
    }


    esemenykezelo(){
        
    }

}