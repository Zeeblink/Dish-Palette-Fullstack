import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex justify-center items-center">
      <SignIn appearance={{
      elements: {
        card: "shadow-lg rounded-lg", // Tailwind or custom classes for the card
      },
     }} />
    </div>
  )
}
// "use client"
// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const result = await signIn('credentials', {
//         redirect: false,
//         email,
//         password,
//       });

//       if (result?.error) {
//         setError('Invalid email or password');
//       } else {
//         router.push('/dashboard');
//       }
//     } catch (error) {
//       console.error('An error occurred during sign in:', error);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-tertiary">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-[#16a34a]">Login</h2>
//         <form>
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
//               placeholder="Enter your password"
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
//             Log In
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <a href="/signup" className="text-[#16a34a] hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;