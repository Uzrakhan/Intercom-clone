import React from 'react'

const AIAssistant = ({ aiMessages, aiInput, setAiInput, handleSend }) => {
  return (
    <div className='flex flex-col h-full'>
        {/*AI Header */}
        <div className='p-2 md:p-4 border-b'>
            <p className='text-lg md:text-xl font-bold text-gray-700'>AI Copilot</p>
            <p className="text-xs md:text-sm text-gray-600">Ask me anything</p>
        </div>

        {/* AI messages*/}
        <div className='flex-1 overflow-y-auto p-2 md:p-4 bg-gray-50'>
            {aiMessages.map((message) => (
                <div
                 key={message.id}
                 className={`mb-3 ${message.sender === 'ai' ? 'text-left' : 'text-right'}`}
                >
                    <div
                    className={`inline-block w-[80%] md:max-w-xs px-3 py-2 text-sm md:text-base rounded-lg 
                        ${message.sender === 'ai' 
                        ? 'bg-white border text-gray-800' 
                        : 'bg-blue-500 text-white'
                    }`}
                    >
                        <p>{message.text}</p>
                        <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                    </div>
                </div>
            ))}
        </div>

        {/*AI Input */}
        <div className='p-2 md:p-4 border-t bg-white'>
            <div className='flex items-center'>
                <input 
                 type='text'
                 value={aiInput}
                 onChange={(e) => setAiInput(e.target.value)}
                 onKeyUp={(e) => e.key === 'Enter' && handleSend()}
                 placeholder='Ask AI ...'
                 className='flex-1 p-1.5 md:p-2 text-sm md:text-base  border rounded-lg focus-outline-none focus:border-blue-500'
                />
                <button
                onClick={handleSend}
                className='ml-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-500 text-white text-sm md:text-base rounded-lg hover:bg-blue-600 transition-colors'
                >
                    Send
                </button>
            </div>
        </div>
    </div>
  )
}

export default AIAssistant