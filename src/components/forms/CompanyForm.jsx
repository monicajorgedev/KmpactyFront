import { useState } from "react";
import styles from "./Forms.module.css";

const Companyform = ({ submit, data = {} }) => {
  const [inputs, setInputs] = useState(data);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formulario enviado con los siguientes datos:", inputs);
    if (inputs.password !== inputs.password_repeat) {
      setError("La contraseña no coincide. Introduce la misma contraseña");
    } else {
      delete inputs.password_repeat;
      await submit(inputs);
      setInputs({});
    }
  };

  return (
    <>
      <form className={styles.companyform} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
          placeholder="Nombre empresa"
          required
        />
        <input
          type="text"
          name="location"
          value={inputs.location || ""}
          onChange={handleChange}
          placeholder="Dirección"
          required
        />
        <input
          type="number"
          name="phone"
          value={inputs.phone || ""}
          onChange={handleChange}
          placeholder="Teléfono "
          required
        />
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          placeholder="Introduce una contraseña. Mínimo 6 caracteres"
          required
        />
        <input
          type="password"
          name="password_repeat"
          value={inputs.password_repeat || ""}
          onChange={handleChange}
          placeholder="Repite la contraseña"
          required
        />
        <input
          type="text"
          name="web"
          value={inputs.web || ""}
          onChange={handleChange}
          placeholder="Página web"
        />
        {error && <p>{error}</p>}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Companyform;
