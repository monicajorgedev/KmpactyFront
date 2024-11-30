import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../pages2/Home'
import Login from '../pages2/Login'
import ActivityCreate from '../pages2/ActivityCreate'
import CompanyCreate from '../pages2/CompanyCreate'
import ActivityDetail from '../pages2/ActivityDetail'
import ActivityUpdate from '../pages2/ActivityUpdate'
import ActivitiesByCompany from '../pages2/ActivitiesByCompany'



const RoutesApp = () => {

    return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/register' element={< CompanyCreate />}/>
        <Route path='/activity_create' element={< ActivityCreate />}/>
        <Route path='/activity/:id' element={< ActivityDetail  />}/>
        <Route path='/activity/:id/update' element={< ActivityUpdate  />}/>
        <Route path='/activities/by-company' element={< ActivitiesByCompany  />}/>
      </Routes>
    </Router>
    )
}

export default RoutesApp