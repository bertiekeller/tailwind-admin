import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h2 className="text-2xl font-bold text-yellow-400">Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
} 