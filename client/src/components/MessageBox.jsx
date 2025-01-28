import React from 'react'
import RecipientBox from './RecipientBox';

const MessageBox = ({ onSend, onRecipientChange, onRandomRecipient, recipientValue }) => {
  const [message, setMessage] = React.useState('')

  return (
    <div className='flex gap-2 border border-gray-700 p-4 rounded-lg shadow-md bg-gray-800'>
      <input
        type='text'
        placeholder='Type your message here'
        className='p-1 bg-gray-700 flex-grow text-gray-300 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <RecipientBox onChange={onRecipientChange} onRandom={onRandomRecipient} value={recipientValue}/>
      <button
        className='p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
        onClick={() => {onSend(message); setMessage('')}}
      >
        Send
      </button>
    </div>
  )
}

export default MessageBox