import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import styles from "./Components.module.css";

function LogoutButton() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/");
  };

  return (
    <button className={styles.logout} onClick={handleLogout}>
      <img src="/icons8-salida-50.png" />
    </button>
  );
}

export default LogoutButton;
