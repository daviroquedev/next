import { useEffect } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";
import useLayout from "../hooks/useLayout";

export default function Home() {
    const {
        selecionarCliente,
        criarCliente,
        excluirCliente,
        salvarCliente,
        cliente,
        clientes,
        exibirTabela,
        tabelaVisivel
    } = useClientes()

    return (
        <div className={`
        flex justify-center items-center
        h-screen bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
            <Layout titulo="Cadastro Simples">
                {tabelaVisivel ? (
                    <div>
                        <div className="flex justify-end">
                            <Botao
                                color="green"
                                className="mb-4"
                                onClick={criarCliente}
                            >
                                Novo Cliente
                            </Botao>
                        </div>
                        <Tabela
                            clientes={clientes}
                            clienteSelecionado={selecionarCliente}
                            clienteExcluido={excluirCliente}
                        />
                    </div>
                ) : (
                    <Formulario
                        cliente={cliente}
                        clienteAlterado={salvarCliente}
                        cancelado={exibirTabela}
                    />
                )}
            </Layout>
        </div>
    )
}