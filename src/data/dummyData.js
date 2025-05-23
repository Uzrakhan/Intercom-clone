export const users = [
    { 
        id: 1, 
        name: "Uzra Khan", 
        avatar: 'https://i.pravatar.cc/150?img=1',
        lastMessage: "Hey, how are you doing?",
        unread: 0
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
        name: 'Mike John', 
        avatar: 'https://i.pravatar.cc/150?img=3', 
        lastMessage: 'Thanks for the help!', 
        unread: 2
    }
]

export const initialMessages = [
    { id: 1, text: 'Hi there!', sender: 'user', timestamp: '10:30 AM' },
    { id: 2, text: 'How are you doing?', sender: 'me', timestamp: '10:31 AM' },
    {id:3, text: 'I am alright. What about you?', sender: 'user', timestamp: '10:40 AM' },
    { id:4, text: 'I am not alright. I am sick.', sender: 'me', timestamp: '11:00 AM'}
]

export const initialAIMessages = [
  { id: 1, text: 'Hello! How can I assist you today?', sender: 'ai', timestamp: '10:30 AM' },
];
