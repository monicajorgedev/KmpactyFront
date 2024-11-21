import styles from './Forms.module.css'

const Registerform = () => {
    return (
        <>
        <form className={styles.registerform}>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='contraseña'/>
            <button type='submit'>Entrar</button>
        </form>
        </>
    )
}

export default Registerform