import React, { useState, useEffect, useContext } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading,setLoading] = useState(true);
    

  return(
    <AppContext.Provider value={loading}>
        {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
