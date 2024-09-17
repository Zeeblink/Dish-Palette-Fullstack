import React from 'react';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const ProfilePage: React.FC = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="bg-[#f5faf7] min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[#16a34a] mb-6">My Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <img
              src={session.user.image || '/default-avatar.png'}
              alt="Profile"
              className="w-full rounded-full"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">{session.user.name}</h2>
            <p className="text-gray-600 mb-4">{session.user.email}</p>
            <Link href="/edit-profile" className="bg-[#16a34a] text-white px-4 py-2 rounded hover:bg-[#7bcb99]">
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">My Recipes</h3>
          {/* Add a list or grid of user's recipes here */}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch user data and recipes from your API or database
  return { props: {} };
};

export default ProfilePage;