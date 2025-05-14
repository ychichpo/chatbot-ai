import React, { useState } from 'react';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // Ajoute le message utilisateur
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput("");

    // Réponse fictive de l'IA
    setTimeout(() => {
      setMessages([...newMessages, { sender: 'bot', text: "Je suis un bot 🤖 ! Pose-moi une question." }]);
    }, 500);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      background: '#f9f9f9'
    }}>
      <h2>💬 ChatBot</h2>
      <div style={{
        height: '300px',
        overflowY: 'auto',
        padding: '10px',
        background: 'white',
        borderRadius: '8px',
        border: '1px solid #ddd',
        marginBottom: '10px'
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            textAlign: msg.sender === 'user' ? 'right' : 'left',
            marginBottom: '8px'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: '15px',
              background: msg.sender === 'user' ? '#d0ebff' : '#e6e6e6',
              maxWidth: '70%'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Votre message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={sendMessage} style={{ padding: '8px 16px' }}>Envoyer</button>
      </div>
    </div>
  );
}
