// components/ProfileCard.tsx
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img src="/path-to-profile-image.jpg" alt="Profile" className="w-24 h-24 mx-auto rounded-full mb-4" />
      <h2 className="text-xl font-semibold mb-2">John Doe</h2>
      <p className="text-gray-600 mb-2">johndoe@example.com</p>
      <p className="text-gray-500 mb-4">Passionate home cook sharing recipes with the world.</p>
      <button className="bg-[#F5FAF7] text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-200">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;
