import React, { useEffect,  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Container } from './home.styled';

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
    <Container>
      <Sidebar />
      <div style={{ marginLeft: '60px', padding: '20px' }}>
        <h1>Conteúdo Principal</h1>
      </div>
  </Container>
  )
}
