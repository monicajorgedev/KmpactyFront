import Searchform from "../components/forms/SearchForm";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BoxActivity from "../components/BoxActivity";

const Home = () => {
  const [data, setData] = useState(null)
  const UrlApi = import.meta.env.VITE_APP_URL_API

  const navigate = useNavigate()

  const searchSubmit = async (data) => {
    const urlApiCreate = `${UrlApi}activities?type=${data.type || ''}&category=${data.category|| ''}&subcategory=${data.subcategory|| ''}&dates=${data.dates|| ''}&city=${data.location?.city|| ''}`

    try {
      const response = await fetch(urlApiCreate, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json', 
          },
      })
      if (response.ok) {
          const activities = await response.json();
          setData(activities)
      }
    } catch (error) {
      console.error('Error:', error)
    }

}

  const handleClick = (id) => {
    navigate(`/activity/${id}`)
    
  }
  return (
    <div>
      <h1>Campamentos y actividades en Segovia</h1>
      <Searchform submit={searchSubmit}/>
      {data === null 
        ? ''
        : <ul>
        {data.map(element => (
          <>
          <li key={element._id} 
            onClick={()=> handleClick(element._id)}>
          < BoxActivity data={element} />
          </li>
          </>
          
            
        ))}
        </ul>
        }
    </div>
  );
};

export default Home;

{/* <p> {element.name}</p>
            <p> Fecha: {getDateLabelByValue(element.dates)}</p>
            <p> Precio: {element.price} €</p>
            <p> Lugar: {element.location?.city}</p> */}