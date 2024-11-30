import { Link } from 'react-router-dom'
import './Header.css'
import LogoutButton from './LogoutButton'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'



const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <header >
        <nav>
            
            {user
            ? <> 
            <button><Link to={"/activities/by-company"}>Mis Actividades</Link></button>
            <button><Link to={"/activity_create"}>Nueva Actividad</Link></button>
            <Link to={'/'}><span className='logo'>Kmpacty</span></Link>
            < LogoutButton />
            </>
            : <>
                <Link to={'/'}><span className='logo'>Kmpacty</span></Link>
                <button><Link to={"/login"}>Login</Link></button>
            </> 
            }
        </nav>
        </header>
    )
}

export default Header