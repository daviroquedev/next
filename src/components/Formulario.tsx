import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteAlterado?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario({ cliente, cancelado, clienteAlterado }: FormularioProps) {
    const [name, setName] = useState(cliente?.nome ?? '')
    const [age, setAge] = useState(cliente?.idade ?? '')

    const id = cliente?.id

    return (
        <div>
            {id ? (
                <Entrada
                    text="Código"
                    value={id}
                    readOnly
                    className="mb-4"
                />
            ) : false}
            <Entrada
                text="Nome"
                value={name}
                onChange={e => setName((e.target as HTMLInputElement).value)}
                className="mb-4"
            />
            <Entrada
                text="Idade"
                type='number'
                value={age}
                onChange={e => setAge((e.target as HTMLInputElement).value)}
            />
            <div className="flex justify-end mt-7">
                <Botao
                    color="blue"
                    className="mr-2"
                    onClick={() =>clienteAlterado?.(new Cliente(name,age, id, cliente.idNumerico))}
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}