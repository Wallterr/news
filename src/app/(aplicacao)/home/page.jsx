import Noticia from "@/components/Noticias";

const noticias = [
    {
        id:1,
        titulo: 'Noticia 1',
        img: 'https://cdn.credder.com/uploads/article/images/resized/64614/coverr-cr-preview.png',
        texto: 'Texto da <b>noticia 1</b>'
    },
    {
        id:2,
        titulo: 'Noticia 1',
        img:  'https://cdn.credder.com/uploads/article/images/resized/64614/coverr-cr-preview.png',
        texto: 'Texto da <b>noticia 2</b>'
    },
    {
        id:3,
        titulo: 'Noticia 1',
        img: 'https://cdn.credder.com/uploads/article/images/resized/64614/coverr-cr-preview.png',
        texto: 'Texto da <b>noticia 3</b>'
    }
    
]

const HomePage = () => {
    
    return(
        <div>
            <h1> Home </h1>
            {noticias.map(noticia => 
            <Noticia key={ noticia.id } noticia={ noticia   }/>)}
        </div>
    )
}

export default HomePage;