'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
        <h2 className="text-2xl font-bold text-white">Something went wrong!</h2>
        <p className="text-gray-300 mb-6">
          An error occurred while processing your request.
        </p>
        <Button
          onClick={() => reset()}
          className="bg-yellow-500 text-gray-900 hover:bg-yellow-400"
        >
          Try again
        </Button>
      </div>
    </div>
  );
} 