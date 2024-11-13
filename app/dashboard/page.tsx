import React from 'react';
import { Plus } from 'lucide-react'
import UserRecipes from '@/components/dashboard/UserRecipes';
import Link from 'next/link';

export default async function Dashboard() {

  return (
    <div className="flex min-h-screen bg-secondary">
      {/* Sidebar */}
      {/* <ProfileCard /> */}
      
      <main className="flex-1 p-6">
      {/* Top Navbar */}
      <header className="flex items-center justify-between bg-white py-4 px-6 mb-6 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Recipes"
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          {/* Notifications */}
          <button className="text-gray-500">🔔</button>
          {/* Profile Avatar (placeholder) */}
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </header>


      {/* Recipe Summary Cards */}
          <UserRecipes />


      {/* Floating "Create New Recipe" Button */}
      <Link
        href={'/create-recipe'}
        className="fixed bottom-8 right-8 bg-[#16A34A] p-3 rounded-full text-white shadow-lg hover:bg-[#138a3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16A34A]"
        aria-label="Create New Recipe"
      >
        <Plus className="h-6 w-6" />
      </Link>
    </main>


    </div>
  );
};

// export default Dashboard;

















// app/dashboard/page.tsx
// import React from 'react';
// import ProfileCard from '../components/ProfileCard';
// import UserRecipes from '../components/UserRecipes';
// import ActivityFeed from '../components/ActivityFeed';

// const DashboardPage = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-green-100 min-h-screen">
//       <ProfileCard />
//       <div className="col-span-2 space-y-6">
//         <UserRecipes />
//         <ActivityFeed />
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
