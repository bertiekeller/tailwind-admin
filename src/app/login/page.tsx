"use client";

import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center">
            {registered && (
              <div className="mb-6 w-full max-w-md p-4 rounded-md bg-green-500/20 text-green-300 text-center">
                Account created successfully! Please log in.
              </div>
            )}
            
            <LoginForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 