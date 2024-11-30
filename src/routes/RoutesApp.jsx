import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'

import CompanyCreate from '../pages/CompanyCreate'
import ActivityDetail from '../pages/ActivityDetail'
import ActivityUpdate from '../pages/ActivityUpdate'
import ActivitiesByCompany from '../pages/ActivitiesByCompany'



const RoutesApp = () => {

    return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/register' element={< CompanyCreate />}/>
        
        <Route path='/activity/:id' element={< ActivityDetail  />}/>
        <Route path='/activity/:id/update' element={< ActivityUpdate  />}/>
        <Route path='/activities/by-company' element={< ActivitiesByCompany  />}/>
      </Routes>
    </Router>
    )
}

export default RoutesApp