import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

function ChatBot() {
    const [isChatbotExpanded, setIsChatbotExpanded] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm your assistant! How can I help you today?",
            sentTime: "just now",
            sender: "assistant"
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const toggleChatbot = () => setIsChatbotExpanded(!isChatbotExpanded);

    const handleSend = async (text) => {
        const outgoingMessage = {
            message: text,
            sentTime: new Date().toLocaleTimeString(),
            sender: "user",
        };

        setMessages([...messages, outgoingMessage]);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [{ role: "user", content: text }],
                }),
            });

            const data = await response.json();
            const botReply = data.choices[0].message.content;

            setMessages((currentMessages) => [...currentMessages, {
                message: botReply,
                sentTime: new Date().toLocaleTimeString(),
                sender: "assistant",
            }]);
        } catch (error) {
            console.error('Error posting message to API:', error);
        }

        setIsTyping(false);
    };

    return (
        <>
            <button className="chatbot-button" onClick={toggleChatbot}>💬</button>
            <div className={`chatbot-container ${isChatbotExpanded ? 'chatbot-expanded' : ''}`}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList typingIndicator={isTyping ? <TypingIndicator content="Assistant is typing" /> : null}>
                            {messages.map((msg, index) => (
                                <Message key={index} model={{
                                    message: msg.message,
                                    sentTime: msg.sentTime,
                                    direction: msg.sender === "user" ? "outgoing" : "incoming"
                                }} />
                            ))}
                        </MessageList>
                        <MessageInput placeholder="Type message here..." onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </>
    );
}

export default ChatBot;
