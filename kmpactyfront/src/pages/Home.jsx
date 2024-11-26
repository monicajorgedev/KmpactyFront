import Searchform from "../components/forms/SearchForm";
import { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState(null)
  const urlApi = 'http://localhost:3000'

  const fetchDataActivities = async () => {
    try {
      const response = await fetch(`${urlApi}/activities`)
      const resData = await response.json()
      setData(resData)

    } catch (error){
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchDataActivities()
  },[])
  return (
    <div>
      <h1>Campamentos y actividades en Segovia</h1>
      <Searchform />
      {data === null 
        ? (<div>cargando...</div>) 
        : <ul>
        {data.map(element => (
          <li key={element._id}>
            <p> {element.name}</p>
            <p> Fecha: {element.dates}</p>
            <p> Precio: {element.price} €</p>
            <p> Lugar: {}element.location</p>
          </li>
        ))}
        </ul>
        }
    </div>
  );
};

export default Home;