import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Bug, Zap, Package, Layers } from "lucide-react";

export default function ChangelogPage() {
  const releases = [
    {
      version: "v3.2.0",
      date: "May 15, 2024",
      title: "Enhanced Agent Capabilities",
      description: "Introducing advanced agent capabilities, improved performance, and expanded tool integrations.",
      type: "major",
      changes: [
        {
          category: "Feature",
          items: [
            "Added support for multi-step reasoning in agents",
            "Introduced context-aware tool selection for improved agent decision making",
            "Implemented new memory management system for long-running conversations"
          ]
        },
        {
          category: "Improvement",
          items: [
            "Optimized agent response time by 40%",
            "Enhanced the accuracy of agent responses with improved prompt engineering",
            "Updated the documentation with comprehensive examples"
          ]
        },
        {
          category: "Fix",
          items: [
            "Fixed memory leak in long-running agents",
            "Resolved issue with tool calling timeouts",
            "Fixed edge case in parallel tool execution"
          ]
        }
      ]
    },
    {
      version: "v3.1.2",
      date: "April 8, 2024",
      title: "Bug Fixes and Performance Updates",
      description: "This release addresses several critical bugs and performance issues reported by our users.",
      type: "patch",
      changes: [
        {
          category: "Fix",
          items: [
            "Fixed race condition in parallel agent execution",
            "Resolved authentication token refresh issues",
            "Fixed memory leak in long-running processes"
          ]
        },
        {
          category: "Improvement",
          items: [
            "Improved error handling for API integrations",
            "Optimized resource usage for large datasets",
            "Enhanced logging for easier debugging"
          ]
        }
      ]
    },
    {
      version: "v3.1.0",
      date: "March 22, 2024",
      title: "New Integrations and SDK Improvements",
      description: "Expanding our ecosystem with new integrations and significant SDK improvements.",
      type: "minor",
      changes: [
        {
          category: "Feature",
          items: [
            "Added integration with popular vector databases",
            "Introduced new Python SDK with improved type hints",
            "Added support for custom tool creation via web interface"
          ]
        },
        {
          category: "Improvement",
          items: [
            "Enhanced documentation with interactive examples",
            "Improved error messages with actionable suggestions",
            "Streamlined the authentication process"
          ]
        },
        {
          category: "Fix",
          items: [
            "Fixed inconsistent API responses",
            "Resolved websocket connection stability issues",
            "Fixed token counting for non-English languages"
          ]
        }
      ]
    },
    {
      version: "v3.0.0",
      date: "February 15, 2024",
      title: "Major Platform Upgrade",
      description: "Complete platform overhaul with new architecture, enhanced performance, and expanded capabilities.",
      type: "major",
      changes: [
        {
          category: "Feature",
          items: [
            "Rebuilt agent framework with a modular architecture",
            "Introduced function calling capabilities for all agents",
            "Added support for multi-modal inputs and outputs",
            "Launched new web-based agent builder with visual editor"
          ]
        },
        {
          category: "Improvement",
          items: [
            "Completely redesigned UI/UX for all platform interfaces",
            "Enhanced security with role-based access controls",
            "Improved API performance with smart caching",
            "Expanded model availability with support for custom fine-tuning"
          ]
        },
        {
          category: "Breaking Change",
          items: [
            "Updated authentication mechanism (requires token migration)",
            "Changed API response format for improved consistency",
            "Restructured SDK with new class hierarchies",
            "Deprecated legacy agent creation methods"
          ]
        }
      ]
    }
  ];
  
  const getBadgeColor = (type) => {
    switch(type) {
      case "major":
        return "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30";
      case "minor":
        return "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30";
      case "patch":
        return "bg-green-500/20 text-green-400 hover:bg-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30";
    }
  };
  
  const getCategoryIcon = (category) => {
    switch(category) {
      case "Feature":
        return <Zap className="h-4 w-4 mr-2" />;
      case "Improvement":
        return <Layers className="h-4 w-4 mr-2" />;
      case "Fix":
        return <Bug className="h-4 w-4 mr-2" />;
      case "Breaking Change":
        return <Package className="h-4 w-4 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Product <span className="text-yellow-400">Changelog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay up to date with all the latest updates, improvements, and new features in our platform.
              </p>
            </div>
            
            {/* Version Timeline */}
            <div className="space-y-12">
              {releases.map((release, index) => (
                <div key={release.version} className="relative">
                  {/* Timeline line */}
                  {index < releases.length - 1 && (
                    <div className="absolute left-6 top-8 w-0.5 h-full bg-gray-700 -z-10"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Version circle */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 border-2 border-yellow-500 flex items-center justify-center">
                      <span className="text-yellow-500 font-mono text-sm font-bold">{release.version.split('v')[1].split('.')[0]}</span>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-2">
                        <div className="mb-4">
                          <div className="flex items-center flex-wrap gap-2 mb-2">
                            <h2 className="text-2xl font-bold text-white mr-2">
                              {release.title}
                            </h2>
                            <Badge className={`font-mono ${getBadgeColor(release.type)}`}>
                              {release.version}
                            </Badge>
                          </div>
                          <div className="flex items-center text-gray-400 mb-4">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{release.date}</span>
                          </div>
                          <p className="text-gray-300">
                            {release.description}
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          {release.changes.map((changeGroup, cgIndex) => (
                            <div key={cgIndex}>
                              <h3 className="flex items-center text-lg font-medium text-white mb-2">
                                {getCategoryIcon(changeGroup.category)}
                                {changeGroup.category}
                              </h3>
                              <ul className="pl-6 space-y-2">
                                {changeGroup.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-gray-300 relative">
                                    <span className="absolute -left-6 top-2.5 w-2 h-2 rounded-full bg-gray-600"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-700">
                Load Previous Releases
              </Button>
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about new features, improvements, and upcoming releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Subscribe to Updates</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400">
                <Link href="/community">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 