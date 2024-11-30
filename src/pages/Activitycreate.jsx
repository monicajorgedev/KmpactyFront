import Activityform from "../components/forms/ActivityForm";
import { useNavigate } from 'react-router-dom'

const Activitycreate = () => {
  const navigate = useNavigate()

    const createSubmit = async (data) => {
      const urlApi = import.meta.env.VITE_APP_URL_API
      const urlApiCreate = `${urlApi}activities`

        try {
          const response = await fetch(urlApiCreate, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('authToken')}` 
              },
              body: JSON.stringify(data),
          })
          if (response.ok) {
              const data = await response.json();
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
        <Activityform submit={createSubmit} />
      </div>
      <div>
        
      </div>
    
      </>
    );
  };
  
  export default Activitycreate;