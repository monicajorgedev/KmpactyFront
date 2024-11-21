import RoutesApp from './routes/RoutesApp'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
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
    <>
        <RoutesApp />
        {data === null 
        ? (<div>cargando...</div>) 
        : data.map(element => (
          <p key={element.id}>{element.name}</p>
        ))
        }
   </>
  )
}

export default App
