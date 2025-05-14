import React, { useState } from 'react';

export default function ScoreBoard() {
  const [teams, setTeams] = useState([
    { name: 'Équipe 1', score: 0 },
    { name: 'Équipe 2', score: 0 },
  ]);

  const updateScore = (index, delta) => {
    const updatedTeams = [...teams];
    updatedTeams[index].score += delta;
    setTeams(updatedTeams);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#e3f2fd'
    }}>
      <h2 style={{ textAlign: 'center' }}>🏆 Score des Équipes</h2>
      {teams.map((team, index) => (
        <div key={index} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '15px',
          padding: '10px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          <strong>{team.name}</strong>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => updateScore(index, -1)}>-</button>
            <span style={{ fontSize: '1.2rem', width: '40px', textAlign: 'center' }}>{team.score}</span>
            <button onClick={() => updateScore(index, 1)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}
