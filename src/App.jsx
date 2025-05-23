import { useState } from 'react'
import useChat from './hooks/useChat';
import UserList from './components/UserList';
import ChatWindow from './components/ChatWindow';
import AIAssistant from './components/AIAssistant';
import './App.css'

function App() {
  const {
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
  } = useChat()

  const [showUserList, setShowUserList] = useState(true);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [activePanel, setActivePanel] = useState('chats');
  return (
    <div className='flex flex-col md:flex-row  h-screen bg-gray-100'>
      {/*Mobile navigation */}
      <div className='md:hidden flex justify-between p-2 bg-white border-b'>
        <button
        onClick={() => setActivePanel('chats')}
        className={`p-2 ${activePanel === 'chats' ? 'text-blue-500' : 'text-gray-600'}`}
        >
          Chats
        </button>
        <button 
        onClick={() => setActivePanel('messages')}
        className={`p-2 ${activePanel === 'messages' ? 'text-blue-500' : 'text-gray-600'}`}
        >
          Messages
        </button>
        <button
        onClick={() => setActivePanel('ai')}
        className={`p-2 ${activePanel === 'ai' ? 'text-blue-500' : 'text-gray-600'}`}
        >
          AI
        </button>
      </div>

      {/* User list - hidden on mobile when not active  */}

      <div className={`w-full md:w-1/4 border-r bg-white 
        ${activePanel === 'chats' ? 'block' : 'hidden'} md:block`}>
        <UserList 
         users={users}
         selectedUser={selectedUser}
         onSelectUser={(user) => {
          setSelectedUser(user);
          setActivePanel('messages')
         }}
        />
      </div>


      {/*Chat window always visible on medium+ screens */}
      <div className={`flex-1 flex flex-col${activePanel === 'messages' ? 'flex' : 'hidden'} md:flex`}>
        <ChatWindow 
         selectedUser={selectedUser}
         messages={messages}
         newMessage={newMessage}
         setNewMessage={setNewMessage}
         handleSend={handleSendMessage}
         onBack={() => setActivePanel('chats')}
        />
      </div>


      {/*AI assistant - hidden on mobile when not active */}
      <div className={`w-full md:w-1/4 border-l bg-white 
        ${activePanel === 'ai' ? 'block' : 'hidden'} md:block`}>
        <AIAssistant 
         aiMessages={aiMessages}
         aiInput={aiInput}
         setAiInput={setAiInput}
         handleSend={handleAIQuery}
        />
      </div>


    </div>
  )
}

export default App
