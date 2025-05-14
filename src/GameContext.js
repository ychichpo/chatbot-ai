import React, { createContext, useContext, useState } from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';

const GameContext = createContext();

export function GameProvider({ children }) {
  const [teams, setTeams] = useLocalStorageState('chatbot_teams', []);
  const [playerName, setPlayerName] = useLocalStorageState('chatbot_name', '');
  const [playerTeam, setPlayerTeam] = useLocalStorageState('chatbot_team', '');

  const createTeams = (numberOfTeams) => {
    const newTeams = [];
    for (let i = 1; i <= numberOfTeams; i++) {
      newTeams.push({ name: `Équipe ${i}`, score: 0, players: [] });
    }
    setTeams(newTeams);
  };

  const addPlayerToTeam = (name, teamName) => {
    const updatedTeams = [...teams];
    const team = updatedTeams.find(t => t.name === teamName);

    if (!team || team.players.includes(name) || team.players.length >= 5) return false;

    team.players.push(name);
    setTeams(updatedTeams);
    setPlayerName(name);
    setPlayerTeam(teamName);
    return true;
  };

  const resetGame = () => {
    setTeams([]);
    setPlayerName('');
    setPlayerTeam('');
    localStorage.removeItem('chatbot_teams');
    localStorage.removeItem('chatbot_name');
    localStorage.removeItem('chatbot_team');
  };

  return (
    <GameContext.Provider value={{
      teams,
      playerName,
      playerTeam,
      createTeams,
      addPlayerToTeam,
      resetGame
    }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
