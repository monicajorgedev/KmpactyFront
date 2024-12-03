import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingContext } from "../contexts/LoadingContext";
import BoxActivity from "../components/BoxActivity";
import styles from './Pages.module.css'

const ActivitiesByCompany = () => {
    const [data, setData] = useState(null)
    const urlApi = import.meta.env.VITE_APP_URL_API
    const { setLoading } = useContext(LoadingContext)
    const navigate = useNavigate()

    const fetchDataActivities = async () => {
      setLoading(true)
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        };
        try {
          const response = await fetch(`${urlApi}activities/by-company`, {
            method: "GET",
            headers
          })
          setLoading(false)
          if (response.status === 404) {
            window.alert('Actividades no encontrada');
            navigate('/')
            return;
          } else if (response.status === 401) {
            window.alert('Session caducada. Vuelva a iniciar session');
            navigate('/login')
          }
          const resData = await response.json()
          setData(resData)
        
        } catch (error){
          setLoading(false)
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
      <div >
        <h2>Mis Actividades o Campamentos</h2>
        {data === null 
        ? (<div>cargando...</div>) 
        : data.length === 0 
          ? <Link to={'/activity_create'}>Crea tu primera actividad</Link>
          :(<ul className={styles.activitycompany}>
          {data.map(element => (
          <li key={element._id} 
            onClick={()=> handleClick(element._id)} 
            >
            < BoxActivity data={element} />
          </li>
        ))}
        </ul>)
        }
        </div>
      </>
    );
  };
  
  export default ActivitiesByCompany;