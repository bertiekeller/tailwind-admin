"use client";

import { ServicesLayout } from "@/components/services-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const technologies = [
  { name: "React", icon: "⚛️", description: "Build interactive UIs with the popular React library." },
  { name: "Next.js", icon: "🔺", description: "Create full-stack applications with the React framework." },
  { name: "TailwindCSS", icon: "🎨", description: "Style your applications with utility-first CSS." },
  { name: "TypeScript", icon: "📝", description: "Add type safety to your JavaScript applications." },
  { name: "Node.js", icon: "🟢", description: "Build server-side applications with JavaScript." },
  { name: "OpenAI API", icon: "🤖", description: "Integrate powerful AI capabilities into your apps." }
];

const projectTypes = [
  {
    title: "AI-Enhanced Web Applications",
    description: "Build web applications that leverage AI APIs to provide intelligent features.",
    benefits: [
      "Intelligent data analysis",
      "Natural language processing",
      "Content generation",
      "Personalized user experiences",
      "Automated decision-making"
    ]
  },
  {
    title: "Interactive Dashboards",
    description: "Create data visualization dashboards with real-time AI insights.",
    benefits: [
      "Real-time data processing",
      "Predictive analytics",
      "Interactive charts and graphs",
      "Customizable reports",
      "Anomaly detection"
    ]
  },
  {
    title: "AI Workflow Automation",
    description: "Develop applications that automate complex workflows using AI.",
    benefits: [
      "Task prioritization",
      "Process optimization",
      "Resource allocation",
      "Error detection and prevention",
      "Efficiency improvements"
    ]
  }
];

export default function WebDevelopmentPage() {
  return (
    <ServicesLayout>
      <div>
        <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">Web Development with AI</h1>
        <p className="mb-8 text-xl text-gray-300">
          Learn how to build modern web applications enhanced with artificial intelligence
        </p>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Technologies You&apos;ll Master</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div key={index} className="rounded-lg border border-gray-700 bg-gray-800 p-6 transition-all hover:border-yellow-500/50">
                <div className="mb-4 text-4xl">{tech.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">What You&apos;ll Build</h2>
          <div className="space-y-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="rounded-lg border border-gray-700 bg-gray-800 p-6">
                <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <h4 className="mb-2 text-sm font-medium text-yellow-400">Benefits:</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="mr-2 text-yellow-400">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-gray-800 to-gray-800/70 p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h2 className="mb-4 text-2xl font-bold text-white">Ready to build amazing AI web apps?</h2>
              <p className="text-gray-300">
                Join our web development program and learn how to create cutting-edge applications 
                that leverage the power of artificial intelligence.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Join Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
} 