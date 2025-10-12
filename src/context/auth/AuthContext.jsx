import { createContext, useContext, useState } from 'react';
import { login as loginService } from '../../services/authApi.js';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('authToken') || sessionStorage.getItem('authToken'));
  const [user, setUser] = useState(null);

  const handleLogin = async (credentials, rememberMe = false) => {
    const data = await loginService(credentials);
    setAccessToken(data.accessToken);
    if (rememberMe){
      localStorage.setItem('authToken', data.accessToken);
    } 
    else {
      sessionStorage.setItem('authToken', data.accessToken);
    }
    setUser(data.user);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ accessToken, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook custom para consumir AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
