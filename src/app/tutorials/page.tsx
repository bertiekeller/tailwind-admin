import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, BookOpen, Star, BarChart, Filter } from "lucide-react";

export default function TutorialsPage() {
  const featuredTutorial = {
    id: "building-first-ai-agent",
    title: "Building Your First AI Agent with Our Framework",
    description: "A comprehensive step-by-step guide to building your first intelligent agent using our framework. Learn the fundamentals of agent architecture, prompt design, and tool integration.",
    level: "Beginner",
    duration: "1 hour 30 minutes",
    instructor: "Michael Chen",
    rating: 4.9,
    ratingCount: 352,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  };

  const tutorials = [
    {
      id: "prompt-engineering-basics",
      title: "Prompt Engineering Basics",
      description: "Learn the fundamentals of crafting effective prompts for large language models to achieve better results.",
      level: "Beginner",
      duration: "45 minutes",
      instructor: "Sarah Johnson",
      category: "Prompt Engineering",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fine-tuning-llms",
      title: "Fine-tuning LLMs for Domain-Specific Tasks",
      description: "A hands-on guide to fine-tuning large language models for specialized tasks and domains.",
      level: "Intermediate",
      duration: "2 hours",
      instructor: "David Rodriguez",
      category: "Model Training",
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vector-databases-for-ai",
      title: "Using Vector Databases with AI Applications",
      description: "Learn how to implement and optimize vector databases to enhance your AI applications with semantic search.",
      level: "Intermediate",
      duration: "1 hour 15 minutes",
      instructor: "Amara Okafor",
      category: "Databases",
      image: "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "advanced-agent-patterns",
      title: "Advanced Agent Design Patterns",
      description: "Explore sophisticated design patterns for building complex, multi-tool agents with specialized capabilities.",
      level: "Advanced",
      duration: "2 hours 30 minutes",
      instructor: "Michael Chen",
      category: "Agent Development",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ai-powered-nextjs",
      title: "Building AI-powered Next.js Applications",
      description: "A practical tutorial on integrating AI capabilities into your Next.js web applications.",
      level: "Intermediate",
      duration: "1 hour 45 minutes",
      instructor: "David Rodriguez",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ethical-ai-implementation",
      title: "Implementing Ethical AI Practices",
      description: "Guidelines and practical steps for ensuring your AI implementations are ethical and responsible.",
      level: "All Levels",
      duration: "1 hour",
      instructor: "Amara Okafor",
      category: "AI Ethics",
      image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = [
    "All Categories",
    "Agent Development",
    "Prompt Engineering",
    "Model Training",
    "Web Development",
    "Databases",
    "AI Ethics",
    "Data Science"
  ];

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="text-yellow-400">Tutorials</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Practical, hands-on tutorials to help you master AI development, from beginner concepts to advanced techniques.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Input 
                  placeholder="Search tutorials by keyword, topic, or instructor..." 
                  className="bg-gray-800 border-gray-700 text-white py-6 pl-5 pr-12 rounded-full focus:border-yellow-500"
                />
                <Search className="absolute top-1/2 right-5 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Featured Tutorial */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredTutorial.image} 
                    alt={featuredTutorial.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400 mb-4 self-start">
                    Featured Tutorial
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {featuredTutorial.title}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {featuredTutorial.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-400">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{featuredTutorial.level}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredTutorial.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      <span>{featuredTutorial.rating} ({featuredTutorial.ratingCount} ratings)</span>
                    </div>
                  </div>
                  <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 self-start">
                    <Link href={`/tutorials/${featuredTutorial.id}`}>
                      Start Tutorial
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-4 items-center">
              <div className="flex items-center text-white mr-2">
                <Filter className="h-4 w-4 mr-2" />
                <span>Filter by:</span>
              </div>
              
              <div className="relative">
                <select className="appearance-none bg-gray-800 text-gray-300 py-2 px-4 pr-8 rounded-md border border-gray-700 focus:outline-none focus:border-yellow-500">
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase().replace(' ', '-')}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select className="appearance-none bg-gray-800 text-gray-300 py-2 px-4 pr-8 rounded-md border border-gray-700 focus:outline-none focus:border-yellow-500">
                  {levels.map((level) => (
                    <option key={level} value={level.toLowerCase()}>
                      {level}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select className="appearance-none bg-gray-800 text-gray-300 py-2 px-4 pr-8 rounded-md border border-gray-700 focus:outline-none focus:border-yellow-500">
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Tutorials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400 mr-2">
                        {tutorial.category}
                      </span>
                      <span className="text-xs text-gray-400">{tutorial.level}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{tutorial.duration}</span>
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-gray-700 mt-auto">
                    <Button asChild className="w-full bg-gray-700 text-white hover:bg-gray-600">
                      <Link href={`/tutorials/${tutorial.id}`}>
                        View Tutorial
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mb-16">
              <Button className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-700">
                Load More Tutorials
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your AI Learning Journey</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Access all tutorials, courses, and resources with a SwitchDimension account. Join thousands of developers learning to build with AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Create Free Account</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400">
                <Link href="/pricing">View Premium Plans</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 