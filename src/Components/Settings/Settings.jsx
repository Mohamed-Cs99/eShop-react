import React, { useState } from 'react';

export default function Settings() {
  const [userName, setUserName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    // Add logic to save settings
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5 p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Notifications</label>
        <label className="flex items-center mt-1">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="form-checkbox"
          />
          <span className="ml-2">Enable Notifications</span>
        </label>
      </div>
      <button
        onClick={handleSave}
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Save Settings
      </button>
    </div>
  );
}
