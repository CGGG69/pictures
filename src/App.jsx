import {useState} from "react"
import ShearchBar from "./Componentes/ShearchBar"
import Imagelist from "./Componentes/Imagelist"
import searchImages from "./api"


function App() {
  //searchImages('cars')
  const [image, setImages] = useSate([])

  const handleSubmit = async(term) =>{
    console.log('usted esta buscnado con ' , term)
    const result = await searchImages(term)
    setImages(result)
  }
  return (
    <>
    <h1> Pictures App</h1>
    <ShearchBar onsubmit={handleSubmit}/>
    <Imagelist images={images}/>

    </>
  )
}

export default App
