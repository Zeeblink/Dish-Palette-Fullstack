// components/ProfileCard.tsx
import React from 'react';

const ProfileCard = () => {
  return (
    <aside className="w-full md:w-64 bg-primary text-white p-6 space-y-6">
      <h2 className="text-xl font-bold">Dishpalette</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-2">
              <span>🏠</span>
              <span>Dashboard Overview</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2">
              <span>📖</span>
              <span>My Recipes</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2">
              <span>➕</span>
              <span>Create New Recipe</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2">
              <span>❤️</span>
              <span>Favorites</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2">
              <span>⚙️</span>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2">
              <span>🚪</span>
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default ProfileCard;
