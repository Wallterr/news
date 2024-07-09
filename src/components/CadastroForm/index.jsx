'use client'
import { useState } from "react";

function Form() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const aoSubmeter = (e) => {
        e.preventDefault();
        // TODO enviar para o servidor
        console.log('submetido', nome, email, senha);
    };

    const aoAlterarValores = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'nome':
                setNome(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'senha':
                setSenha(value);
                break;
            default:
                break;
        }
    };

    return (
        <form onSubmit={aoSubmeter}>
            <label htmlFor="nome"> Nome: </label>
            <input type="text" name="nome" onChange={aoAlterarValores} /> <br />

            <label htmlFor="email"> Email: </label>
            <input type="email" name="email" onChange={aoAlterarValores} /> <br />

            <label htmlFor="senha"> Senha: </label>
            <input type="password" name="senha" onChange={aoAlterarValores} /> <br />

            <button type="submit"> Enviar </button>
        </form>
    );
}

export default Form;
