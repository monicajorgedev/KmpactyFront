import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Login from '../pages/Login'

// import Searchform from './components/forms/SearchForm'

const RoutesApp = () => {
    return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/login' element={< Login />}/>
      </Routes>
      <Footer />
    </Router>
    )
}

export default RoutesApp