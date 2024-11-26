import { useState } from 'react'
import {type, category, subcategory, dates, cities} from '../../data/data.js'
import styles from './Forms.module.css'

const Searchform = () => {
    const [ inputs, setInputs ] = useState({
        location: {city: ''}
    })

    const handleCategoriesChange = (e) => {
        const value = e.target.value
        setInputs((values)=>({...values, category: value, subcategory:''}))
    }
    const handleItemChange = (e) => {
        const value = e.target.value 
        setInputs((values) => ({...values, subcategory: value}))
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
            if (name === 'city') {
                setInputs( values => ({
                    ...values, location: {...values.location, city: value,}
                }))
            } else {
                setInputs(values => ({...values,[name]: value}))
            }
        setInputs(values => ({...values,[name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('formulario enviado con los siguientes datos:', inputs)
    }
    return (
        <>
        <form className={styles.searchform} onSubmit={handleSubmit}>
            <div>
                {/* IMPORTANTE añadir el value a los input y donde esten puestos cambiarlos a {}
                MIRAR COMO SE ASOCIAN LOS LABELS A LOS INPUTS EN REACT */}
                {type.map(item => (<label key={item.key} ><input name="type" type='radio'  value={item.key}/>{item.value}</label>))}
            </div>
            <div>
                <select name="category" value={inputs.category || ''} onChange={handleCategoriesChange} required>
                    <option value="">Seleccionar una categoria</option>
                    {category.map(item => (<option key={item.key} value={item.key}>{item.value}</option>))}
                </select>
                <select name='subcategory' value={inputs.subcategory || ''}
                        onChange={handleItemChange} disabled={inputs.category !== 'deporte'}>
                    <option value="">Seleccione un deporte</option>
                    {subcategory.map(item => (<option key={item.key} value={item.key}>{item.value}</option>))}
                </select>
            </div>
            <div>
                <select name='dates' value={inputs.dates} 
                        onChange={handleChange} required>
                    <option value="">Fechas</option>
                    {dates.map(item => (<option key={item.key} value={item.key}>{item.value}</option>))}
                </select>
            </div>
            <div>
                <select name='city' value={inputs.location?.city || ''} onChange={handleChange} required>
                    <option value="">Localidad donde se realiza la actividad</option>
                    {cities.map(item => (<option key={item.key} value={item.value}>{item.value}</option>))}
                </select>
            </div>
            
            
            <button type='submit'>Buscar</button>
        </form>
        </>
    )
}

export default Searchform
