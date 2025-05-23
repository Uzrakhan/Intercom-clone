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
    <div className='flex flex-col md:flex-row  h-screen bg-gray-100 overflow-hidden'>
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
      <div className={`md:flex flex-col flex-[0_0_300px] border-r bg-white shadow-lg ${showUserList ? 'block' : 'hidden'} md:block`}>
        <div className="p-4 h-full flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Conversations</h2>
          <div className="flex-1 overflow-y-auto pr-2 -mr-2">
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
        </div>
      </div>



      {/*Chat window always visible on medium+ screens */}
      <div className={`flex-1 flex flex-col bg-white md:shadow-inner ${showChat ? 'block' : 'hidden'} md:flex`}>
        <div className="flex-1 flex flex-col h-full">
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
