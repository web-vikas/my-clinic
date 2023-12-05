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

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
