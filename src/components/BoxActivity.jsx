import PropTypes from 'prop-types';
import { getDateLabelByValue } from '../data/data';
import styles from './Components.module.css'

const BoxActivity = ({data}) => {
    return (
        <div className={styles.boxactivity}>
            <h2>{data.name}</h2>
            <img src={data.image} alt='Cartel de la actividad'></img>
            <div className='datos'>
            <p>Fechas: {getDateLabelByValue(data.dates)}</p>
            <p>Duración: {data.duration}</p>
            <p>Lugar: {data.location?.city}</p>
            <p>Empresa: {data.company.name}</p>
            </div>
            
        </div>
    )
}
BoxActivity.propTypes = {
    data: PropTypes.object.isRequired
}
export default BoxActivity