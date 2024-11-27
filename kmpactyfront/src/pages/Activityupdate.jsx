import Activityform from "../components/forms/ActivityForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Activityupdate = () => {
    const [data, setData] = useState({})
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

    const updateSubmit = async (data) => {
        const urlApiCreate = `http://localhost:3000/activities/${activityId}`

        try {
          const response = await fetch(urlApiCreate, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json', 
              },
              body: JSON.stringify(data),
          })
          if (response.ok) {
              const data = await response.json();
              console.log('Success:', data)

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