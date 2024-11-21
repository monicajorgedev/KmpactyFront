import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    //ARREGLAR ESTO del login o logout CUANDO TENGAMOS EL TEMA DE LOS USUARIOS REGISTRADOS
    const login = false
    return (
        <header >
        <nav>
            <Link to={'/'}><span className='logo'>Kmpacty</span></Link>
            {!login ? <Link to={'/login' } >Login</Link>
            : <Link to={'/'} >Logout</Link>}
            
        </nav>
        </header>
    )
}

export default Header