import { useState } from 'react'
import styles from './Forms.module.css'

const Companyform = () => {
    const [inputs, setInputs ] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value 
        setInputs(values => ({...values, [name]: value}))  
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('formulario enviado con los siguientes datos:', inputs)
    }

    return (
        <>
        <form className={styles.companyform} onSubmit={handleSubmit}>
            <input type='text' name='name' value={inputs.name || ''} 
                    onChange={handleChange} placeholder='Nombre empresa' required />
            <input type='text' name='location' value={inputs.location || ''} 
                    onChange={handleChange} placeholder='Dirección' required />
            <input type='number' name='phone' value={inputs.phone || ''} 
                    onChange={handleChange} placeholder='Teléfono 'required />
            <input type='email' name='email' value={inputs.email || ''} 
                    onChange={handleChange} placeholder='Email' required/>
            <input type='text' name='web' value={inputs.web || ''} 
                    onChange={handleChange} placeholder='Página web'/>
            {/* COMO PODRIAMOS HACER PARA QUE SUBIERA UN ARCHIVO JPG??? */}
            <input type='text' name='imgUrl' value={inputs.imgUrl || ''} 
                    onChange={handleChange} placeholder='Logo empresa'/>
            <button type='submit'>Enviar</button>
            
        </form>
        </>
    )
}

export default Companyform