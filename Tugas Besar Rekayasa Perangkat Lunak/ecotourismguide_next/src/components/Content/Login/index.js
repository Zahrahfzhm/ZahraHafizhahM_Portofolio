"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


function LoginForm() {
  const [nama_pelaku, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {nama_pelaku, password}
    try {
        const response = await fetch("api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        )
        const user = await response.json();

        if (response.ok) {
            sessionStorage.setItem('data', JSON.stringify (user));
            console.log('data stored:', user);
            router.push('/UMKM/Dashboard');
        } else {
           setError(loginForm.message);
        }

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="mx-36 mb-36">
      <p className="pt-10 text-xl font-bold">Form Login</p>
      <div className="login-container flex flex-col mt-6 px-4 py-2 bg-white rounded-lg shadow-md">
        <form onSubmit={handleLogin} className="login-form">
          {[
            { label: 'Username', type: 'text', id: 'username', value: nama_pelaku, onChange: setUsername },
            { label: 'Password', type: 'password', id: 'password', value: password, onChange: setPassword },
          ].map((input, index) => (
            <div key={index} className="form-group mb-4">
              <label htmlFor={input.id} className="block text-gray-700 text-sm font-bold mb-2">{input.label}:</label>
              <input
                type={input.type}
                id={input.id}
                name={input.id}
                value={input.value}
                onChange={(e) => input.onChange(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
