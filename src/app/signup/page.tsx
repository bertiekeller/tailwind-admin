"use client";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center">
            <SignupForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 