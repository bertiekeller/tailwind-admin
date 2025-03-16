'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface NewsletterFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  showNameField?: boolean;
}

export function NewsletterForm({
  title = 'Subscribe to our newsletter',
  description = 'Get the latest updates and news delivered to your inbox.',
  buttonText = 'Subscribe',
  className = '',
  showNameField = false,
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ text: 'Please enter your email address', type: 'error' });
      return;
    }
    
    setIsLoading(true);
    setMessage(null);
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name: showNameField ? name : undefined }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage({ text: data.message, type: 'success' });
        setEmail('');
        setName('');
      } else {
        setMessage({ 
          text: data.message || 'Failed to subscribe. Please try again.', 
          type: 'error' 
        });
      }
    } catch (error) {
      setMessage({ 
        text: 'An error occurred. Please try again later.', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`w-full max-w-md ${className}`}>
      {title && <h3 className="text-xl font-bold text-white mb-2">{title}</h3>}
      {description && <p className="text-gray-300 mb-4">{description}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-3">
        {showNameField && (
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
          />
        )}
        <div className="flex space-x-2">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
          />
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="bg-yellow-500 text-gray-900 hover:bg-yellow-400"
          >
            {isLoading ? (
              <span className="flex items-center">
                <span className="animate-spin mr-2">⟳</span> 
                <span>Loading...</span>
              </span>
            ) : (
              <span className="flex items-center">
                <Send size={16} className="mr-2" /> 
                {buttonText}
              </span>
            )}
          </Button>
        </div>
        
        {message && (
          <div className={`p-2 rounded text-sm ${
            message.type === 'success' 
              ? 'bg-green-500/20 text-green-300' 
              : 'bg-red-500/20 text-red-300'
          }`}>
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
} 