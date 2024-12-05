import { createContext, useState } from "react";
import "./LoadingContext.css";

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading ? (
        <div className="loading">
          <span className="loader"></span>
        </div>
      ) : (
        ""
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
