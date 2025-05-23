import React from 'react'

const ChatWindow = ({ selectedUser, messages, newMessage, setNewMessage, handleSend,onBack }) => {
  return (
    <div className='flex flex-col h-full'>

        {/*Chat header */}
        <div className='p-2 md:p-4 border-b flex items-center bg-white'>
            <button
            onClick={onBack}
            className="md:hidden mr-2 text-blue-500"
            >
            ←
            </button>
            <img 
            src={selectedUser.avatar}
            alt={selectedUser.name}
            className='w-8 h-8 md:w-10 md:h-10 rounded-full'
            />
            <div className='ml-2 md:ml-3'>
                <h2 className='text-sm md:text-base font-semibold text-gray-800'>{selectedUser.name}</h2>
                <p className="text-xs md:text-sm text-gray-600">Online</p>
            </div>
        </div>

        {/*Messages*/}
        <div className='flex-1 overflow-y-auto p-2 md:p-4 bg-gray-50'>
            {messages.map((message) => (
                <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} mb-4`}
                >
                    <div
                     className={`max-w-[80%] md:max-w-xs lg:max-w-md px-3 py-2 text-sm md:text-base rounded-lg ${
                        message.sender === 'me'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white border text-gray-800'
                     }`}
                    > 
                        <p>{message.text}</p>
                        <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                    </div>
                </div>
            ))}
        </div>


        {/* Message input*/}
        <div className='p-2 md:p-4 border-t bg-white'>
            <div className="flex items-center">
                <input 
                 type='text'
                 value={newMessage}
                 onChange={(e) => setNewMessage(e.target.value)}
                 onKeyUp={(e) => e.key === 'Enter' && handleSend()}
                 placeholder='Type a message...'
                 className='flex-1 p-1.5 md:p-2 text-sm md:text-base border rounded-lg focus:outline-none focus:border-blue-500'
                />
                <button
                onClick={handleSend}
                className='ml-2 px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
                >
                    Send
                </button>
            </div>
        </div>
    </div>
  )
}

export default ChatWindow