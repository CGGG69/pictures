import { useState } from "react"
import './ShearchBar.css'


const ShearchBar = ({onsubmit}) => {
     const [term, setTerm] = useState('')

     const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('Necesito decirle al componente papa sobre los datos')
        onsubmit(term)
     }
     const handleChange = (event) => {
        setTerm(event.target.value)
     }
     console.log('term', term)

    return (
        <div className="shearch-bar">
        <form onsubmit={handleFormSubmit}>
            <label>termino de la busqueda</label>
            <input onChange={handleChange} value={term} />
        </form>
    </div>
    )
}

export default ShearchBar