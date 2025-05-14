import React, { useState } from 'react';
import { useGame } from './GameContext';
import Chrono from './Chrono';

export default function Animateur() {
  const { teams, createTeams, resetGame } = useGame();
  const [input, setInput] = useState('');

  const handleCreate = () => {
    const n = parseInt(input);
    if (!isNaN(n) && n > 0) {
      createTeams(n);
    }
  };

  const colors = ['#c8e6c9', '#bbdefb', '#ffe0b2', '#d1c4e9', '#ffccbc', '#f0f4c3'];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>👨‍🏫 Interface Animateur</h1>

      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Chrono />

        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <label style={{ fontWeight: 'bold' }}>Nombre d’équipes à créer :</label>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <input
              type="number"
              min="1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ padding: '8px', fontSize: '1rem', flex: '1' }}
            />
            <button onClick={handleCreate} style={styles.button}>Créer</button>
            <button onClick={resetGame} style={{ ...styles.button, backgroundColor: '#d32f2f' }}>Réinitialiser</button>
          </div>
        </div>
      </div>

      <div style={styles.teamsContainer}>
        {teams.length === 0 && <p style={{ textAlign: 'center' }}>Aucune équipe n’a encore été créée.</p>}

        {teams.map((team, index) => (
          <div key={index} style={{ ...styles.teamCard, backgroundColor: colors[index % colors.length] }}>
            <h3 style={styles.teamTitle}>{team.name}</h3>
            <p style={styles.score}>Score : {team.score}</p>
            <div style={styles.playersContainer}>
              {team.players.map((player, i) => (
                <div key={i} style={styles.playerCircle}>{player}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  teamsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '30px'
  },
  teamCard: {
    width: '250px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  teamTitle: {
    marginBottom: '10px'
  },
  score: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px'
  },
  playersContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center'
  },
  playerCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    border: '2px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  }
};
