import { useState, useContext } from 'react'
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import styles from './Forms.module.css'
import { LoadingContext } from '../../contexts/LoadingContext';

const Loginform = () => {
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const { setLoading } = useContext(LoadingContext)
    const urlApi = import.meta.env.VITE_APP_URL_API

  
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();
        
            localStorage.setItem("authToken", token);
        
            const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            };
        
            const response = await fetch(`${urlApi}company`, {
            method: "GET",
            headers,
            });
        
            if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const userData = await response.json();
            setLoading(false)
            setUser(userData); 
            navigate("/");
        } catch (error) {
            setLoading(false)
            console.error("Error al iniciar sesión:", error);
            setError("Error al iniciar sesión. Revisa tus credenciales.");
        }
        };
          
    return (
        <>
        <form className={styles.loginform} onSubmit={handleLogin}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='contraseña' required/>
            {error && <p>{error}</p>}
            <button type='submit'>Entrar</button>
        </form>
        
        </> 
    )
}

export default Loginform