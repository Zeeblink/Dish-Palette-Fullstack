// components/Settings.tsx
import React from 'react';

const UserSettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Account UserSettings</h3>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Change Password:</label>
          <input type="password" placeholder="New Password" className="w-full px-4 py-2 border rounded-md shadow-sm" />
          <button className="bg-[#F5FAF7] text-gray-800 px-4 py-2 mt-4 rounded-md shadow-md hover:bg-gray-200">
            Update
          </button>
        </div>
        <div>
          <label className="block mb-2">Email Notifications:</label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
            <span className="ml-2">Receive updates on new recipes</span>
          </label>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Log Out</button>
      </div>
    </div>
  );
};

export default UserSettings;
