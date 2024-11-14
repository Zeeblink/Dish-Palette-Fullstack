'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
  const [visibility, setVisibility] = useState(false);

  const navToggle = () => {
    setVisibility(!visibility);
  };

  return (
    <header>
      {/* Navigation */}
      <nav className="flex items-center justify-between shadow-md flex-wrap bg-white py-6 px-4">
        <Link href='/' className="flex items-center flex-shrink-0 text-green-600 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Dish Palette
          </span>
        </Link>

        {/* nav items */}
        <div className="">
          <ul className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden">
            <li>
              <Link
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-green-600 hover:text-green-800 mr-8"
              >
                Recipes
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="block mt-4 mr-8 lg:inline-block lg:mt-0 text-green-600 hover:text-green-800"
              >
                Ingredients
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-green-600 hover:text-green-800 mr-8"
              >
                About
              </Link>
            </li>

            <li>
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-600 
            border-green-600 hover:border-transparent hover:text-white hover:bg-green-600 mt-4 lg:mt-0 mr-8"
                >
                  Sign In
                </Link>
              </SignedOut>
              <SignedIn>
              <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label='Dashboard'
                  href='/dashboard'
                  labelIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>}
                />
                <UserButton.Link
                  label='Create Recipe'
                  href='/create-recipe'
                  labelIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"> <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>}
                />
              </UserButton.MenuItems>
            </UserButton>
              </SignedIn>

            </li>
          </ul>
        </div>

        {/* Mobile Nav */}
        {/* Hamburger icon */}
        <div className="lg:hidden flex">
          <SignedIn>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label='Dashboard'
                  href='/dashboard'
                  labelIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>}
                />
                <UserButton.Link
                  label='Create Recipe'
                  href='/create-recipe'
                  labelIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"> <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>}
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
          <button
            onClick={navToggle}
            className="flex items-center ml-4 px-3 py-2 border rounded text-green-600 border-green-600 hover:text-white  hover:bg-green-600"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>


        {/*mobile nav items */}
        {visibility && (
          <div className="w-full flex-grow">
            <ul>
              <li>
                <Link
                  href="/"
                  className="block mt-4 lg:inline-block lg:mt-0 text-green-600 hover:text-green-800 mr-4"
                >
                  Recipes
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="block mt-4 lg:inline-block lg:mt-0 text-green-600 hover:text-green-800 mr-4"
                >
                  Ingredients
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="block mt-4 mr-6 lg:inline-block lg:mt-0 text-green-600 hover:text-green-800"
                >
                  About
                </Link>
              </li>

              <li>
                <SignedOut>
                  <Link
                    href="/sign-in"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-600 
            border-green-600 hover:border-transparent hover:text-white hover:bg-green-600 mt-4 lg:mt-0"
                  >
                    Sign In
                  </Link>
                </SignedOut>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
export default Header;