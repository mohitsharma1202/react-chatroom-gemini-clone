import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import OtpForm from './components/OtpForm';
import Dashboard from './components/Dashboard';
import ChatRoom from './components/ChatRoom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [otpSent, setOtpSent] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentChatId, setCurrentChatId] = useState(null);

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white transition-all duration-500">
      <div className="w-full max-w-3xl p-4">
        {!loggedIn ? (
          !otpSent ? (
            <LoginForm onOtpSent={() => setOtpSent(true)} />
          ) : (
            <OtpForm onSuccess={() => setLoggedIn(true)} />
          )
        ) : currentChatId === null ? (
          <Dashboard onEnterChatroom={(id) => setCurrentChatId(id)} />
        ) : (
          <ChatRoom chatroomId={currentChatId} onBack={() => setCurrentChatId(null)} />
        )}
      </div>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </div>
  );
}

export default App;
