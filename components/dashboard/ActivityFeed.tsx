// components/ActivityFeed.tsx
import React from 'react';

const ActivityFeed = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <ul className="space-y-2 text-gray-700">
        <li>Added a new recipe: <strong>Chocolate Cake</strong></li>
        <li>Updated the recipe: <strong>Spaghetti Carbonara</strong></li>
        {/* Add logic to fetch and display user activity */}
      </ul>
    </div>
  );
};

export default ActivityFeed;
