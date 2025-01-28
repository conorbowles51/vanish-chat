const UserId = ({ userId }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-lg shadow-md bg-gray-800 flex gap-2">
      <strong className="text-gray-300">My User ID:</strong> 
      <span className="text-blue-400">{userId ? userId : 'Loading...'}</span>
    </div>
  )
}

export default UserId