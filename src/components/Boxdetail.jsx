import PropTypes from 'prop-types';
import './Boxdetail.css'
import { getDateLabelByValue } from '../data/data';

const Boxdetail = ({data}) => {
    return (
        <div className='boxdetail'>
            <h2>{data.name}</h2>
            <img src={data.image} alt='Cartel de la actividad'></img>
            <p>{data.description}</p>
            <p>Precio: {data.price} €</p>
            <p>Fechas: {getDateLabelByValue(data.dates)}</p>
            <p>Duración: {data.duration}</p>
            <p>Lugar: {data.location?.address}, {data.location?.city}</p>
            <p>Empresa: {data.company.name}</p>
            <p>Email:{data.company.email}</p>
            <p>Teléfono: {data.company.phone}</p>
        </div>
    )
}
Boxdetail.propTypes = {
    data: PropTypes.object.isRequired
}
export default Boxdetail