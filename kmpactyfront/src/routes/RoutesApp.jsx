import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Activitycreate from '../pages/Activitycreate'
import Companycreate from '../pages/Companycreate'


const RoutesApp = () => {
    return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/register' element={< Register />}/>
        <Route path='/activity_create' element={< Activitycreate />}/>
        <Route path='/company_create' element={< Companycreate />}/>
      </Routes>
      <Footer />
    </Router>
    )
}

export default RoutesApp