"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const consultingAreas = [
  {
    title: "AI Strategy Development",
    description: "We help businesses develop comprehensive AI strategies aligned with their goals and capabilities.",
    items: [
      "AI readiness assessment",
      "Technology stack planning",
      "Implementation roadmap",
      "ROI analysis and projections",
      "Talent acquisition strategy"
    ]
  },
  {
    title: "Custom AI Solution Design",
    description: "Our experts design tailored AI solutions to address your specific business challenges.",
    items: [
      "Requirements analysis",
      "Solution architecture",
      "Integration planning",
      "Scalability considerations",
      "Data strategy development"
    ]
  },
  {
    title: "AI Implementation Support",
    description: "We provide hands-on assistance during the implementation of AI systems and workflows.",
    items: [
      "Technical oversight",
      "Quality assurance",
      "Team augmentation",
      "Knowledge transfer",
      "Change management"
    ]
  },
  {
    title: "AI Ethics & Governance",
    description: "We help establish ethical frameworks and governance structures for responsible AI use.",
    items: [
      "Ethics policy development",
      "Bias identification & mitigation",
      "Compliance assessment",
      "Governance framework",
      "Transparency guidelines"
    ]
  }
];

const consultingProcess = [
  {
    stage: "Discovery",
    description: "We begin by thoroughly understanding your business, challenges, goals, and current capabilities.",
    deliverables: "Comprehensive needs analysis report and preliminary recommendations."
  },
  {
    stage: "Strategy",
    description: "Our team develops a tailored AI strategy aligned with your business objectives and technical constraints.",
    deliverables: "Detailed strategy document with implementation roadmap and resource requirements."
  },
  {
    stage: "Implementation",
    description: "We support your team throughout the implementation process, providing expertise and guidance.",
    deliverables: "Working AI systems, implementation documentation, and knowledge transfer sessions."
  },
  {
    stage: "Optimization",
    description: "We continuously monitor system performance and make adjustments to maximize effectiveness and ROI.",
    deliverables: "Performance reports, optimization recommendations, and ongoing support."
  }
];

const caseStudies = [
  {
    client: "Healthcare Provider",
    challenge: "Inefficient patient scheduling leading to long wait times and underutilized resources.",
    solution: "Implemented a predictive AI system to optimize appointment scheduling based on historical patterns and real-time factors.",
    results: "30% reduction in wait times, 25% increase in resource utilization, and improved patient satisfaction scores."
  },
  {
    client: "Financial Services Firm",
    challenge: "Manual document processing causing delays and errors in client onboarding.",
    solution: "Developed an intelligent document processing system using computer vision and NLP technologies.",
    results: "90% reduction in processing time, 65% decrease in errors, and significant cost savings."
  },
  {
    client: "E-commerce Retailer",
    challenge: "Inability to personalize customer experiences at scale across digital touchpoints.",
    solution: "Created a comprehensive AI-driven personalization engine integrating with existing systems.",
    results: "42% increase in conversion rates, 35% higher average order value, and improved customer retention."
  }
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero section */}
        <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              AI <span className="text-yellow-400">Consulting</span> Services
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
              Strategic guidance and technical expertise to help your organization harness the power of AI
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="#contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-yellow-500/30 text-white hover:bg-gray-700">
                <Link href="#areas">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose SwitchDimension</h2>
              <p className="text-gray-300">
                Our consulting team combines deep technical expertise with practical business acumen to deliver AI solutions that drive real value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 text-yellow-400 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Industry Experience</h3>
                <p className="text-gray-300">
                  Our consultants have worked across multiple industries, bringing valuable cross-sector insights to your projects.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 text-yellow-400 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Technical Depth</h3>
                <p className="text-gray-300">
                  Our team includes AI researchers, engineers, and data scientists with expertise in cutting-edge technologies.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 text-yellow-400 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Practical Approach</h3>
                <p className="text-gray-300">
                  We focus on delivering practical solutions that address real business challenges, not theoretical concepts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting areas */}
        <section id="areas" className="py-16 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Consulting Areas
            </h2>
            
            <div className="space-y-8">
              {consultingAreas.map((area, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  
                  <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-5 h-5 rounded-full bg-yellow-500 text-gray-900 flex-shrink-0 text-xs flex items-center justify-center mr-2 mt-0.5">✓</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Consulting Process
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-12">
                {consultingProcess.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className={`mb-8 md:mb-0 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 relative">
                          <div className="absolute left-1/2 top-0 w-8 h-8 rounded-full bg-yellow-500 text-gray-900 font-bold flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            <span className="inline-block md:hidden mr-2 w-6 h-6 rounded-full bg-yellow-500 text-gray-900 text-xs font-bold flex items-center justify-center">
                              {index + 1}
                            </span>
                            {step.stage}
                          </h3>
                          <p className="text-gray-300 mb-4">{step.description}</p>
                          <div className="bg-gray-700/50 rounded p-3">
                            <p className="text-sm font-medium text-yellow-400 mb-1">Deliverables:</p>
                            <p className="text-sm text-gray-300">{step.deliverables}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <div className="h-0.5 w-1/2 bg-gray-700 absolute top-1/2 transform -translate-y-1/2 z-0 left-0"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-16 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Case Studies
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                  <div className="p-6">
                    <p className="text-sm text-yellow-400 mb-1">Client:</p>
                    <h3 className="text-xl font-bold text-white mb-4">{study.client}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-yellow-400">Challenge:</p>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-yellow-400">Solution:</p>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-yellow-400">Results:</p>
                        <p className="text-gray-300">{study.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-yellow-500/30 text-white hover:bg-gray-700">
                <Link href="/case-studies">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA / Contact section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
                  <p className="text-gray-300 mb-6">
                    Schedule a free consultation with our experts to discuss your challenges and explore how 
                    AI can help your organization achieve its goals.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-yellow-500 text-gray-900 flex-shrink-0 text-xs flex items-center justify-center mr-2 mt-0.5">✓</span>
                      <span className="text-gray-300">No obligation, 45-minute strategic consultation</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-yellow-500 text-gray-900 flex-shrink-0 text-xs flex items-center justify-center mr-2 mt-0.5">✓</span>
                      <span className="text-gray-300">Customized recommendations for your specific needs</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-yellow-500 text-gray-900 flex-shrink-0 text-xs flex items-center justify-center mr-2 mt-0.5">✓</span>
                      <span className="text-gray-300">Clear pricing and engagement options without hidden fees</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Request a Consultation</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-gray-300 text-sm mb-1">Name</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-1">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                          placeholder="Your email"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-1">Company</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-1">Message</label>
                        <textarea 
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white h-20"
                          placeholder="Briefly describe your needs"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                        Schedule Consultation
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-16 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">How long does a typical consulting engagement last?</h3>
                <p className="text-gray-300">
                  Engagement length varies based on project scope and complexity. Strategy projects typically range from 4-8 weeks, 
                  while implementation support can extend to several months. We offer flexible engagement models to suit your needs.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">Do you work with startups or only established companies?</h3>
                <p className="text-gray-300">
                  We work with organizations of all sizes, from startups to enterprises. For early-stage companies, 
                  we offer specialized packages designed to maximize impact while working within budget constraints.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">What industries do you specialize in?</h3>
                <p className="text-gray-300">
                  Our consultants have expertise across numerous industries including healthcare, financial services, 
                  retail, manufacturing, and technology. We tailor our approach to address industry-specific challenges.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">How do you measure success for consulting projects?</h3>
                <p className="text-gray-300">
                  We define clear, measurable objectives at the start of each engagement and track progress throughout. 
                  Success metrics typically include business outcomes, technical milestones, and knowledge transfer effectiveness.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 