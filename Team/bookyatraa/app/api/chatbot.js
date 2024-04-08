"use client";
import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function ChatBot() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatbotExpanded, setIsChatbotExpanded] = useState(false);

  const handleUserInput = async () => {
    if (!userInput.trim()) return;

    setIsLoading(true);
    const userMessage = { role: 'user', content: userInput };
    setChatHistory(prevChat => [...prevChat, userMessage]);

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [...chatHistory, userMessage],
        model: 'gpt-3.5-turbo',
      });

      const botMessage = {
        role: 'assistant',
        content: chatCompletion.choices[0].message.content,
      };
      setChatHistory(prevChat => [...prevChat, botMessage]);
    } catch (error) {
      console.error('Error posting message to API:', error);
      const errorMessage = {
        role: 'assistant',
        content: "I'm having trouble understanding you right now.",
      };
      setChatHistory(prevChat => [...prevChat, errorMessage]);
    } finally {
      setUserInput('');
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className="chatbot-button" onClick={() => setIsChatbotExpanded(!isChatbotExpanded)}>
        💬
      </button>
      {isChatbotExpanded && (
        <div className="chatbot-container">
          <div className="chatbot-content">
          <div className="chatbot-header">
            <div className="text-l text-center font-bold text-blue-800 mb-2">BookYatra Assistant</div>
            <p className="text-gray-600 text-center">Hello,How May I help you today?</p>
          </div>
            <div className="chat-history clearfix">
              {chatHistory.map((message, index) => (
                <div key={index} className={`${message.role === 'user' ? 'user-message' : 'bot-message'}`}>
                  {message.content}
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Ask me something..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="input-field"
              />
              <button
                onClick={handleUserInput}
                className="send-button"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Ask'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

