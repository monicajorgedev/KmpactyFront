import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Activitycreate from 'src/pages/ActivityCreate'
import Companycreate from '../pages/CompanyCreate'
import Activitydetail from '../pages/ActivityDetail'
import Activityupdate from '../pages/ActivityUpdate'
import ActivitiesByCompany from '../pages/ActivitiesByCompany'



const RoutesApp = () => {

    return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/register' element={< Companycreate />}/>
        <Route path='/activity_create' element={< Activitycreate />}/>
        <Route path='/activity/:id' element={< Activitydetail  />}/>
        <Route path='/activity/:id/update' element={< Activityupdate  />}/>
        <Route path='/activities/by-company' element={< ActivitiesByCompany  />}/>
      </Routes>
    </Router>
    )
}

export default RoutesApp