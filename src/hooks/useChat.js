import { useState } from "react";
import { users as initialUsers, initialMessages, initialAIMessages } from '../data/dummyData';

const useChat = () => {
    const [users] = useState(initialUsers);
    const [messages,setMessages] = useState(initialMessages);
    const [aiMessages,setAiMessages] = useState(initialAIMessages);
    const [selectedUser,setSelectedUser] = useState(initialUsers[0]);
    const [newMessage,setNewMessage] = useState('');
    const [aiInput, setAiInput] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const newMsg = {
                id: messages.length + 1,
                text: newMessage,
                sender: 'me',
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
            setMessages([...messages, newMsg]);
            setNewMessage('');
        }
    };

    const handleAIQuery = () => {
        if (aiInput.trim()) {
            const userMsg = {
                id: aiMessages.length + 1,
                text: aiInput,
                sender: 'user',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            const aiResponse = {
                id: aiMessages.length + 1,
                text: `AI Received your message - "${aiInput}"`,
                sender: 'ai',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setAiMessages([...aiMessages, userMsg, aiResponse]);
            setAiInput('')
        }
    };

    return {
        users,
        messages,
        aiMessages,
        selectedUser,
        newMessage,
        aiInput,
        setSelectedUser,
        setNewMessage,
        setAiInput,
        handleSendMessage,
        handleAIQuery
    }
};

export default useChat;