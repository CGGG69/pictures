import ShearchBar from "./Componentes/ShearchBar"
import Imagelist from "./Componentes/Imagelist"
import searchImages from "./api"


function App() {
  searchImages('cars')
  return (
    <>
    <h1> Pictures App</h1>
    <ShearchBar/>
    <Imagelist/>

    </>
  )
}

export default App
