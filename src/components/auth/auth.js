import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    _id: "656eef574bdea5ca48752951",
    email: "kumar@gmail.com",
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N…3NzJ9.lpGV9ZBg1bVfTG5gFKHlZ7JDTyIeC9LpP2wZSGnPAho",
    active_session_refresh_token: "9SeX0JiH",
  });
  const [patient, setPatient] = useState(null);
  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };
  const patientLogin = (user) => {
    setPatient(user);
  };

  const patientLogout = () => {
    setPatient(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, patient, login, logout, patientLogin, patientLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
