"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI Development Training",
    description: "Learn how to build, train, and deploy AI models with our expert-led courses designed for all skill levels.",
    icon: "🧠"
  },
  {
    title: "Web App Integration",
    description: "Discover the techniques to seamlessly integrate AI capabilities into web applications for enhanced user experiences.",
    icon: "🖥️"
  },
  {
    title: "Agent Development",
    description: "Master the art of creating intelligent agents that can automate tasks and interact with users naturally.",
    icon: "🤖"
  },
  {
    title: "Community Access",
    description: "Join our thriving community of AI enthusiasts, developers, and experts to collaborate and grow together.",
    icon: "👥"
  }
];

export function Features() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Empower Your AI Journey
          </h2>
          <p className="text-xl text-gray-400">
            SwitchDimension provides comprehensive resources to accelerate your growth in AI development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 transition-all hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-2xl">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 