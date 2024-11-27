import { useState, useEffect } from "react";
import Boxdetail from "../components/Boxdetail";
import { useParams } from "react-router-dom";


const Activitydetail = () => {
    const [data, setData] = useState(null)
    const params = useParams()
    const urlApi = 'http://localhost:3000'
    const activityId = params.id

    const fetchDataActivities = async (activityId) => {
        try {
          const response = await fetch(`${urlApi}/activities/${activityId}`)
          const resData = await response.json()
          setData(resData)
        
        } catch (error){
          console.log(error)
        }
      }
    
      useEffect(()=> {
        fetchDataActivities(activityId)
      },[activityId])

    return (
      <>
      <div>
        <h2>Detalle actividad o campamento</h2>
        {data === null 
        ? (<div>cargando...</div>) 
        : <Boxdetail data={data}/>
        }
      </div>
    
      </>
    );
  };
  
  export default Activitydetail;