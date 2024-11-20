import styles from './Forms.module.css'

const Loginform = () => {
    return (
        <>
        <form className={styles.loginform}>
            <input type='text'></input>
            
            <button type='submit'>Login</button>
        </form>
        </>
    )
}

export default Loginform