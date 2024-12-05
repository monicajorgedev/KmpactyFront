import { Link } from "react-router-dom";
import Loginform from "../components/forms/LoginForm";

const Login = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <h2>Quieres anunciar una actividad o campamento</h2>
        <p>Accede a tu cuenta de empresa</p>
      </div>
      <div>
        <Loginform />
      </div>
      <p>Ó</p>
      <Link to={"/register"}>Crea una cuenta</Link>
    </>
  );
};

export default Login;
