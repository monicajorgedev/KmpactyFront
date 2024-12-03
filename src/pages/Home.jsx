import Searchform from "../components/forms/SearchForm";
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BoxActivity from "../components/BoxActivity";
import { LoadingContext } from "../contexts/LoadingContext";


const Home = () => {
  const { setLoading } = useContext(LoadingContext)
  const [data, setData] = useState(null)
  const UrlApi = import.meta.env.VITE_APP_URL_API

  const navigate = useNavigate()

  const searchSubmit = async (data) => {
    const urlApiCreate = `${UrlApi}activities?type=${data.type || ''}&category=${data.category|| ''}&subcategory=${data.subcategory|| ''}&dates=${data.dates|| ''}&city=${data.location?.city|| ''}`
    setLoading(true)
    try {
      const response = await fetch(urlApiCreate, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json', 
          },
      })
      setLoading(false)
      if (response.ok) {
          const activities = await response.json();
          setData(activities)
      }
    } catch (error) {
      setLoading(false)
      console.error('Error:', error)
    }

}

  const handleClick = (id) => {
    navigate(`/activity/${id}`)
    
  }
  return (
    <>
    <h1>Campamentos y actividades en Segovia</h1>
      <Searchform submit={searchSubmit}/>
      {data === null 
        ? ''
        : <ul>
        {data.map(element => (
          <li key={element._id} 
            onClick={()=> handleClick(element._id)}>
          < BoxActivity data={element} />
          </li>
        ))}
        </ul>
        }
    </>
      
    
  );
};

export default Home;

