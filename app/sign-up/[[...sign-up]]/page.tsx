
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <div className="flex items-center justify-center">
    <SignUp 
    appearance={{
      elements: {
        card: "shadow-lg rounded-lg", // Tailwind or custom classes for the card
      },
    }}
    />
  </div>
}



// "use client"
// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import { useRouter } from 'next/navigation';    

// const SignUpPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (response.ok) {
//         router.push('/login');
//       } else {
//         const data = await response.json();
//         setError(data.message || 'An error occurred during sign up');
//       }
//     } catch (error) {
//       console.error('An error occurred during sign up:', error);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f5faf7]">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-[#16a34a]">Sign Up</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="w-full px-3 py-2 border border-[#ebecef] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7bcb99]"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-3 py-2 border border-[#ebecef] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7bcb99]"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-6 relative">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               className="w-full px-3 py-2 border border-[#ebecef] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7bcb99]"
//               placeholder="Create a password"
//               required
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-8 text-gray-500"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#16a34a] text-white py-2 px-4 rounded-md hover:bg-[#138a3f] transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <a href="/login" className="text-[#16a34a] hover:underline">
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;