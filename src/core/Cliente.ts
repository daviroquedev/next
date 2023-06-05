export default class Cliente {
    #id: string
    #nome: string
    #idade: number
    idNumerico: number

    constructor(nome: string, idade: number, id: string = null, idNumerico: number = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
        this.idNumerico = idNumerico
    }

    static vazio() {
        return new Cliente('', 0)
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

}