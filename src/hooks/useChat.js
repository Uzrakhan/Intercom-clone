import { useState } from "react";
import { users as initialUsers, initialAIMessages } from '../data/dummyData';

const useChat = () => {
    const [users, setUsers] = useState(initialUsers);
    const [aiMessages,setAiMessages] = useState(initialAIMessages);
    const [selectedUser,setSelectedUser] = useState(initialUsers[0]);
    const [newMessage,setNewMessage] = useState('');
    const [aiInput, setAiInput] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() && selectedUser) {
            const newMsg = {
                id: selectedUser.messages.length + 1,
                text: newMessage,
                sender: 'me',
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            const updatedUsers = users.map(user => 
                user.id === selectedUser.id 
                ? {...user, messages: [...user.messages, newMsg]}
                : user
            )
            setMessages(updatedUsers);
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