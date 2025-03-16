"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Search, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

interface DocSection {
  title: string;
  slug: string;
  items: {
    title: string;
    slug: string;
    content?: string;
  }[];
}

const docSections: DocSection[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    items: [
      {
        title: "Introduction",
        slug: "introduction",
        content: `
# Introduction to SwitchDimension

Welcome to SwitchDimension's documentation! This guide will help you navigate our platform and make the most of our AI training resources.

## What is SwitchDimension?

SwitchDimension is an educational platform focused on teaching practical AI development skills. Our mission is to empower developers to build AI solutions that solve real-world problems.

## How to Use This Documentation

This documentation is organized into sections that cover different aspects of our platform. You can navigate using the sidebar on the left or use the search function to find specific topics.

## Key Features

- Comprehensive AI training programs
- Hands-on projects with real-world applications
- Expert mentorship from industry professionals
- Community support and networking opportunities
- Resources for continuing education and skill development
`
      },
      {
        title: "Quick Start Guide",
        slug: "quick-start",
        content: `
# Quick Start Guide

This guide will help you get started with SwitchDimension's platform in just a few minutes.

## Step 1: Create an Account

Visit [signup](/signup) to create your account. You'll need to provide:
- Email address
- Password
- Basic profile information

## Step 2: Choose a Learning Path

Once logged in, navigate to the dashboard and select a learning path that matches your interests and goals:
- AI Foundation
- Advanced Machine Learning
- Natural Language Processing
- Computer Vision
- Agent Development

## Step 3: Set Up Your Development Environment

Follow our setup guide to configure your local environment with the necessary tools:
- Python 3.9+
- Required libraries (listed in each course section)
- Code editor of your choice
- Local or cloud-based development environment

## Step 4: Join Our Community

Connect with fellow learners in our community platform:
- Introduce yourself
- Join relevant study groups
- Participate in challenges and hackathons
`
      },
      {
        title: "System Requirements",
        slug: "system-requirements"
      }
    ]
  },
  {
    title: "Core Concepts",
    slug: "core-concepts",
    items: [
      {
        title: "AI Fundamentals",
        slug: "ai-fundamentals"
      },
      {
        title: "Machine Learning Basics",
        slug: "ml-basics"
      },
      {
        title: "Neural Networks",
        slug: "neural-networks"
      }
    ]
  },
  {
    title: "Tutorials",
    slug: "tutorials",
    items: [
      {
        title: "Building Your First AI Agent",
        slug: "first-agent"
      },
      {
        title: "Training Custom Models",
        slug: "custom-models"
      },
      {
        title: "Deploying AI Solutions",
        slug: "deploying"
      }
    ]
  },
  {
    title: "API Reference",
    slug: "api",
    items: [
      {
        title: "Authentication",
        slug: "authentication"
      },
      {
        title: "Endpoints",
        slug: "endpoints"
      },
      {
        title: "Error Handling",
        slug: "errors"
      }
    ]
  },
  {
    title: "Resources",
    slug: "resources",
    items: [
      {
        title: "Community Guidelines",
        slug: "community-guidelines"
      },
      {
        title: "FAQs",
        slug: "faqs"
      },
      {
        title: "Support",
        slug: "support"
      }
    ]
  }
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [activeItem, setActiveItem] = useState("introduction");
  const [expandedSections, setExpandedSections] = useState<string[]>(["getting-started"]);
  const [copied, setCopied] = useState(false);
  
  const activeContent = docSections
    .find(section => section.slug === activeSection)
    ?.items.find(item => item.slug === activeItem)
    ?.content || "";

  const toggleSection = (slug: string) => {
    if (expandedSections.includes(slug)) {
      setExpandedSections(expandedSections.filter(s => s !== slug));
    } else {
      setExpandedSections([...expandedSections, slug]);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row py-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 mb-8 lg:mb-0 lg:mr-8">
              <div className="sticky top-20 bg-gray-800 rounded-lg p-4">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Search docs..." 
                      className="pl-10 bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
                
                <nav className="space-y-1">
                  {docSections.map((section) => (
                    <div key={section.slug} className="border-b border-gray-700 pb-2 mb-2 last:border-0">
                      <button
                        className="flex w-full items-center justify-between py-2 text-gray-200 hover:text-yellow-400"
                        onClick={() => toggleSection(section.slug)}
                      >
                        <span className="font-medium">{section.title}</span>
                        {expandedSections.includes(section.slug) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      
                      {expandedSections.includes(section.slug) && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {section.items.map((item) => (
                            <li key={item.slug}>
                              <button
                                className={`w-full text-left py-1 px-2 text-sm rounded-md ${
                                  activeSection === section.slug && activeItem === item.slug
                                    ? "bg-yellow-500/10 text-yellow-400"
                                    : "text-gray-300 hover:text-white"
                                }`}
                                onClick={() => {
                                  setActiveSection(section.slug);
                                  setActiveItem(item.slug);
                                }}
                              >
                                {item.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </aside>
            
            {/* Content */}
            <div className="flex-grow">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-white">
                    {docSections
                      .find(section => section.slug === activeSection)
                      ?.items.find(item => item.slug === activeItem)
                      ?.title || "Documentation"}
                  </h1>
                  
                  <button
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-green-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  {activeContent ? (
                    <div className="markdown-content">
                      {activeContent.split('\n').map((line, index) => {
                        if (line.startsWith('# ')) {
                          return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
                        } else if (line.startsWith('## ')) {
                          return <h2 key={index} className="text-2xl font-bold mt-5 mb-3">{line.substring(3)}</h2>;
                        } else if (line.startsWith('- ')) {
                          return <li key={index} className="ml-6 my-1">{line.substring(2)}</li>;
                        } else if (line.startsWith('[') && line.includes('](/')) {
                          const linkText = line.substring(1, line.indexOf(']'));
                          const linkUrl = line.substring(line.indexOf('(') + 1, line.indexOf(')'));
                          return (
                            <p key={index} className="my-2">
                              <Link href={linkUrl} className="text-yellow-400 hover:underline">
                                {linkText}
                              </Link>
                            </p>
                          );
                        } else if (line.trim() === '') {
                          return <div key={index} className="h-4"></div>;
                        } else {
                          return <p key={index} className="my-2">{line}</p>;
                        }
                      })}
                    </div>
                  ) : (
                    <p className="text-gray-400">Select a topic from the sidebar to view documentation.</p>
                  )}
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button variant="outline" className="text-gray-300">
                  Previous
                </Button>
                <Button variant="outline" className="text-gray-300">
                  Next
                </Button>
              </div>
              
              <div className="mt-12 bg-gray-800/50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Need Help?</h2>
                <p className="text-gray-300 mb-4">
                  Can't find what you're looking for? Have questions about implementation?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                    <Link href="/community">Join Our Community</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-yellow-500/30 text-white hover:bg-gray-700">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 