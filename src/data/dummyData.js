export const users = [
    { 
        id: 1, 
        name: "Uzra Khan", 
        avatar: 'https://i.pravatar.cc/150?img=1',
        lastMessage: "Hey, how are you doing?",
        unread: 0,
        messages: [
        { id: 1, text: 'Hi there!', sender: 'uzra', timestamp: '10:30 AM' },
        { id: 2, text: 'Hey,how are you doing?', sender: 'me', timestamp: '10:31 AM' },
        ]
    },
    { 
        id: 2, 
        name: 'Jane Smith', 
        avatar: 'https://i.pravatar.cc/150?img=2', 
        lastMessage: 'See you tomorrow!', 
        unread: 0,
        messages: [
        { id: 1, text: 'Hello! Are we still on for tomorrow?', sender: 'jane', timestamp: '09:15 AM' },
        { id: 2, text: 'Yes, absolutely!', sender: 'me', timestamp: '09:20 AM' },
        { id:3, text: 'See you tomorrow!', sender: 'jane' , timestamp: '09:30 AM'}
        ]
    },
    { 
        id: 3, 
        name: 'Mike John', 
        avatar: 'https://i.pravatar.cc/150?img=3', 
        lastMessage: 'Thanks for the help!', 
        unread: 2,
        messages: [
        { id: 1, text: 'Can you help me with the project?', sender: 'mike', timestamp: '02:45 PM' },
        { id: 2, text: 'Sure, can we have face meet now?', sender: 'me', timestamp: '02:50 PM' },
        {id: 3, text: 'Thanks for the help!', sender: 'mike', timestamp: '03:00 PM'}
        ]
    }
]



export const initialAIMessages = [
  { id: 1, text: 'Hello! How can I assist you today?', sender: 'ai', timestamp: '10:30 AM' },
];
