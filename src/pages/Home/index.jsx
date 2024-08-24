import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar.jsx';

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
    <div>
    <Sidebar />
    <div style={{ marginLeft: '60px', padding: '20px' }}>
      {/* Aqui você colocaria o conteúdo principal da sua aplicação */}
      <h1>Conteúdo Principal</h1>
    </div>
  </div>
  )
}

