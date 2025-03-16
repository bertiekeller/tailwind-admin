"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="relative max-w-4xl mx-auto p-8 md:p-12 overflow-hidden rounded-2xl bg-gray-800">
          {/* Decorative elements */}
          <div className="absolute left-0 top-0 h-[200px] w-[300px] bg-yellow-500/10 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 h-[200px] w-[300px] bg-yellow-500/10 blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to <span className="text-yellow-400">Build with AI</span>?
            </h2>
            
            <p className="mb-10 max-w-2xl text-xl text-gray-300">
              Start your AI development journey today with SwitchDimension. Sign up now to access our exclusive training materials and community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="h-12 px-8 text-base bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Sign Up Now</Link>
              </Button>
              <Button asChild className="h-12 px-8 text-base bg-transparent border border-yellow-500/30 text-white hover:bg-gray-700" variant="outline">
                <Link href="/dashboard">Access Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 