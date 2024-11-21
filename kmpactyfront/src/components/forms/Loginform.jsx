
import styles from './Forms.module.css'

const Loginform = () => {
    return (
        <>
        <form className={styles.loginform}>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='contraseña'/>
            <button type='submit'>Entrar</button>
            
        </form>
        </>
    )
}

export default Loginform