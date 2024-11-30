import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDateLabelByValue } from "../data/data";



const ActivitiesByCompany = () => {
    const [data, setData] = useState(null)
    const urlApi = import.meta.env.VITE_APP_URL_API

    const navigate = useNavigate()

    const fetchDataActivities = async () => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        };
        try {
          const response = await fetch(`${urlApi}activities/by-company`, {
            method: "GET",
            headers
          })
          if (response.status === 404) {
            window.alert('Actividades no encontrada');
            navigate('/')
            return;
          }
          const resData = await response.json()
          setData(resData)
        
        } catch (error){
          console.log(error)
        }
      }
    
      useEffect(()=> {
        fetchDataActivities()
      },[])

      const handleClick = (id) => {
        navigate(`/activity/${id}`)
        
      }

    return (
      <>
      <div>
        <h2>Mis Actividades o Campamentos</h2>
        {data === null 
        ? (<div>cargando...</div>) 
        : data.length === 0 
          ? <Link to={'/activity_create'}>Crea tu primera actividad</Link>
          :(<ul>
          {data.map(element => (
          <li key={element._id} 
            onClick={()=> handleClick(element._id)} 
            >
            <p> {element.name}</p>
            <p> Fecha: {getDateLabelByValue(element.dates)}</p>
            <p> Precio: {element.price} €</p>
            <p> Lugar: {element.location?.city}</p>
          </li>
        ))}
        </ul>)
        }
        </div>
      </>
    );
  };
  
  export default ActivitiesByCompany;