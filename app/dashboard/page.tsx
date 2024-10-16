// app/dashboard/page.tsx
import React from 'react';
import ProfileCard from '../components/ProfileCard';
import UserRecipes from '../components/UserRecipes';
import ActivityFeed from '../components/ActivityFeed';

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#F5FAF7] min-h-screen">
      <ProfileCard />
      <div className="col-span-2 space-y-6">
        <UserRecipes />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardPage;
