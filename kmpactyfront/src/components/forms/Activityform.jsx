import styles from './Forms.module.css'

const Activityform = () => {
    return (
        <>
        <form className={styles.activityform}>
            <input type='radio'></input>
            <input type='radio'></input>
            <input type='radio'></input>
            <input type='radio'></input>
            <button type='submit'>Buscar</button>
        </form>
        </>
    )
}

export default Activityform