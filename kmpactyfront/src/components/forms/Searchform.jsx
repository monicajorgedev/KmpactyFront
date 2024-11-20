import { useState } from 'react'
import styles from './Forms.module.css'

const Searchform = () => {
    const [subcategory, setSubcategory] = useState('')
    const [deportes, setDeportes] = useState('')

    const handleCategoriesChange = (e) => {
        setSubcategory(e.target.value)
        setDeportes('')
    }
    const handleItemChange = (e) => {
        setDeportes(e.target.value)
    }
    return (
        <>
        <form className={styles.searchform}>
            <div>
                <input name='category' type='radio' />
                <label>Campamentos</label>
                <input name='category' type='radio' />
                <label>Actividades Niños</label>
                <input name='category' type='radio' />
                <label>Actividades Adultos</label>
                <input name='category' type='radio' />
                <label>Dias sin cole</label>
            </div>
            <div>
                <select id="subcategories" value={subcategory} onChange={handleCategoriesChange}>
                    <option value="">Seleccionar una temática</option>
                    <option value="baile">Baile</option>
                    <option value="deporte">Deporte</option>
                    <option value="hipica">Hípica</option>
                    <option value="ingles">Inglés</option>
                    <option value="musica">Música</option>
                    <option value="naturaleza">Naturaleza</option>
                    <option value="salud">Salud y Bienestar</option>
                    <option value="tecnologico">Tecnológico</option>
                    <option value="otras">Otras categorias</option>
                </select>

                <select id='deporte-items' value={deportes} onChange={handleItemChange} disabled={subcategory !== 'deporte'}>
                    <option value="">Seleccione un deporte</option>
                    <option value="futbol">Futbol</option>
                    <option value="baloncesto">Baloncesto</option>
                    <option value="paddle">Paddle</option>
                    <option value="tenis">Tenis</option>
                    <option value="ritmica">Gimnasia ritmica</option>
                    <option value="kangoo">Botas Kangoo</option>
                    <option value="marciales">Artes marciales</option>
                    <option value="fitness">Fitness</option>
                    <option value="otrosdeportes">Otros deportes</option>
                </select>
            </div>
           
            
            <button type='submit'>Buscar</button>
        </form>
        </>
    )
}

export default Searchform
