"use client";

import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, LogOut, Settings } from "lucide-react";

export function Navbar() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              <span className="text-yellow-400">Switch</span>Dimension
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Services", "Community", "Pricing", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {status === "authenticated" ? (
              <div className="relative" ref={dropdownRef}>
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>{session.user.name || 'User'}</span>
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 font-bold">
                    {session.user.name ? session.user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                </Button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                    <Link 
                      href="/dashboard" 
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-yellow-400"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <User className="h-4 w-4 mr-2" />
                      <span>Dashboard</span>
                    </Link>
                    <Link 
                      href="/profile" 
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-yellow-400"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      <span>Settings</span>
                    </Link>
                    <div className="border-t border-gray-700 my-1"></div>
                    <button 
                      onClick={handleSignOut}
                      className="flex w-full items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-yellow-400"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      <span>Sign out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button asChild variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pb-4">
              {["Services", "Community", "Pricing", "About"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
              {status === "authenticated" ? (
                <>
                  <div className="flex items-center space-x-2 py-2">
                    <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 font-bold">
                      {session.user.name ? session.user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <span className="text-gray-300">{session.user.name || 'User'}</span>
                  </div>
                  <Link 
                    href="/dashboard" 
                    className="flex items-center py-2 text-gray-300 hover:text-yellow-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    <span>Dashboard</span>
                  </Link>
                  <Link 
                    href="/profile" 
                    className="flex items-center py-2 text-gray-300 hover:text-yellow-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    <span>Settings</span>
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center py-2 text-gray-300 hover:text-yellow-400"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Sign out</span>
                  </button>
                </>
              ) : (
                <>
                  <Button asChild variant="ghost" className="justify-center text-gray-300 hover:text-white hover:bg-gray-800">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="justify-center bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 