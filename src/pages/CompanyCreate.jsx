import Companyform from "../components/forms/CompanyForm";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../contexts/UserContext";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");

  const createCompanySubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();
      localStorage.setItem("authToken", token);
      data.uid = user.uid;
    } catch (error) {
      console.error("Error:", error);
      setError("El email ya esta registrado.");
      throw error;
    }

    try {
      const UrlApi = import.meta.env.VITE_APP_URL_API;
      const urlApiCreate = `${UrlApi}company`;

      const response = await fetch(urlApiCreate, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log(data);
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };
  return (
    <>
      <div>
        <h2>Introduce los datos de tu compañia</h2>
        {error && <p>{error}</p>}
        <Companyform submit={createCompanySubmit} />
      </div>
    </>
  );
};

export default CompanyCreate;
