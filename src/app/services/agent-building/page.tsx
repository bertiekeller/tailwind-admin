"use client";

import { ServicesLayout } from "@/components/services-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const agentTypes = [
  {
    title: "Research Assistants",
    icon: "🔍",
    description: "Create agents that can search, summarize, and analyze information from various sources.",
    capabilities: [
      "Retrieve information from multiple sources",
      "Generate comprehensive summaries",
      "Answer complex questions",
      "Identify patterns and trends",
      "Create visualizations of data"
    ]
  },
  {
    title: "Workflow Automators",
    icon: "⚙️",
    description: "Build agents that automate repetitive tasks and streamline complex workflows.",
    capabilities: [
      "Process and transform data",
      "Automate document generation",
      "Schedule and manage tasks",
      "Monitor systems and alert on issues",
      "Integrate with existing tools and services"
    ]
  },
  {
    title: "Conversational Interfaces",
    icon: "💬",
    description: "Develop sophisticated chat interfaces that can understand and respond to user requests.",
    capabilities: [
      "Natural language understanding",
      "Context-aware responses",
      "Personalized interactions",
      "Multi-step task completion",
      "Knowledge retrieval and synthesis"
    ]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechInnovate",
    content: "The agent-building program at SwitchDimension transformed how our company handles customer support. We now have AI agents handling 70% of inquiries without human intervention.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, DataSphere",
    content: "Building AI agents with SwitchDimension's methodology has allowed us to automate research tasks that used to take days. Our productivity has increased by 40%.",
    avatar: "MC"
  }
];

export default function AgentBuildingPage() {
  return (
    <ServicesLayout>
      <div>
        <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">AI Agent Development</h1>
        <p className="mb-8 text-xl text-gray-300">
          Build intelligent agents that automate tasks, enhance productivity, and deliver value
        </p>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Types of Agents You&apos;ll Create</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {agentTypes.map((type, index) => (
              <Card key={index} className="border-gray-700 bg-gray-800 transition-all hover:border-yellow-500/50">
                <CardHeader>
                  <div className="mb-4 text-4xl">{type.icon}</div>
                  <CardTitle className="text-xl text-white">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">{type.description}</p>
                  <h4 className="mb-2 text-sm font-medium text-yellow-400">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {type.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <span className="mr-2 text-yellow-400">•</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-white">Development Process</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-1 bg-gray-700 md:left-1/2"></div>
            <div className="space-y-12">
              {[
                { step: "1", title: "Define Agent Purpose", description: "Clearly define the problem your agent will solve and its core functionality." },
                { step: "2", title: "Design Agent Architecture", description: "Create the structural blueprint of your agent, including components and interactions." },
                { step: "3", title: "Develop Core Functions", description: "Build the essential capabilities your agent needs to fulfill its purpose." },
                { step: "4", title: "Implement Learning Mechanisms", description: "Add systems that allow your agent to improve through experience and feedback." },
                { step: "5", title: "Test and Iterate", description: "Rigorously test your agent in various scenarios and refine based on performance." },
                { step: "6", title: "Deploy and Monitor", description: "Launch your agent and establish monitoring systems to ensure optimal operation." }
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row">
                  <div className={`mb-8 flex md:w-1/2 md:pr-12 ${index % 2 === 1 ? "md:ml-auto" : ""}`}>
                    <div className="z-10 mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-gray-900 md:mr-0 md:ml-0">
                      {item.step}
                    </div>
                    <div className={`rounded-lg bg-gray-800 p-6 md:ml-4 ${index % 2 === 1 ? "md:mr-4 md:ml-0" : ""}`}>
                      <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-gray-700 bg-gray-800 p-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-gray-900">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-yellow-500/20 to-gray-800 p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h2 className="mb-4 text-2xl font-bold text-white">Build your first intelligent agent</h2>
              <p className="text-gray-300">
                Join our agent development program and learn how to create AI systems that can 
                think, learn, and solve complex problems autonomously.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Start Building</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
} 