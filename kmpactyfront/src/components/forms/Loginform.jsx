import { useState } from 'react'
import styles from './Forms.module.css'

const Loginform = () => {
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('formulario enviado con los siguientes datos:', email, password)
    }
    return (
        <>
        <form className={styles.loginform} onSubmit={handleSubmit}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='contraseña'/>
            <button type='submit'>Entrar</button>
            
        </form>
        </>
    )
}

export default Loginform