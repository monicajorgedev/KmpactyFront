import { useState, useContext } from 'react'
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import styles from './Forms.module.css'

const Loginform = () => {
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const urlApi = import.meta.env.VITE_APP_URL_API

  
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Inicia sesión en Firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();
        
            // Guarda el token en localStorage
            localStorage.setItem("authToken", token);
        
            // Configura los encabezados para la solicitud
            const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            };
        
            // Obtén los datos del usuario desde el backend
            const response = await fetch(`${urlApi}company`, {
            method: "GET",
            headers,
            });
        
            // Verifica si la respuesta fue exitosa
            if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
        
            const userData = await response.json();
            setUser(userData); // Actualiza el contexto de usuario
        
            navigate("/");
        } catch (error) {
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