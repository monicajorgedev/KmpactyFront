import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext"; // Importa el contexto
import styles from './Components.module.css'

function LogoutButton() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Accede a la función setUser

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null); // Establecer el usuario a null en el contexto
    navigate("/");
  };

  return <button className={styles.logout} onClick={handleLogout}><img  src="/icons8-salida-50.png"/></button>;
}

export default LogoutButton;
