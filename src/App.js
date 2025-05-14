import React from 'react';
import ChatBox from './ChatBox';
import Chrono from './Chrono';
import ScoreBoard from './ScoreBoard';
import TeamManager from './TeamManager';


function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🎮 ChatBot AI</h1>

      {/* Contenu principal en deux colonnes */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '20px',
          gap: '20px',
          flexWrap: 'wrap'
        }}
      >
        {/* Colonne gauche : Chrono + Score */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <Chrono />
          <ScoreBoard />
        
        <TeamManager />

        </div>

        {/* Colonne droite : Chat en haut */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default App;
