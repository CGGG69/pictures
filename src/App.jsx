import search, { ShearchBar } from "./Componentes/ShearchBar"
import search from "./Componentes/Imagelist"
import { Imagelist } from "./Componentes/ImageShow"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Pictures App</h1>
    <ShearchBar/>
    <Imagelist/>
    </>
  )
}

export default App
