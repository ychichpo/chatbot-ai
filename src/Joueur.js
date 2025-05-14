import React, { useState } from 'react';
import { useGame } from './GameContext';
import ChatBox from './ChatBox';

export default function Joueur() {
  const { teams, playerName, playerTeam, addPlayerToTeam } = useGame();
  const [nameInput, setNameInput] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  // Aucune équipe créée
  if (teams.length === 0) {
    return (
      <div style={styles.center}>
        <h2>⏳ Le jeu n’a pas encore commencé.</h2>
        <p>Veuillez patienter pendant que l’animateur crée les équipes.</p>
      </div>
    );
  }

  // Joueur non encore inscrit
  if (!playerName) {
    const availableTeams = teams.filter(t => t.players.length < 5);

    return (
      <div style={styles.center}>
        <h2>👋 Rejoins une équipe</h2>
        <input
          placeholder="Ton prénom"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          style={styles.input}
        />
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          style={styles.select}
        >
          <option value="">Choisis une équipe</option>
          {availableTeams.map((team, i) => (
            <option key={i} value={team.name}>{team.name} ({team.players.length}/5)</option>
          ))}
        </select>
        <button
          onClick={() => {
            if (nameInput && selectedTeam) addPlayerToTeam(nameInput, selectedTeam);
          }}
          style={styles.button}
          disabled={!nameInput || !selectedTeam}
        >
          Rejoindre
        </button>
      </div>
    );
  }

  // Joueur déjà connecté
  const myTeam = teams.find(t => t.name === playerTeam);
  const otherTeams = teams.filter(t => t.name !== playerTeam);

  return (
    <div style={styles.page}>
      {/* Colonne gauche */}
      <div style={styles.left}>
        <h2>Bienvenue <span style={styles.name}>{playerName}</span> 👋</h2>

        <div style={styles.section}>
          <h3>🏆 Ton équipe : <span style={{ color: '#2e7d32' }}>{myTeam.name}</span></h3>
          <p style={styles.score}>{myTeam.score} points</p>
          <div style={styles.players}>
            {myTeam.players.map((p, i) => (
              <div key={i} style={{
                ...styles.circle,
                backgroundColor: p === playerName ? '#007bff' : '#e0e0e0',
                color: p === playerName ? '#fff' : '#000'
              }}>
                {p}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <h3>⚔️ Autres équipes</h3>
          {otherTeams.map((team, i) => (
            <div key={i} style={styles.teamCard}>
              <strong>{team.name}</strong> – {team.score} pts
              <div style={styles.players}>
                {team.players.map((p, j) => (
                  <div key={j} style={styles.circle}>{p}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Colonne droite : Chat */}
      <div style={styles.right}>
        <ChatBox />
      </div>
    </div>
  );
}

const styles = {
  center: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif'
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    width: '200px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '6px'
  },
  select: {
    padding: '10px',
    fontSize: '1rem',
    width: '220px',
    borderRadius: '6px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  page: {
    display: 'flex',
    padding: '20px',
    fontFamily: 'sans-serif',
    gap: '20px'
  },
  left: {
    flex: 2,
    minWidth: '350px'
  },
  right: {
    flex: 1,
    minWidth: '300px',
    height: '100vh',
    position: 'sticky',
    top: 0,
    alignSelf: 'flex-start',
    overflow: 'auto'
  },
  section: {
    marginTop: '30px'
  },
  name: {
    color: '#007bff',
    fontWeight: 'bold'
  },
  score: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2e7d32',
    margin: '10px 0'
  },
  players: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  circle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    border: '1px solid #aaa'
  },
  teamCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '15px'
  }
};
