import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      id: "ai-training",
      title: "AI Training",
      description: "Comprehensive training programs for AI professionals and companies.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      url: "/services/ai-training"
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Modern web applications with AI integration for enhanced user experiences.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      url: "/services/web-development"
    },
    {
      id: "agent-building",
      title: "Agent Building",
      description: "Create powerful AI agents tailored to your business needs and workflows.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      url: "/services/agent-building"
    },
    {
      id: "consulting",
      title: "AI Consulting",
      description: "Expert guidance on implementing AI solutions within your organization.",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      url: "/services/consulting"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-yellow-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI training and web development to building intelligent agents, we provide comprehensive solutions to transform your business with cutting-edge technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                      <Link href={service.url}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-800 py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business with AI?</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our team to discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 