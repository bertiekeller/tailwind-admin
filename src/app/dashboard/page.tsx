"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { AuthGuard } from "@/components/auth/auth-guard";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="mt-2 text-xl text-gray-300">
                Welcome back, {session?.user?.name || "User"}!
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-gray-800 p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-3">My Courses</h2>
                <p className="text-gray-300 mb-4">Access your enrolled courses and continue your learning journey.</p>
                <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                  View Courses
                </Button>
              </div>
              
              <div className="rounded-lg bg-gray-800 p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-3">My Projects</h2>
                <p className="text-gray-300 mb-4">View and manage your AI projects and applications.</p>
                <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                  View Projects
                </Button>
              </div>
              
              <div className="rounded-lg bg-gray-800 p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-3">Community</h2>
                <p className="text-gray-300 mb-4">Engage with other students and join community events.</p>
                <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                  Go to Community
                </Button>
              </div>
              
              <div className="rounded-lg bg-gray-800 p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-3">Profile Settings</h2>
                <p className="text-gray-300 mb-4">Update your personal information and account preferences.</p>
                <Button asChild className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                  <Link href="/profile">
                    Manage Profile
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-10">
              <Button 
                variant="outline" 
                className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </AuthGuard>
  );
} 