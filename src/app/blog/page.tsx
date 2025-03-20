import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";

export default function BlogPage() {
  const featuredPost = {
    id: "fine-tuning-llms-2023",
    title: "Effective Strategies for Fine-Tuning LLMs in 2023",
    excerpt: "Learn the latest techniques for fine-tuning large language models to achieve better results with less data and computational resources.",
    date: "November 15, 2023",
    author: "Sarah Johnson",
    readTime: "12 min read",
    category: "AI Development",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  };

  const blogPosts = [
    {
      id: "agent-architecture-patterns",
      title: "Design Patterns for Effective AI Agent Architectures",
      excerpt: "Discover the key architectural patterns that can help you build more effective, responsive, and maintainable AI agents.",
      date: "November 10, 2023",
      author: "Michael Chen",
      readTime: "8 min read",
      category: "Agent Development",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prompt-engineering-guide",
      title: "The Complete Guide to Prompt Engineering",
      excerpt: "A comprehensive guide to crafting effective prompts for large language models to get the results you need.",
      date: "November 5, 2023",
      author: "David Rodriguez",
      readTime: "15 min read",
      category: "Prompt Engineering",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ai-ethics-business",
      title: "Implementing Ethical AI Practices in Business Applications",
      excerpt: "How businesses can ensure their AI implementations are ethical, transparent, and aligned with human values.",
      date: "October 30, 2023",
      author: "Amara Okafor",
      readTime: "10 min read",
      category: "AI Ethics",
      image: "https://images.unsplash.com/photo-1620063617761-93dfcb35f5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "data-labeling-automation",
      title: "Automating Data Labeling for Training Machine Learning Models",
      excerpt: "Techniques and tools for automating the tedious process of data labeling to accelerate your ML workflows.",
      date: "October 25, 2023",
      author: "Michael Chen",
      readTime: "7 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "next-js-ai-applications",
      title: "Building AI-Powered Applications with Next.js",
      excerpt: "A step-by-step guide to integrating AI capabilities into your Next.js web applications.",
      date: "October 20, 2023",
      author: "David Rodriguez",
      readTime: "11 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vector-databases-guide",
      title: "An Introduction to Vector Databases for AI Applications",
      excerpt: "Learn how vector databases can improve the performance and capabilities of your AI applications.",
      date: "October 15, 2023",
      author: "Sarah Johnson",
      readTime: "9 min read",
      category: "Databases",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = [
    "AI Development",
    "Machine Learning",
    "Prompt Engineering",
    "Agent Development",
    "Web Development",
    "AI Ethics",
    "Databases",
    "Tutorials"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-6 md:mb-0">
                AI <span className="text-yellow-400">Blog</span>
              </h1>
              
              <div className="w-full md:w-auto flex">
                <div className="relative w-full md:w-80">
                  <Input 
                    placeholder="Search articles..." 
                    className="bg-gray-800 border-gray-700 text-white pr-10 focus:border-yellow-500"
                  />
                  <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Featured Post */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400 mr-3">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-400">{featuredPost.date} • {featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">By {featuredPost.author}</span>
                    <Button asChild variant="link" className="text-yellow-400 hover:text-yellow-300 p-0">
                      <Link href={`/blog/${featuredPost.id}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400 mr-2">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="p-6 pt-0 mt-auto flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <Button asChild variant="link" className="text-yellow-400 hover:text-yellow-300 p-0">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mb-16">
              <Button className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-700">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Link 
                  key={category} 
                  href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and AI news delivered directly to your inbox. No spam, just valuable content.
            </p>
            <div className="flex justify-center">
              <NewsletterForm 
                title="" 
                description=""
                buttonText="Subscribe"
                showNameField={true}
                className="mx-auto"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 