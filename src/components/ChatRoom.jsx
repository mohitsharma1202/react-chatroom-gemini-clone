import React, { useEffect, useRef, useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import { toast } from 'react-toastify';

const ChatRoom = ({ chatroomId, onBack }) => {
  const { messages, addMessage } = useChatStore();
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: 'user', time: new Date().toLocaleTimeString() };
    addMessage(chatroomId, newMessage);
    setInput('');
    toast.success('Message sent!');

    setTimeout(() => {
      addMessage(chatroomId, {
        text: 'This is a simulated AI reply.',
        sender: 'ai',
        time: new Date().toLocaleTimeString()
      });
      toast.info('Gemini replied!');
    }, 1200);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      addMessage(chatroomId, { text: reader.result, sender: 'user', isImage: true, time: new Date().toLocaleTimeString() });
      toast.success('Image sent!');
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages[chatroomId]]);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl">
      <button onClick={onBack} className="mb-4 bg-gray-500 text-white px-4 py-2 rounded hover:scale-105 transition">⬅️ Back</button>

      <div className="border border-gray-600 h-96 overflow-y-auto p-3 rounded-lg bg-black/20 space-y-3 mb-4">
        {messages[chatroomId]?.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01] ${
              msg.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-green-500 text-white'
            }`}
            onClick={() => !msg.isImage && copyToClipboard(msg.text)}
          >
            {msg.isImage ? (
              <img src={msg.text} alt="Uploaded" className="max-w-xs rounded-xl hover:scale-105 transition" />
            ) : (
              <span>{msg.text}</span>
            )}
            <div className="text-xs mt-1 text-right">{msg.time}</div>
          </div>
        ))}
        <div className="text-sm italic animate-pulse text-gray-300 mt-2">Gemini is typing...</div>
        <div ref={chatEndRef}></div>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="border border-gray-600 p-3 rounded-xl flex-1 bg-transparent text-white"
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="block text-sm text-gray-300" />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 transition">
          📤
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
