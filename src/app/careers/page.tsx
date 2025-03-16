import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      location: "San Francisco (Hybrid)",
      type: "Full-time",
      description: "We're looking for a Senior AI Engineer with expertise in large language models and agent development to join our core engineering team.",
      requirements: [
        "5+ years of experience in ML/AI engineering",
        "Experience with LLMs, fine-tuning, and prompt engineering",
        "Strong programming skills in Python and TypeScript",
        "Track record of building production AI systems"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      description: "Join our product team to build intuitive interfaces for AI tools that empower developers around the world.",
      requirements: [
        "3+ years experience with React, Next.js, and TypeScript",
        "Familiarity with modern UI/UX principles",
        "Experience building responsive web applications",
        "Passion for creating developer tools"
      ]
    },
    {
      id: 3,
      title: "AI Education Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Help design and deliver our AI training programs, creating educational materials that make complex concepts accessible.",
      requirements: [
        "Background in education or technical writing",
        "Solid understanding of machine learning concepts",
        "Experience creating learning materials",
        "Excellent communication skills"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain the infrastructure that powers our AI platform, ensuring scalability and reliability.",
      requirements: [
        "3+ years of DevOps/SRE experience",
        "Experience with Kubernetes, Docker, and cloud platforms",
        "CI/CD pipeline expertise",
        "Security best practices knowledge"
      ]
    }
  ];

  const perks = [
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours to support your ideal work-life balance."
    },
    {
      title: "Competitive Compensation",
      description: "Competitive salary, equity options, and comprehensive benefits package."
    },
    {
      title: "Learning & Development",
      description: "Dedicated budget for professional development and continuous learning."
    },
    {
      title: "Cutting-edge Technology",
      description: "Work with the latest AI technologies and shape the future of AI development."
    },
    {
      title: "Global Team",
      description: "Join a diverse team of talented individuals from around the world."
    },
    {
      title: "Regular Team Retreats",
      description: "Annual company retreats to connect, collaborate, and celebrate in person."
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
              Join Our <span className="text-yellow-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build the tools and technologies that will shape the future of AI development. We're always looking for talented individuals who are passionate about making AI accessible to all.
            </p>
            <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
              <a href="#openings">View Open Positions</a>
            </Button>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We're building a company where talented people can thrive, grow, and make a meaningful impact on the world of AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                  <p className="text-gray-300">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Job Openings Section */}
        <section id="openings" className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Current Openings
            </h2>
            
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300">
                            {job.location}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <Button asChild className="mt-4 md:mt-0 bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                        <Link href={`/careers/${job.id}`}>Apply Now</Link>
                      </Button>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 text-gray-300 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Don't see the right fit?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always interested in connecting with talented individuals. Send us your resume, and we'll keep you in mind for future opportunities.
            </p>
            <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 