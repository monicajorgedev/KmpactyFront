import PropTypes from 'prop-types';
import { getDateLabelByValue } from '../data/data';
import styles from './Components.module.css'
import { Modal } from 'react-responsive-modal';
import { useState } from "react";

const Boxdetail = ({data}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
        >
           <img className={styles.modalimage} src={data.image} alt='Cartel de la actividad'></img>
        </Modal>
        <div className={styles.boxdetail}>
            <h2>{data.name}</h2>
            <img src={data.image} alt='Cartel de la actividad' onClick={() => setOpen(true)}></img>    
            <div className={styles.datos}>
            <p>{data.description}</p>
            <p>Precio: {data.price} €</p>
            <p>Fechas: {getDateLabelByValue(data.dates)}</p>
            <p>Duración: {data.duration}</p>
            <p>Lugar: {data.location?.address}, {data.location?.city}</p>
            <p>Empresa: {data.company.name}</p>
            <p>Email:{data.company.email}</p>
            <p>Teléfono: {data.company.phone}</p>
            </div>
        </div>
        </>
    )
}
Boxdetail.propTypes = {
    data: PropTypes.object.isRequired
}
export default Boxdetail