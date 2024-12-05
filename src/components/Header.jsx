import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "./Components.module.css";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      {user ? (
        <nav className={styles.useractive}>
          <div>
            <Link to={"/"}>
              <span className={styles.logo}>Kmpacty</span>
            </Link>
            <LogoutButton />
          </div>
          <div>
            <span>
              <Link to={"/activities/by-company"}>Mis Actividades</Link>
            </span>
            <span>
              <Link to={"/activity_create"}>Nueva Actividad</Link>
            </span>
          </div>
        </nav>
      ) : (
        <nav className={styles.usernonactive}>
          <div>
            <Link to={"/"}>
              <span className={styles.logo}>Kmpacty</span>
            </Link>
          </div>
          <div>
            <Link to={"/login"}>
              <img
                className={styles.login}
                src="/icons8-usuario-30.png"
                alt="logo-usuario"
              />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
