"use client";

import { ServicesLayout } from "@/components/services-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const courses = [
  {
    title: "AI Fundamentals",
    level: "Beginner",
    duration: "6 weeks",
    description: "A comprehensive introduction to AI concepts, machine learning basics, and neural networks.",
    topics: ["Machine Learning Basics", "Neural Networks", "Data Preparation", "Model Evaluation", "Ethics in AI"],
    icon: "🧠"
  },
  {
    title: "Advanced LLM Training",
    level: "Intermediate",
    duration: "8 weeks",
    description: "Learn how to fine-tune large language models for specific tasks and domains.",
    topics: ["Transfer Learning", "Fine-tuning Techniques", "RLHF (Reinforcement Learning from Human Feedback)", "Evaluation Methods", "Prompt Engineering"],
    icon: "🔄"
  },
  {
    title: "Building AI-Powered Applications",
    level: "Advanced",
    duration: "10 weeks",
    description: "Create production-ready applications with integrated AI capabilities.",
    topics: ["API Integration", "Vector Databases", "Embeddings", "Retrieval Augmented Generation", "Deployment Strategies"],
    icon: "🚀"
  }
];

export default function AITrainingPage() {
  return (
    <ServicesLayout>
      <div>
        <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">AI Training Programs</h1>
        <p className="mb-8 text-xl text-gray-300">
          Expert-led training programs to help you master artificial intelligence development
        </p>

        <div className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card key={index} className="border-gray-700 bg-gray-800 transition-all hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700 text-2xl">
                    {course.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{course.title}</h3>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400">{course.level}</span>
                    <span className="rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-gray-300">{course.duration}</span>
                  </div>
                  <p className="mb-4 text-gray-300">{course.description}</p>
                  <div className="mb-6">
                    <h4 className="mb-2 text-sm font-medium text-gray-400">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <span className="mr-2 text-yellow-400">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-gray-800 p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h2 className="mb-4 text-2xl font-bold text-white">Ready to transform your AI skills?</h2>
              <p className="text-gray-300">
                Our training programs are designed by industry experts with years of practical experience. 
                Join thousands of students who have advanced their careers with SwitchDimension.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/signup">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
} 