import {
    QueryDocumentSnapshot,
    SnapshotOptions,
    collection,
    doc,
    deleteDoc,
    setDoc,
    addDoc,
    getDoc,
    getDocs
} from "firebase/firestore";
import { db } from "../config"
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    //Converter as informações da classe para um objeto que será interpretado pelo Firebase
    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },

        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            await setDoc(doc(collection(db, 'clientes').withConverter(this.#conversor), cliente.id), cliente)

            return cliente
        } else {
            const docRef = await addDoc(collection(db, 'clientes').withConverter(this.#conversor), cliente)
            const doc = await getDoc(docRef)

            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return deleteDoc(doc(collection(db, 'clientes').withConverter(this.#conversor), cliente.id))
    }

    async obterTodos(): Promise<Cliente[]> {
        const queryDoc = await getDocs(collection(db, 'clientes').withConverter(this.#conversor))
        return queryDoc.docs.map(doc => doc.data()) ?? []
    }
}