import Activityform from "../components/forms/ActivityForm";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const Activityupdate = () => {
    const [data, setData] = useState({})
    const params = useParams()
    const urlApi = import.meta.env.VITE_APP_URL_API
    const activityId = params.id

    const navigate = useNavigate()

    const fetchDataActivities = async (activityId) => {
        
        try {
          const response = await fetch(`${urlApi}activities/${activityId}`)
          console.log(response)
          if (response.status === 404) {
            window.alert('Actividad no encontrada');
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
        fetchDataActivities(activityId)
      },[activityId])

    const updateSubmit = async (data) => {
        const urlApiCreate = `${urlApi}activities/${activityId}`

        try {
          const response = await fetch(urlApiCreate, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${localStorage.getItem('authToken')}`
              },
              body: JSON.stringify(data),
          })
          if (response.ok) {
              const data = await response.json();
              console.log('Success:', data)
              navigate(`/activity/${data._id}`)

          }
      } catch (error) {
          console.error('Error:', error)
      }
    }

    
    return (
      <>
      <div>
        <h2>Crea el anuncio de una actividad o campamento</h2>
        <Activityform key={data.name} submit={updateSubmit} data={data} />
        
      </div>
    
      </>
    );
  };
  
  export default Activityupdate;