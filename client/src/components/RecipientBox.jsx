import React from 'react'

const RecipientBox = ({ onChange, onRandom, value }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-lg shadow-md bg-gray-800 flex gap-2 items-center">
      <strong className="text-gray-300">Recipient ID:</strong> 

      <input
        type='text'
        placeholder='Enter recipient'
        value={value}
        className='p-1 bg-gray-700 text-gray-300 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md'
        onChange={(e) => onChange(e.target.value)}
      ></input>

      <button
        onClick={onRandom}
      >
        Random?
      </button>
    </div>
  )
}

export default RecipientBox