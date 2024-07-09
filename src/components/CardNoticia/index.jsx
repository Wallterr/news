'use client'

const CardNoticia = ({ noticia }) => {
    return (
        <div>   
            <div>{ noticia.titulo }</div>
                <img src={noticia.img} alt={noticia.titulo} />
                <p> { noticia.texto } </p>
            </div>
  )
}

export default CardNoticia
