import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoadingContext } from "../contexts/LoadingContext";
import { useContext } from "react";
import Activityform from "../components/forms/ActivityForm";

const ActivityUpdate = () => {
  const { setLoading } = useContext(LoadingContext);
  const [data, setData] = useState({});
  const params = useParams();
  const urlApi = import.meta.env.VITE_APP_URL_API;
  const activityId = params.id;

  const navigate = useNavigate();

  const fetchDataActivities = async (activityId) => {
    setLoading(true);
    try {
      const response = await fetch(`${urlApi}activities/${activityId}`);
      console.log(response);
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

  const updateSubmit = async (data) => {
    setLoading(true);
    const urlApiCreate = `${urlApi}activities/${activityId}`;

    try {
      const response = await fetch(urlApiCreate, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(data),
      });
      setLoading(false);
      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        navigate(`/activity/${data._id}`);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <h2>Crea el anuncio de una actividad o campamento</h2>
        <Activityform key={data.name} submit={updateSubmit} data={data} />
      </div>
    </>
  );
};

export default ActivityUpdate;
