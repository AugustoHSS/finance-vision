import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';

export default function Home() {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  return null;
}