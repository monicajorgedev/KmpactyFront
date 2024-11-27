import PropTypes from 'prop-types';
import './Boxdetail.css'

const Boxdetail = ({data}) => {
    return (
        <div className='boxdetail'>
            <h2>{data.name}</h2>
            <img src='#' alt='Cartel de la actividad'></img>
            <p>{data.description}</p>
            <p>Precio: {data.price} €</p>
            <p>Fechas: {data.dates}</p>
            <p>Duración: {data.duration}</p>
            <p>Lugar: {data.location.address}{data.location.city}</p>
        </div>
    )
}
Boxdetail.propTypes = {
    data: PropTypes.object.isRequired
}
export default Boxdetail