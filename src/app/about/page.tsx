"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former AI researcher at DeepMind with 10+ years of experience in machine learning and neural networks.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Full-stack developer and AI engineer with a passion for creating accessible AI tools for developers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "David Rodriguez",
    role: "Head of Education",
    bio: "Former university professor with a PhD in Computer Science and a focus on AI education.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Amara Okafor",
    role: "Lead AI Researcher",
    bio: "Specialist in NLP and conversational AI with multiple published papers on agent-based systems.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We believe in pushing the boundaries of what's possible with AI technology, constantly exploring new approaches and solutions."
  },
  {
    title: "Accessibility",
    description: "We're dedicated to making advanced AI technology accessible to developers of all skill levels, regardless of background or resources."
  },
  {
    title: "Ethical Development",
    description: "We prioritize responsible AI development, considering the ethical implications of our work and promoting best practices."
  },
  {
    title: "Community-Driven",
    description: "We value the power of community and collaborative learning, believing that AI advances faster when knowledge is shared."
  }
];

const milestones = [
  { year: "2018", title: "Company Founded", description: "SwitchDimension was founded with a mission to democratize AI education." },
  { year: "2019", title: "First Training Program", description: "Launched our first AI development training program with 50 students." },
  { year: "2020", title: "Community Platform", description: "Created our online community platform connecting AI enthusiasts worldwide." },
  { year: "2021", title: "Agent Building Framework", description: "Released our proprietary framework for building sophisticated AI agents." },
  { year: "2022", title: "1,000+ Graduates", description: "Celebrated our 1,000th graduate from our training programs." },
  { year: "2023", title: "Global Expansion", description: "Expanded operations to serve students in over 50 countries." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="text-yellow-400">Mission</span>
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  We're building a future where AI development is accessible to everyone, empowering the next generation of creators and innovators.
                </p>
                <p className="text-gray-300 mb-8">
                  Founded in 2021, SwitchDimension has grown from a small AI education startup to a comprehensive platform serving thousands of developers around the world. Our tools and training programs are designed to democratize access to cutting-edge AI technology.
                </p>
                <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                  <Link href="/community">Join Our Community</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-75 blur"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Team collaboration" 
                    className="relative rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-yellow-400 mb-4">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Story
            </h2>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="space-y-6 text-gray-300">
                <p>
                  SwitchDimension began with a simple idea: AI development should be accessible to everyone, not just those with advanced degrees or access to expensive resources. Our founder, Sarah Johnson, experienced firsthand the barriers that prevented talented developers from entering the field.
                </p>
                <p>
                  After leaving her research position at a major AI lab, Sarah assembled a team of like-minded engineers and educators who shared her vision. Together, they created a platform that combined practical training with powerful development tools and a supportive community.
                </p>
                <p>
                  What started as an online course with a few hundred students has evolved into a comprehensive ecosystem used by thousands of developers worldwide. Today, SwitchDimension continues to innovate with new training programs, development tools, and community initiatives.
                </p>
                <p>
                  Our mission remains unchanged: to empower the next generation of AI developers and build a more inclusive future for technology. We're proud of the community we've built and excited about the road ahead.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Us on Our Journey</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a beginner eager to learn or an experienced developer looking to push the boundaries of AI, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Join the Community</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 