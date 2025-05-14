import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ marginBottom: '40px' }}>Bienvenue sur 🎮 ChatBot AI</h1>
      <div style={{ display: 'flex', gap: '40px' }}>
        <button
          onClick={() => navigate('/animateur')}
          style={circleButtonStyle}
        >
          Animateur
        </button>
        <button
          onClick={() => navigate('/joueur')}
          style={circleButtonStyle}
        >
          Joueur
        </button>
      </div>
    </div>
  );
}

const circleButtonStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '1.2rem',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s',
};
