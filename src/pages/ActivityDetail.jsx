import { useState, useEffect } from "react";
import Boxdetail from "../components/BoxDetail";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { LoadingContext } from "../contexts/LoadingContext";

const ActivityDetail = () => {
  const { setLoading } = useContext(LoadingContext);
  const [data, setData] = useState(null);
  const params = useParams();
  const urlApi = import.meta.env.VITE_APP_URL_API;
  const activityId = params.id;
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const fetchDataActivities = async (activityId) => {
    setLoading(true);
    try {
      const response = await fetch(`${urlApi}activities/${activityId}`);
      if (response.status === 404) {
        window.alert("Actividad no encontrada");
        navigate("/");
        return;
      } else if (response.status === 401) {
        window.alert("Session caducada. Vuelva a iniciar session");
        navigate("/login");
      }
      setLoading(false);
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataActivities(activityId);
  }, [activityId]);

  const deleteActivity = async () => {
    if (!window.confirm("¿Seguro que quieres eliminar la actividad?")) {
      return false;
    }
    setLoading(true);
    const urlApiDelete = `${urlApi}activities/${activityId}`;

    try {
      const response = await fetch(urlApiDelete, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setLoading(false);
      if (response.ok) {
        window.alert("Actividad eliminada correctamente");
        navigate(`/`);
      } else if (response.status === 401) {
        window.alert("Session caducada. Vuelva a iniciar session");
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <h2>Detalle actividad o campamento</h2>
        {data === null ? <div>cargando...</div> : <Boxdetail data={data} />}
        {/* AQUI HAY QUE PONER UNA CONDICION PARA QUE CUANDO SE ESTE LOGADO, APAREZCAN ESTOS BOTONES Y SINO NO */}
        {user && user.uid === data?.company.uid ? (
          <>
            <button onClick={() => navigate(`/activity/${activityId}/update`)}>
              Modificar
            </button>
            <button onClick={deleteActivity}> Eliminar</button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ActivityDetail;
