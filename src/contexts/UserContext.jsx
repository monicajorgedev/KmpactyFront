import { createContext, useState, useEffect } from "react";


// Crear el contexto de usuario
export const UserContext = createContext();

// Exportación por defecto para el proveedor del contexto
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const urlApi = import.meta.env.VITE_APP_URL_API

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const token = localStorage.getItem("authToken");

      if (token) {
        try {
          const response = await fetch(`${urlApi}company`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          const data = await response.json();
          console.log('data', data)
          setUser(data)
        
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
          setUser(null); // Asegura que `user` se establezca como null en caso de error
        }
      } else {
        setUser(null); // Si no hay token, establece `user` en null
      }
      setLoading(false);
    };

    fetchUser();
  }, []); // Corre una vez al cargar el contexto

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider; // Exportación por defecto