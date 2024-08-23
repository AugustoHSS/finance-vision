import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        console.log(token)
        if (!token) {
          navigate('/login');
        }
      }, [navigate]);
  return (
    <p>teste</p>
  )
}

