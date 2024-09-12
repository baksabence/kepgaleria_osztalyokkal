export default class Kartya{
    #kepAdat = {}
    #szuloElem
    constructor(adat, szuloElem){
        this.#kepAdat = adat;
        this.#szuloElem = szuloElem;

        this.nagyKepMegjelenit()
    }

    nagyKepMegjelenit(){
        console.log(this.#szuloElem)
        this.#szuloElem.html(`
            <button class="bal"><</button>
            <button class="jobb">></button>
            <img src="${this.#kepAdat.kep}" class="mx-auto d-block">
            `)
          
    }
}