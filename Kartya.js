export default class Kartya{
    #kepAdat = {}
    #szuloElem
    #kepekLista
    #kepIndex = 0
    constructor(adat, szuloElem){
        this.#kepAdat = adat;
        this.#szuloElem = szuloElem;
        this.#kepekLista = kepekLista

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