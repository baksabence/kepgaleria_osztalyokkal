export default class Jatekter{
    #kepekAdatai = []
    #szuloElem
    #nagyKepElem

    constructor(adatok, szuloElem, nagyKepElem){
        this.#kepekAdatai = adatok
        this.#szuloElem = szuloElem
        this.#nagyKepElem = nagyKepElem

        this.kisKepMegjelenit()
        this.kiskepEsemeny()
    }

    
    kisKepMegjelenit(){
        this.#kepekAdatai.forEach((adat) =>{
            this.#szuloElem.append(`<div class="col-12 col-sm-6 col-md-4 col-lg-3"> <img src="${adat.kep}" class="img-fluid"> </div>`)
        })
        

    }

    kiskepEsemeny(){
        this.#szuloElem.on("click", (event) => {
            const kattintEsemeny = $(event.target).attr("src")
            this.kepFrissit(kattintEsemeny)
        })
    }

    kepFrissit(kep){
        this.#nagyKepElem.html(`
            <button class="bal btn btn-secondary"><</button>
            <button class="jobb btn btn-secondary">></button>
            <img src="${kep}" class="mx-auto d-block">
        `)
    }

}