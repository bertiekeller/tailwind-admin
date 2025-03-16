"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background glow effects */}
      <div className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl"></div>
      
      <div className="relative z-10 px-6 text-center">
        <h1 className="mb-8 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl">
          Build with AI
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
          Unlock the power of artificial intelligence with SwitchDimension&apos;s cutting-edge training, tools, and community.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
          <Button className="h-12 px-8 text-base bg-yellow-500 text-gray-900 hover:bg-yellow-400">
            Get Started
          </Button>
          <Button className="h-12 px-8 text-base bg-gray-800 border border-yellow-500/30 text-white hover:bg-gray-700" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
} 