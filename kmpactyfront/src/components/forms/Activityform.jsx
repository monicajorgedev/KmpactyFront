import { useState } from 'react'
import styles from './Forms.module.css'

const Activityform = () => {
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
        <form className={styles.activityform} onSubmit={handleSubmit}>
            <input type='text' placeholder='Nombre actividad o campamento' required/>
            <select required>
                <option value="">Tipo</option>
                <option value="campamento">Campamento</option>
                <option value="actniños">Actividad Niños</option>
                <option value="actadultos">Actividad Adultos</option>
                <option value="sincole">Dias sin cole</option>
            </select>
            
                <select id="category" value={category} onChange={handleCategoriesChange} required>
                    <option value="">Seleccionar una categoria</option>
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
                <input type='text' placeholder='Descripción de la actividad' required/>
                {/* AQUI EN TIPO DE COMPAÑIA DEBERIA EN VALOR COGER EL NOMBRE DE LA EMPRESA REGISTRADA  */}
                <input type='text'/>
                <input type='text' placeholder='Dirección donde se realiza la actividad' required/> 
                <select id='dates'required>
                    <option value="">Fechas</option>
                    <option value="curso">Curso escolar</option>
                    <option value="verano">Verano</option>
                    <option value="santa">Semana Santa</option>
                    <option value="navidad">Navidad</option>
                    <option value="sincole">Dias sin cole</option>
                </select>
                <input type='' placeholder='Precio. Ejemplo: 60€/semana ó poner "consultar precio"'required/>
                <input type='text' placeholder='Duración. Ejemplo: semanal o fechas' required/>
            <button type='submit'>Buscar</button>
        </form>
        </>
    )
}

export default Activityform