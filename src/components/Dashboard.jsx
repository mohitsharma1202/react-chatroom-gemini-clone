import React, { useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import { toast } from 'react-toastify';

const Dashboard = ({ onEnterChatroom }) => {
  const { chatrooms, addChatroom, deleteChatroom } = useChatStore();
  const [title, setTitle] = useState('');

  const handleCreate = () => {
    if (title.trim()) {
      addChatroom(title);
      toast.success('Chatroom created!');
      setTitle('');
    }
  };

  const handleDelete = (id) => {
    deleteChatroom(id);
    toast.success('Chatroom deleted!');
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">💬 Chatrooms</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New chatroom name"
          className="border border-gray-600 p-3 flex-1 rounded-xl bg-transparent text-white"
        />
        <button onClick={handleCreate} className="bg-green-600 text-white p-3 rounded-xl hover:scale-105 transition duration-200">
          ➕
        </button>
      </div>

      <div className="space-y-3">
        {chatrooms.map((room) => (
          <div key={room.id} className="flex justify-between items-center p-3 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm shadow hover:scale-[1.01] transition">
            <span className="text-lg">{room.title}</span>
            <div className="flex gap-2">
              <button onClick={() => onEnterChatroom(room.id)} className="bg-blue-600 text-white px-3 py-1 rounded hover:scale-105 transition">
                Open
              </button>
              <button onClick={() => handleDelete(room.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:scale-105 transition">
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
