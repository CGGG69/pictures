import { useState } from "react"
import SearchBar from "./Componentes/SearchBar"
import Imagelist from "./Componentes/Imagelist"
import SearchImages from "./api"


function App() {
  //searchImages('cars')
  const [images, setImages] = useState([])

  const handleSubmit = async(term) =>{
    console.log('usted esta buscnado con ' , term)
    const result = await SearchImages(term)
    setImages(result)
  }
  return (
    <>
    <h1> Pictures App</h1>
    <SearchBar onSubmit={handleSubmit}/>
    <Imagelist images={images}/>

    </>
  )
}

export default App
