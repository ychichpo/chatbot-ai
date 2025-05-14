import React, { useState, useEffect, useRef } from 'react';

export default function Chrono() {
  const initialTime = 10 * 60 * 1000; // 10 minutes en millisecondes
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 10) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prevTime - 10;
        });
      }, 10); // mise à jour toutes les 10 ms
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(initialTime);
    setRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
    const centiseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${centiseconds}`;
  };
  

  return (
    <div style={{
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      textAlign: 'center',
      backgroundColor: '#fff8e1'
    }}>
      <h2>⏱ Chronomètre Inversé</h2>
      <div style={{ fontSize: '2rem', margin: '20px 0', fontFamily: 'monospace' }}>
        {formatTime()}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setRunning(true)} disabled={running || time === 0}>Démarrer</button>
        <button onClick={() => setRunning(false)} disabled={!running}>Pause</button>
        <button onClick={reset}>Réinitialiser</button>
      </div>
    </div>
  );
}
