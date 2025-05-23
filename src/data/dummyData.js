export const users = [
    { 
        id: 1, 
        name: "Uzra Khan", 
        avatar: 'https://i.pravatar.cc/150?img=1',
        lastMessage: "Hey, how are you doing?",
        unread: 2
    },
    { 
        id: 2, 
        name: 'Jane Smith', 
        avatar: 'https://i.pravatar.cc/150?img=2', 
        lastMessage: 'See you tomorrow!', 
        unread: 0 
    },
    { 
        id: 3, 
        name: 'Mike Johnson', 
        avatar: 'https://i.pravatar.cc/150?img=3', 
        lastMessage: 'Thanks for the help!', 
        unread: 1 
    }
]

export const initialMessages = [
    { id: 1, text: 'Hi there!', sender: 'user', timestamp: '10:30 AM' },
    { id: 2, text: 'How can I help you?', sender: 'me', timestamp: '10:31 AM' },
]

export const initialAIMessages = [
  { id: 1, text: 'Hello! How can I assist you today?', sender: 'ai', timestamp: '10:30 AM' },
];
