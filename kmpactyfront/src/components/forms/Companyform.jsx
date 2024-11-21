import styles from './Forms.module.css'

const Companyform = () => {
    return (
        <>
        <form className={styles.companyform}>
            <input type='text' placeholder='Nombre empresa'/>
            <input type='text' placeholder='Dirección'/>
            <input type='number' placeholder='Teléfono '/>
            <input type='email' placeholder='Email'/>
            <input type='text' placeholder='Página web'/>
            {/* COMO PODRIAMOS HACER PARA QUE SUBIERA UN ARCHIVO JPG??? */}
            <input type='text' placeholder='Logo empresa'/>
            <button type='submit'>Enviar</button>
            
        </form>
        </>
    )
}

export default Companyform