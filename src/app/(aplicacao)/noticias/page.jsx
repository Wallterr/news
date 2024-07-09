'use client'
import GridNoticia from "@/components/GridNoticias";

const noticias = [
  {
      id:1,
      titulo: 'Noticia 1',
      img: 'https://joinupdots.com/wp-content/uploads/2017/09/Steve-JObs.jpg',
      texto: 'Texto da <b>noticia 1</b>'
  },
  {
      id:2,
      titulo: 'Noticia 1',
      img: 'https://th.bing.com/th/id/R.734eb8995788a5f746784d51c77e6938?rik=HJw3TAcEA%2fVk4A&pid=ImgRaw&r=0',
      texto: 'Texto da <b>noticia 2</b>'
  },
  {
      id:3,
      titulo: 'Noticia 1',
      img: 'https://th.bing.com/th/id/OIP.cf3Tn27eo4RdrjBo4T-mvAHaE_?w=350&h=236&rs=1&pid=ImgDetMain', 
      texto: 'Texto da <b>noticia 3</b>'
  }
  
]


const NoticiasPage = () => {
  return (
    <div>
      <h1>Noticias</h1>
      <GridNoticia noticias={noticias} />
    </div>
  )
}

export default NoticiasPage;
