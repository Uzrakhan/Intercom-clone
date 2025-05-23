import React from 'react'

const AIAssistant = ({  aiInput, setAiInput, handleSend }) => {
  return (
    <div className='flex flex-col h-full md:p-2 '>
        {/*AI Header */}
        <div className='p-2 md:p-2 border-b'>
            <p className='text-lg md:text-xl font-bold text-gray-700'>AI Copilot</p>
        </div>


        {/* AI messages*/}
        <div className='flex justify-center items-center flex-col flex-1 md:flex md:justify-center md:items-center  overflow-y-auto p-4 pb-24 md:pb-4 md:p-4 bg-gray-50'>
            <h1 className='font-bold text-sm md:text-base'>Hi, I'm Fin AI Copilot</h1>
            <p className='text-gray-500 text-sm md:text-base'>Ask me anything about this conversation</p>
        </div>

        {/*AI input-sticky bottom for mobile */}
        <div className='fixed md:sticky bottom-0 left-0 right-0 bg-white border-t'>
            <div className='p-4'>
                <div className='flex items-enter gap-2'>
                    <input
                        type='text'
                        value={aiInput}
                        onChange={(e) => setAiInput(e.target.value)}
                        onKeyUp={(e) => e.key === 'Enter' && handleSend()}
                        placeholder='Ask AI...'
                        className='flex-1 mt-5 p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black-100'
                    />
                    <button
                    onClick={handleSend}
                    className='ml-3 mt-5 px-3 py-1.5 md:px-2.5 md:py-1 bg-white text-black border-3 border-black font-bold text-sm md:text-base rounded-lg hover:bg-black hover:text-white transition-colors'
                    >
                        ↑
                    </button>
                </div>
                <p className='text-xs text-gray-500 mt-2 px-1'>
                    AI may produce inaccurate information
                </p>
            </div>
        </div>
    </div>
  )
}

export default AIAssistant