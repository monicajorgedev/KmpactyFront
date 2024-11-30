import Companyform from "../components/forms/Companyform";
import { useContext } from "react";

import { useNavigate } from 'react-router-dom'
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../contexts/UserContext"; 

const Companycreate = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext);

  const createCompanySubmit = async (data) => {
      
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      localStorage.setItem("authToken", token);
      data.uid = user.uid
    
    
      const UrlApi = import.meta.env.VITE_APP_URL_API
      const urlApiCreate = `${UrlApi}company`

    try {
      const response = await fetch(urlApiCreate, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', 
          },
          body: JSON.stringify(data),
      })
      if (response.ok) {
          const data = await response.json();
          setUser(data)
          console.log(data)
           navigate('/')

      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
    return (
      <>
        <div>
        <h2>Introduce los datos de tu compañia</h2>
        <Companyform submit={createCompanySubmit}/>
        </div>
      </>
      
      
    );
  }
  
  export default Companycreate