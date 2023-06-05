import { useState, MutableRefObject, useRef, useEffect } from "react"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import useLayout from "./useLayout"

export default function useClientes() {
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    const refRepo: MutableRefObject<ClienteRepositorio> = useRef(new ColecaoCliente())

    const { exibirFormulario, exibirTabela, tabelaVisivel } = useLayout()
    
    useEffect(obterTodos, [])

    function obterTodos() {
        refRepo.current.obterTodos().then((clientes) => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await refRepo.current.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await refRepo.current.salvar(cliente)
        obterTodos()
    }

    function criarCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        cliente,
        clientes,
        salvarCliente,
        criarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        exibirTabela,
        tabelaVisivel
    }
} 