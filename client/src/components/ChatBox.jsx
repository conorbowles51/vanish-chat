import React from 'react'
import UserId from './UserId'

const ChatBox = ({ messages, userId }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-lg shadow-md bg-gray-800 h-full text-left">
      <div className='flex justify-between'>
        <h3>Vanish Chat v1.0.0</h3>
        <UserId userId={userId}/>
      </div>

      {messages.map((message, index) => {
        const isSender = message.sender === userId

        return (
          <div key={index} className="mb-2">
            <strong className={isSender ? 'text-green-400' : 'text-gray-300'}>
              {message.sender}
            </strong>: 
            <span className="text-gray-300"> {message.message}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ChatBox