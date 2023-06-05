export default class Cliente {
    #id: string
    #nome: string
    #idade: string
    idNumerico: number

    constructor(nome: string, idade: string, id: string = null, idNumerico: number = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
        this.idNumerico = idNumerico
    }

    static vazio() {
        return new Cliente('', '')
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