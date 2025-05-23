import React from 'react'

const ChatWindow = ({ selectedUser, newMessage, setNewMessage, handleSend,onBack }) => {
    const messages = selectedUser?.messages || [];
  return (
    <div className='flex flex-col h-full'>

        {/*Chat header */}
        <div className='p-3 md:p-4 border-b flex items-center bg-white'>
            <button
            onClick={onBack}
            className="md:hidden mr-2 text-blue-500"
            >
            ←
            </button>
            <div className='ml-2 md:ml-3'>
                <h2 className='text-xl md:text-base font-bold  text-gray-800'>{selectedUser.name}</h2>
            </div>
        </div>

        {/*Messages*/}
        <div className='flex-1 overflow-y-auto p-3 md:p-4 bg-gray-50'>
            {messages.map((message) => (
                <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} mb-3 gap-2`}
                >
                    {message.sender !== 'me' && (
                        <img 
                            src={selectedUser.avatar}
                            alt={selectedUser.name}
                            className="w-6 h-6 rounded-full self-end mb-1"
                        />
                    )}
                    <div
                     className={`max-w-[85%] md:max-w-xs lg:max-w-md px-2 py-1 text-sm md:text-base rounded-lg ${
                        message.sender === 'me'
                        ? 'bg-indigo-200 text-black'
                        : 'bg-gray-100 border text-black'
                     }`}
                    > 
                        <p className='text-sm md:text-base leading-relaxed'>{message.text}</p>
                        <p className='text-sm md:text-sm text-gray-500'>{`${message.sender === 'me' ? 'Seen 1 min' : '1 min'}`}</p>
                    </div>
                </div>
            ))}
        </div>


        {/* Message input*/}
        <div className='p-3 md:p-4 border-t bg-white'>
            <div className="flex items-center gap-2">
                <input 
                 type='text'
                 value={newMessage}
                 onChange={(e) => setNewMessage(e.target.value)}
                 onKeyUp={(e) => e.key === 'Enter' && handleSend()}
                 placeholder='Type a message...'
                 className='flex-1 p-2 text-sm md:text-base mb-5 border rounded-lg focus:outline-1 focus:border-black'
                />
                <button
                onClick={handleSend}
                className='ml-2 mb-5 px-3 py-1.5 md:px-2 md:py-1 text-sm md:text-base bg-white border-2 border-slate-900 text-black rounded-lg hover:bg-black hover:text-white transition-colors'
                >
                    Send
                </button>
            </div>
        </div>
    </div>
  )
}

export default ChatWindow