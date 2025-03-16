"use client";

import { Button } from "@/components/ui/button";

export function Community() {
  return (
    <div className="py-24 bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Join Our <span className="text-yellow-400">AI Community</span>
            </h2>
            <p className="mb-6 text-xl text-gray-300">
              Connect with fellow AI enthusiasts, share your projects, and learn from experts in our vibrant community.
            </p>
            <ul className="mb-8 space-y-4">
              {[
                "Access to exclusive webinars and workshops",
                "Networking opportunities with industry professionals",
                "Collaborative projects and hackathons",
                "Q&A sessions with AI specialists"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 text-yellow-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
              Join Community
            </Button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative">
              {/* This would be an image or video in production */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-purple-500/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-2xl font-bold text-white mb-2">5,000+ Members</h3>
                  <p className="text-gray-400">and growing every day</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 bg-yellow-500/20 rounded-full blur-xl"></div>
            <div className="absolute -left-4 -bottom-4 h-32 w-32 bg-yellow-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 