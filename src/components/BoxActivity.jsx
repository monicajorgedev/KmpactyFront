import PropTypes from 'prop-types';
import './Boxactivity.css'
import { getDateLabelByValue } from '../data/data';

const BoxActivity = ({data}) => {
    return (
        <div className='boxactivity'>
            <h2>{data.name}</h2>
            <img src={data.image} alt='Cartel de la actividad'></img>
            <p>Fechas: {getDateLabelByValue(data.dates)}</p>
            <p>Duración: {data.duration}</p>
            <p>Lugar: {data.location?.city}</p>
            <p>Empresa: {data.company.name}</p>
        </div>
    )
}
BoxActivity.propTypes = {
    data: PropTypes.object.isRequired
}
export default BoxActivity