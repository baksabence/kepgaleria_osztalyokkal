export default class Kartya{
    #kepAdat = {}
    #szuloElem
    #kepekLista
    #kepIndex = 0
    constructor(adat, szuloElem, kepekLista){
        this.#kepAdat = adat;
        this.#szuloElem = szuloElem;
        this.#kepekLista = kepekLista;

        this.nagyKepMegjelenit()
        this.gombokEsemeny()
    }

    nagyKepMegjelenit(){
        console.log(this.#szuloElem)
        this.#szuloElem.html(`
            <button class="bal btn btn-secondary"><</button>
            <button class="jobb btn btn-secondary">></button>
            <img src="${this.#kepAdat.kep}" class="mx-auto d-block">
            `)
          
    }

    gombokEsemeny() {
        this.#szuloElem.on("click", ".bal", () => this.elozoKep())
        this.#szuloElem.on("click", ".jobb", () => this.kovetkezoKep())
      }
    
      elozoKep() {
        this.#kepIndex = (this.#kepIndex - 1 + this.#kepekLista.length) % this.#kepekLista.length
        this.#kepAdat = this.#kepekLista[this.#kepIndex]
        this.nagyKepMegjelenit()
      }
    
      kovetkezoKep() {
        this.#kepIndex = (this.#kepIndex + 1) % this.#kepekLista.length
        this.#kepAdat = this.#kepekLista[this.#kepIndex]
        this.nagyKepMegjelenit()
      }


}