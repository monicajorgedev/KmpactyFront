import { useState } from 'react'
import {type, category, subcategory, dates, cities} from '../../data/data.js'
import styles from './Forms.module.css'
import FileBase64 from 'react-file-base64';

const Activityform = ({submit, data={}}) => {
    const [inputs, setInputs] = useState(data)
   
    const handleCategoriesChange = (e) => {
        const value = e.target.value
        setInputs((values)=>({...values, category: value, subcategory:''}))
    }
    const handleItemChange = (e) => {
        const value = e.target.value 
        setInputs((values) => ({...values, subcategory: value}))
    }

    const getFileBase64 = (file) => {
        setInputs((values) => ({...values, image: file.base64}))
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === "city"){
            setInputs(values => ({...values, location: {...values.location, city: value}}))
        } else if (name === "address"){
            setInputs(values => ({...values, location: {...values.location, address: value}}))
        } else if (name === 'active') {
            setInputs(values => ({...values, active: !values.active}))
        } else {
            setInputs(values => ({...values,[name]: value}))
        }
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('formulario enviado con los siguientes datos:', inputs)
        await submit(inputs)
        setInputs({})
    }
    return (
        <>
        <form className={styles.activityform} onSubmit={handleSubmit}>
            <input type='text' name='name' value={inputs.name || ''} 
                    onChange={handleChange} placeholder='Nombre actividad o campamento' required
            />
            <select name='type' value={inputs.type || ''} onChange={handleChange} required>
                <option value="">Tipo</option>
                {type.map(item => (<option key={item.key} value={item.key} >{item.value}</option>))}
            </select>
            <select name="category" value={inputs.category || ''} onChange={handleCategoriesChange} required>
                <option value="">Seleccionar una categoria</option>
                {category.map(item => (<option key={item.key} value={item.key} >{item.value}</option>))}
            </select>
            <select name='subcategory' value={inputs.subcategory || ''}
                    onChange={handleItemChange} disabled={inputs.category !== 'deporte'}>
                <option value="">Seleccione un deporte</option>
                {subcategory.map(item => (<option key={item.key} value={item.key}>{item.value}</option>))}
            </select>
            <textarea type='text' name='description' value={inputs.description || ''} 
                    onChange={handleChange} placeholder='Descripción de la actividad' required
            />
            <input type='text' readOnly={'Provincia: Segovia'} placeholder='Provincia: Segovia'/>
            <select name='city' value={inputs.location?.city || ''} onChange={handleChange} required>
                <option value="">Localidad donde se realiza la actividad</option>
                {cities.map(item => (<option key={item.key} value={item.value}>{item.value}</option>))}
            </select>
             
            <input type='text' name='address' value={inputs.location?.address || ''} 
                    onChange={handleChange} placeholder='Dirección donde se realiza la actividad' required
            /> 
            <select name='dates' value={inputs.dates|| ''} onChange={handleChange} required>
                <option value="">Fechas</option>
                {dates.map(item => (<option key={item.key} value={item.key}>{item.value}</option>))}
            </select>
            <input type='text' name='price' value={inputs.price || ''} 
                    onChange={handleChange} placeholder='Precio. Ejemplo: 60€/semana ó poner "consultar precio"'required
            />
            <input type='text' name='duration' value={inputs.duration || ''} 
                    onChange={handleChange} placeholder='Duración. Ejemplo: semanal o fechas' required
            />
            <span>Sube el cartel de la actividad o campamento</span>
            {!inputs.image ?  <FileBase64
                multiple={ false }
                onDone={ (file) => getFileBase64(file)} /> : <p>Imagen ya seleccionada. <button onClick={() => setInputs({...inputs, image: null})} >Eliminar</button></p>}
             <input type='checkbox' name='active'  checked={inputs.active} 
                    onChange={handleChange}
            />
            <label name='active'>Activo</label>
            <button type='submit'> {inputs._id ? 'Modificar' : 'Crear'}</button>
        </form>
        </>
    )
}

export default Activityform