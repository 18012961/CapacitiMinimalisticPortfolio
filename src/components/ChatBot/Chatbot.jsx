// Chatbot.jsx
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const toggleChatbot = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

  const sendMessage = () => {
    if (userInput.trim() === '') return;

    const newMessages = [
      ...messages,
      { text: userInput, type: 'user' },
    ];

    let botResponse = "I'm not sure how to respond to that.";
    if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey')) {
      botResponse = 'Hi there! How can I assist you today?';
    } else if (userInput.includes('help')) {
      botResponse = 'I\'m here to help! What do you need assistance with?';
    } else if (userInput.includes('cv')) {
      botResponse = "You can download the CV under the Resume section.";
    } else if (userInput.includes('bye')) {
      botResponse = 'Goodbye! Have a great day!';
    } else if (userInput.includes('thank you') || userInput.includes('thanks')) {
      botResponse = 'You\'re welcome! Let me know if you need anything else.';
    }

    setMessages([...newMessages, { text: botResponse, type: 'bot' }]);
    setUserInput('');
  };

  return (
    <div>
      <div id="chatbot-toggle" onClick={toggleChatbot}>
        <i className="bi bi-chat"></i>
      </div>

      {isOpen && (
        <div id="chatbot">
          <div id="chatbot-header">
            I&apos;m CK, Chat with me!
            <button id="chatbot-close-btn" onClick={closeChat}>X</button>
          </div>

          <div id="chatbot-body">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`message ${msg.type === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div id="chatbot-footer">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button id="send-button" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
