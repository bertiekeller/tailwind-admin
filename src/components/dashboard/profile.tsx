"use client";

import Image from "next/image";

export function Profile() {
  return (
    <div className="absolute right-4 top-4">
      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200">
        <Image
          src="https://github.com/shadcn.png"
          alt="Profile"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
} 