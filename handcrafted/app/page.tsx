// app/page.tsx
'use client';

import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import SignupForm from '@/components/SignupForm';

export default function Home() {
  const [tab, setTab] = useState<"login" | "signup">("login");

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-100 shadow-xl rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Welcome to Handcrafted Haven
        </h1>

        <div className="flex mb-4">
          <button
            className={`w-1/2 py-2 font-semibold ${
              tab === "login" ? "border-b-2 border-indigo-500 text-indigo-700" : "text-gray-500"
            }`}
            onClick={() => setTab("login")}
          >
            Log In
          </button>
          <button
            className={`w-1/2 py-2 font-semibold ${
              tab === "signup" ? "border-b-2 border-indigo-500 text-indigo-700" : "text-gray-500"
            }`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {tab === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </main>
  );
}
