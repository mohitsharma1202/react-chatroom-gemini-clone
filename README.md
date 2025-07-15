# 📱 React Gemini Chatroom Clone

A responsive, modern AI Chatroom interface built with **React.js**, **Tailwind CSS**, and **Formik** for form handling. This project replicates a conversational dashboard where users can send messages, receive simulated AI replies, and experience real-time chatroom features like message throttling, infinite scroll, image uploads, and typing indicators — all styled with Tailwind CSS and deployed on Netlify.

---

## 🚀 Live Project

👉 **Live Demo:** [https://elegant-strudel-02dfd8.netlify.app/](https://elegant-strudel-02dfd8.netlify.app/)

---

## 📑 Project Overview

The purpose of this project is to build a functional React-based chatroom simulation app demonstrating key concepts like:
- AI-like message responses
- Throttling and message delay handling
- Infinite scroll for older messages
- Form validation with Formik
- Image uploads with preview functionality
- Copy-to-clipboard message feature
- Smooth animations and transitions using Tailwind CSS

The app begins with an OTP login page, and upon successful login (using `1234` as OTP), users can access the chatroom dashboard.

---

## 📂 Project Structure

src/
├── components/
│ ├── ChatRoom.jsx // Chat interface UI
│ ├── Dashboard.jsx // Dashboard layout
│ ├── OtpForm.jsx // OTP Login form
│ └── MessageBubble.jsx // Individual message bubbles
│
├── store/
│ └── chatStore.js // Zustand store to manage chat state and actions
│
├── utils/
│ └── api.js // API utility functions (if any)
│
├── App.jsx // Main routing component
├── index.js // Entry point
├── index.css // Tailwind CSS imports
└── assets/ // Images, icons, and static assets

2️⃣ Install Dependencies
npm install
3️⃣ Run the Development Server
npm start
App will start at http://localhost:3000

This project is deployed on Netlify.
You can manually deploy by dragging the build folder to Netlify or connect your GitHub repo for continuous deployment.

Live URL: https://enchanting-lokum-270035.netlify.app/

🔖 Technologies Used
React JS

Zustand (for global state management)

Tailwind CSS

Formik

React Icons

Netlify Deployment

JavaScript (ES6+)

Intersection Observer API
