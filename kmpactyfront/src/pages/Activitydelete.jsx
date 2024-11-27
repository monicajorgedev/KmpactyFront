import Boxdetail from "../components/Boxdetail";
import { useParams } from 'react-router-dom'

const Activitydelete = () => {
  const params = useParams()
  const activityId = params.id

    const deleteSubmit = async () => {
        const urlApiCreate = `http://localhost:3000/activities/${activityId}`

        try {
          const response = await fetch(urlApiCreate, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json', 
              },
          })
          if (response.ok) {
              console.log('tarea eliminada con exito')

          }
        } catch (error) {
          console.error('Error:', error)
        }

    }

    return (
      <>
      <div>
        <h2>Eliminar actividad o campamento</h2>
        <Boxdetail submit={deleteSubmit} />
      </div>
      <div>
        
      </div>
    
      </>
    );
  };
  
  export default Activitydelete;