import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useChatStore = create(persist(
  (set) => ({
    chatrooms: [],
    messages: {},
    addChatroom: (title) =>
      set((state) => ({
        chatrooms: [...state.chatrooms, { id: Date.now(), title }]
      })),
    deleteChatroom: (id) =>
      set((state) => ({
        chatrooms: state.chatrooms.filter((room) => room.id !== id)
      })),
    addMessage: (chatroomId, message) =>
      set((state) => ({
        messages: {
          ...state.messages,
          [chatroomId]: [...(state.messages[chatroomId] || []), message]
        }
      }))
  }),
  { name: 'chat-storage' }
));
