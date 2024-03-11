// components/ChatBot.js
import React, { useState } from 'react';
import axios from 'axios';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';

function ChatBot() {
  const [isChatbotExpanded, setIsChatbotExpanded] = useState(true);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello, how can I help you today?', sender: 'assistant' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (textToSend) => {
    if (!textToSend.trim()) return;

    const outgoingMessage = { text: textToSend, sender: 'user' };
    setMessages(m => [...m, outgoingMessage]);

    setIsTyping(true);
    try {
      const response = await axios.post('/api/chat', {
        messages: [{ role: 'user', content: textToSend }]
      });

      const botReply = response.data.choices[0].message.content;
      setMessages(m => [...m, { text: botReply, sender: 'assistant' }]);
    } catch (error) {
      console.error('Error posting message to API:', error);
      setMessages(m => [...m, { text: "I'm having trouble understanding you right now.", sender: 'assistant' }]);
    } finally {
      setIsTyping(false);
      setInput('');
    }
  };

  return (
    <>
      <button className="chatbot-button" onClick={() => setIsChatbotExpanded(!isChatbotExpanded)}>💬</button>
      {isChatbotExpanded && (
        <div className="chatbot-container">
          <MainContainer>
            <ChatContainer>
              <MessageList typingIndicator={isTyping && <TypingIndicator content="Assistant is typing" />}>
                {messages.map((message, index) => (
                  <Message
                    key={index}
                    model={{
                      message: message.text,
                      direction: message.sender === 'user' ? 'outgoing' : 'incoming'
                    }}
                  />
                ))}
              </MessageList>
              <MessageInput
                placeholder="Type message here..."
                value={input}
                onChange={setInput}
                onSend={() => handleSend(input)}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      )}
    </>
  );
}

export default ChatBot;
