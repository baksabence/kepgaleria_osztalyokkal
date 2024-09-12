export default class Jatekter{
    #kepekAdatai = []
    #szuloElem

    constructor(adatok, szuloElem){
        this.#kepekAdatai = adatok
        this.#szuloElem = szuloElem

        this.kisKepMegjelenit()
    }

    
    kisKepMegjelenit(){
        this.#kepekAdatai.forEach(adat =>{
            this.#szuloElem.append(`<div class="col-12 col-sm-6 col-md-4 col-lg-3"> <img src="${adat.kep}" class="img-fluid"> </div>`)
        })

    }
}