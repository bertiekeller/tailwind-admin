"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthGuard } from "@/components/auth/auth-guard";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would update the user profile here
    // For now, we'll just toggle the editing state
    setIsEditing(false);
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-white mb-6">Profile Settings</h1>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 text-2xl font-bold mr-4">
                    {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{session?.user?.name}</h2>
                    <p className="text-gray-400">{session?.user?.email}</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4 mt-4">
                    {isEditing ? (
                      <div className="flex space-x-3">
                        <Button type="submit" className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                          Save Changes
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="border-gray-600 text-gray-300"
                          onClick={() => setIsEditing(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        type="button" 
                        onClick={() => setIsEditing(true)}
                        className="bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                      >
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </form>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mt-6">
                <h3 className="text-xl font-bold text-white mb-4">Security</h3>
                <Button variant="outline" className="border-gray-600 text-gray-300">
                  Change Password
                </Button>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mt-6">
                <h3 className="text-xl font-bold text-white mb-4">Account Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Email Notifications</h4>
                      <p className="text-gray-400 text-sm">Receive email updates about your account</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </AuthGuard>
  );
} 