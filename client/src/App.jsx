import { io } from 'socket.io-client'
import { useState, useEffect } from 'react'
import './App.css'
import MessageBox from './components/MessageBox'
import ChatBox from './components/ChatBox'

const socket = io(import.meta.env.VITE_SOCKET_URL)

function App() {
  const [userId, setUserId] = useState('')
  const [recipient, setRecipient] = useState('')
  const [messages, setMessages] = useState([])

  const onSend = (message) => {
    socket.emit('sentMessage', { sender: userId, recipient, message })
  }

  const onRandomRecipient = () => {
    socket.emit('getRandomId')
  }

  useEffect(() => {
    socket.on("setId", function(id){
      setUserId(id)
    })

    socket.on("addMessage", function(data){
      setMessages(prevMessages => [...prevMessages, data])
    })

    socket.on("getRandomId", function(randomId){
      setRecipient(randomId)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div className='flex w-full'>
      <div className='flex flex-col p-4 bg-gray-900 min-h-screen text-gray-100 flex-grow'>
        <div className='flex-grow'>
          <ChatBox messages={messages} userId={userId}/>
        </div>

        <div className='mt-4'>
          <MessageBox 
            onSend={onSend} 
            onRecipientChange={setRecipient} 
            onRandomRecipient={onRandomRecipient}
            recipientValue={recipient}
          />
        </div>
      </div>
    </div>

  )
}

export default App