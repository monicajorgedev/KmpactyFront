import { useState } from 'react'
import styles from './Forms.module.css'

const Searchform = () => {
    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')

    const handleCategoriesChange = (e) => {
        setCategory(e.target.value)
        setSubcategory('')
    }
    const handleItemChange = (e) => {
        setSubcategory(e.target.value)
    }
    const handleSubmit = (e) => {
        e.prevent.default
    }
    return (
        <>
        <form className={styles.searchform} onSubmit={handleSubmit}>
            <div>
                {/* IMPORTANTE añadir el value a los input y donde esten puestos cambiarlos a {}
                MIRAR COMO SE ASOCIAN LOS LABELS A LOS INPUTS EN REACT */}
                <input name='type' type='radio' />
                <label name='type'>Campamentos</label>
                <input name='type' type='radio' />
                <label name='type'>Actividades Niños</label>
                <input name='type' type='radio' />
                <label name='type'>Actividades Adultos</label>
                <input name='type' type='radio' />
                <label name='type'>Dias sin cole</label>
            </div>
            <div>
                <select id="category" value={category} onChange={handleCategoriesChange}>
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

                <select id='subcategory' value={subcategory} onChange={handleItemChange} disabled={category !== 'deporte'}>
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
                <select id='dates'>
                    <option value="">Elige fechas</option>
                    <option value="curso">Curso escolar</option>
                    <option value="verano">Verano</option>
                    <option value="santa">Semana Santa</option>
                    <option value="navidad">Navidad</option>
                    <option value="sincole">Dias sin cole</option>
                </select>
            
            <button type='submit'>Buscar</button>
        </form>
        </>
    )
}

export default Searchform
