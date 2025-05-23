import React from 'react';

const UserList = ({ users, onSelectUser, setSelectedUser }) => {
  return (
    <div className='p-2 md:p-4'>
        <div className='space-y-1 md:space-y-2'>
            {users.map((user) => (
                <div 
                 key={user.id}
                 onClick={() => onSelectUser(user)}
                 className={`flex items-center p-2 md:p-3 rounded-lg cursor-pointer transition-colors
                    ${setSelectedUser && setSelectedUser.id === user.id ? 'bg-blue-50 border-blue-200': 'hover:bg-gray-50'}
                    `}
                >
                    <img 
                    src={user.avatar}
                    alt={user.name}
                    className='w-8 h-8 md:w-12 md:h-12 rounded-full object-cover'
                    />
                    <div className='ml-2 md:ml-3 flex-1'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-sm md:text-base font-semibold text-gray-800'>
                                {user.name}
                            </h3>
                            {user.unread > 0 && (
                                <span className='bg-blue-500 text-white rounded-full px-1.5 py-0.5 md:px-2 md:py-1 text-xs'>
                                    {user.unread}
                                </span>
                            )}
                        </div>
                        <p className='text-xs md:text-sm text-gray-600 truncate'>
                            {user.lastMessage}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserList