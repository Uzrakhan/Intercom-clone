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
  const [showAI, setShowAI] = useState(false);
  const [showChat, setShowChat] = useState(false)

  return (
    <div className='flex flex-col md:flex-row  h-screen bg-gray-100'>
      {/*Mobile navigation */}
      <div className='md:hidden flex justify-between p-2 bg-white border-b'>
        <button
        onClick={() => {
          setShowUserList(true)
          setShowAI(false)
          setShowChat(false)
        }}
        className='p-2 text-blue-500'
        >
          Chats
        </button>
        <button 
        onClick={() => {
          setShowUserList(false)
          setShowChat(true)
          setShowAI(false)
        }}
        className='p-2 text-blue-500'
        >
          Messages
        </button>
        <button
        onClick={() => {
            setShowUserList(false);
            setShowChat(false);
            setShowAI(true);
        }}
        className='p-2 text-gray-600'
        >
          AI
        </button>
      </div>

      {/* User list - hidden on mobile when not active  */}

      <div className={`w-full md:w-1/4 border-r bg-white 
        ${showUserList ? 'block' : 'hidden'} md:block`}>
        <UserList 
         users={users}
         selectedUser={selectedUser}
         onSelectUser={(user) => {
            setSelectedUser(user);
            setShowUserList(false);
            setShowChat(true);
          }}
        />
      </div>


      {/*Chat window always visible on medium+ screens */}
      <div className={`flex-1 flex flex-col ${showChat ? 'block' : 'hidden'} md:flex`}>
        <ChatWindow 
         selectedUser={selectedUser}
         messages={messages}
         newMessage={newMessage}
         setNewMessage={setNewMessage}
         handleSend={handleSendMessage}
         onBack={() => {
            setShowChat(false);
            setShowUserList(true);
          }}
        />
      </div>


      {/*AI assistant - hidden on mobile when not active */}
      <div className={`w-full md:w-1/4 border-l bg-white 
        ${showAI ? 'block' : 'hidden'} md:block`}>
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
