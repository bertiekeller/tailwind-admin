"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MessageSquare, Users, Calendar, Badge, ArrowRight, Globe, CalendarIcon, Github } from "lucide-react";

const communityFeatures = [
  {
    title: "Discussion Forums",
    description: "Engage in deep conversations about AI development, share insights, and get help from the community.",
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    title: "Study Groups",
    description: "Join or create study groups focused on specific AI topics, technologies, or learning paths.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Events & Workshops",
    description: "Participate in virtual workshops, hackathons, and networking events with industry professionals.",
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    title: "Achievement System",
    description: "Earn badges and recognition for your contributions to the community and completion of challenges.",
    icon: <Badge className="h-6 w-6" />,
  },
];

const communityGroups = [
  {
    name: "Beginner AI Developers",
    members: 1250,
    topics: ["Fundamentals", "Getting Started", "First Projects"],
    activity: "Very Active"
  },
  {
    name: "LLM Enthusiasts",
    members: 765,
    topics: ["Prompt Engineering", "Fine-tuning", "Applications"],
    activity: "Active"
  },
  {
    name: "Computer Vision Projects",
    members: 520,
    topics: ["Object Detection", "Image Processing", "Neural Networks"],
    activity: "Active"
  },
  {
    name: "Agent Builders",
    members: 830,
    topics: ["Autonomous Agents", "Multi-agent Systems", "Tool Integration"],
    activity: "Very Active"
  },
];

const upcomingEvents = [
  {
    title: "Building Responsible AI Agents",
    type: "Workshop",
    date: "June 15, 2023",
    time: "10:00 AM - 12:00 PM PST",
    host: "Dr. Alex Morgan"
  },
  {
    title: "Community Hackathon: AI for Good",
    type: "Hackathon",
    date: "July 8-10, 2023",
    time: "All Day",
    host: "SwitchDimension Team"
  },
  {
    title: "Job Opportunities in AI Development",
    type: "Panel Discussion",
    date: "June 22, 2023",
    time: "4:00 PM - 5:30 PM PST",
    host: "Industry Leaders Panel"
  },
];

export default function CommunityPage() {
  const communityResources = [
    {
      title: "Discussion Forums",
      description: "Join our active community forums to discuss AI technologies, best practices, and troubleshooting.",
      icon: <MessageSquare className="h-8 w-8 text-yellow-400" />,
      link: "/community/forums"
    },
    {
      title: "Meetups & Events",
      description: "Attend virtual and in-person events worldwide to network with other AI practitioners.",
      icon: <CalendarIcon className="h-8 w-8 text-yellow-400" />,
      link: "/community/events"
    },
    {
      title: "Open Source Projects",
      description: "Contribute to our growing collection of open-source AI tools and libraries.",
      icon: <Github className="h-8 w-8 text-yellow-400" />,
      link: "/community/open-source"
    },
    {
      title: "Expert Network",
      description: "Connect with AI experts and mentors to accelerate your learning and career growth.",
      icon: <Users className="h-8 w-8 text-yellow-400" />,
      link: "/community/experts"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "AI Model Fine-tuning Workshop",
      date: "October 15, 2023",
      time: "2:00 PM - 4:00 PM EST",
      location: "Virtual",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "AI Ethics & Responsible Development",
      date: "October 22, 2023",
      time: "1:00 PM - 3:30 PM EST",
      location: "Virtual",
      image: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Building AI Agents Hackathon",
      date: "November 5-7, 2023",
      time: "All day",
      location: "San Francisco & Virtual",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-yellow-400">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Connect with fellow AI enthusiasts, share knowledge, and collaborate on projects in our growing community of developers and practitioners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Join the Community</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400">
                <Link href="/community/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Community Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityResources.map((resource, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                      <p className="text-gray-300 mb-4">{resource.description}</p>
                      <Link 
                        href={resource.link} 
                        className="text-yellow-400 hover:text-yellow-300 font-medium inline-flex items-center"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm">
                        <span className="text-yellow-400">Date:</span> {event.date}
                      </p>
                      <p className="text-gray-300 text-sm">
                        <span className="text-yellow-400">Time:</span> {event.time}
                      </p>
                      <p className="text-gray-300 text-sm">
                        <span className="text-yellow-400">Location:</span> {event.location}
                      </p>
                    </div>
                    <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                      Register Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400">
                <Link href="/community/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to receive updates on community events, new resources, and AI industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-l-md sm:rounded-r-none rounded-r-md sm:rounded-l-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-yellow-500"
              />
              <Button className="sm:rounded-l-none rounded-l-md sm:rounded-r-md bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 