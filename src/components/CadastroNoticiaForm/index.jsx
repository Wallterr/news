'use client'
import { useState } from "react";



const CadastroNoticiaForm = () => {

const [titulo, setTitulo] = useState('')
const [img, setImg] = useState('')
const [texto, setTexto] = useState('')

    const aoSubmeter = (e) => {
        e.preventDefault();
        console.log('submteu', titulo, img, texto)
    }

const aoAlterarValores = (e) => {
    const { name, value } = e.target;
    if (name === 'titulo') {
        setTitulo(value)
    }

    if (name === 'img') {
        setImg(value)
    }

    if (name === 'texto') {
        setTexto(value)
    }
}

    return(
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor=""> Titulo </label>
                <input type="text" name="titulo" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor=""> Imagem </label>
                <input type="text" name="img" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor=""> Texto </label>
                <textarea type="text" name="texto" onChange={aoAlterarValores} />
            </div>
            <button type="submit"> Criar Noticia </button>
        </form>
        
    )
}

export default CadastroNoticiaForm;