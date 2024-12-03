
import { useNavigate } from 'react-router-dom'
import { LoadingContext } from "../contexts/LoadingContext";
import { useContext } from 'react'
import Activityform from '../components/forms/Activityform';


const ActivityCreate = () => {
  const navigate = useNavigate()
  const { setLoading } = useContext(LoadingContext)

    const createSubmit = async (data) => {
      setLoading(true)
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
          setLoading(false)
          if (response.ok) {
              const data = await response.json();
               navigate(`/activity/${data._id}`)
          } else if (response.status === 401) {
            window.alert('Session caducada. Vuelva a iniciar session');
            navigate('/login')
          }
        } catch (error) {
          setLoading(false)
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
  
  export default ActivityCreate;