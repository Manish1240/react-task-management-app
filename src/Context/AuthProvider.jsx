import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

function AuthProvider({ children }) {
  const [UserData, setUserData] = useState({ employees: [], admin: null });

  useEffect(() => {
    setLocalStorage(); // Ensure local storage is set
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  // ✅ Function to update employees & refresh context
  const updateEmployees = (updatedEmployees) => {
    setLocalStorage(); // Optional, to sync local storage if needed
    setUserData((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...UserData, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
