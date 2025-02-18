import React, { useState } from 'react';
import './ChatBot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
  
    const toggleChatbot = () => {
      setIsOpen(!isOpen);
    };
  
    const sendMessage = () => {
      if (input.trim()) {
        const newMessages = [...messages, { text: input, sender: 'user' }];
        setMessages(newMessages);
        setInput('');
  
        // Simulate bot response
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "I'm here to help!", sender: 'bot' },
          ]);
        }, 500);
      }
    };
  
    return (
      <>
        <div id="chatbot-toggle" onClick={toggleChatbot}>
          Chat
        </div>
  
        {isOpen && (
          <div id="chatbot">
            <div id="chatbot-header">
              I'm Refilwe, let's talk bestie ✨
              <button onClick={toggleChatbot}>X</button>
            </div>
  
            <div id="chatbot-body">
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
  
            <div id="chatbot-footer">
              <input 
                type="text" 
                id="user-input" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..." 
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button id="send-button" onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}
      </>
    );
};

export default Chatbot;
