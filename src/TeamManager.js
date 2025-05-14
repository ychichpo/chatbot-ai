import React, { useState } from 'react';

export default function TeamManager() {
  const [teams, setTeams] = useState([
    { name: 'Équipe 1', score: 0 },
    { name: 'Équipe 2', score: 0 },
  ]);
  const [newTeamName, setNewTeamName] = useState('');

  const addTeam = () => {
    if (!newTeamName.trim()) return;
    setTeams([...teams, { name: newTeamName, score: 0 }]);
    setNewTeamName('');
  };

  const removeTeam = (index) => {
    const updated = [...teams];
    updated.splice(index, 1);
    setTeams(updated);
  };

  const resetScores = () => {
    const reset = teams.map(t => ({ ...t, score: 0 }));
    setTeams(reset);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#f1f8e9'
    }}>
      <h2 style={{ textAlign: 'center' }}>👥 Gestion des Équipes</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
          placeholder="Nom de l'équipe"
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={addTeam}>Ajouter</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {teams.map((team, index) => (
          <li key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            padding: '8px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            <span>{team.name}</span>
            <button onClick={() => removeTeam(index)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <button onClick={resetScores} style={{ marginTop: '10px' }}>🔄 Réinitialiser les scores</button>
    </div>
  );
}
